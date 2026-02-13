//@ts-ignore
var indexedDB =
  window.indexedDB ||
  // @ts-ignore
  window.webkitIndexedDB ||
  // @ts-ignore
  window.mozIndexedDB ||
  // @ts-ignore
  window.OIndexedDB ||
  // @ts-ignore
  window.msIndexedDB;
//@ts-ignore
var IDBTransaction =
  window.IDBTransaction ||
  // @ts-ignore
  window.webkitIDBTransaction ||
  // @ts-ignore
  window.OIDBTransaction ||
  // @ts-ignore
  window.msIDBTransaction;
var dbVersion = 2;

interface DBEntry {
  file_path: string;
  movie_id: string;
  added_on: string;
  type: 'backdrop' | 'logo' | 'poster' | 'profile' | 'still';
  aspect_ratio: number;
  height: number;
  width: number;
}

// Create/open database
let DBOpenRequest = indexedDB.open('posterify', dbVersion);

function createDefault(dataBase: IDBDatabase) {
  // Create an objectStore
  console.log('Creating objectStore default');
  let collection = dataBase.createObjectStore('collection', {
    keyPath: 'file_path',
  });
  collection.createIndex('movie_id', 'movie_id');
  collection.createIndex('added_on', 'added_on');
  collection.createIndex('type', 'type');
  collection.createIndex('aspect_ratio', 'aspect_ratio');
  collection.createIndex('height', 'height');
  collection.createIndex('width', 'width');
}

DBOpenRequest.onerror = function (e) {
  console.error('Error creating/accessing IndexedDB database', e);
};

DBOpenRequest.onsuccess = function (e) {
  console.log('Success creating/accessing IndexedDB database');
  const db = DBOpenRequest.result;

  if (DBOpenRequest.result.objectStoreNames.length == 0) {
    createDefault(db);
  }

  db.onerror = function (e) {
    console.error('Error creating/accessing IndexedDB database', e);
  };

  db.onversionchange = function (e) {
    location.reload();
  };
};

DBOpenRequest.onupgradeneeded = function () {
  createDefault(DBOpenRequest.result);
};

export async function addToCollection(item: {
  file_path: string;
  movie_id: string;
  type: 'backdrop' | 'logo' | 'poster' | 'profile' | 'still';
  aspect_ratio: number;
  width: number;
  height: number;
}) {
  return new Promise<DBEntry>((res, rej) => {
    try {
      var dbOpenReq = indexedDB.open('posterify', dbVersion);

      dbOpenReq.onsuccess = () => {
        // Open a transaction to the database
        const db = dbOpenReq.result;
        var tx = db.transaction('collection', 'readwrite');
        var store = tx.objectStore('collection');
        const dbEntry = { ...item, added_on: new Date().toUTCString() };
        store.add(dbEntry);
        tx.commit();
        tx.oncomplete = () => res(dbEntry);
        tx.onerror = (e) => rej(e);
      };
    } catch (e) {
      rej(e);
    }
  });
}

export async function removeFromCollection(file_path: string) {
  return new Promise((res, rej) => {
    try {
      var dbOpenReq = indexedDB.open('posterify', dbVersion);

      dbOpenReq.onsuccess = () => {
        // Open a transaction to the database
        const db = dbOpenReq.result;

        // Open a transaction to the database
        var tx = db.transaction('collection', 'readwrite');
        var store = tx.objectStore('collection');
        store.delete(file_path);
        tx.commit();
        tx.oncomplete = () => res(true);
        tx.onerror = (e) => rej(e);
      };
    } catch (e) {
      rej(e);
    }
  });
}

export function getCollection(
  query?: IDBKeyRange | IDBValidKey,
  limit?: number,
): Promise<DBEntry[]> {
  return new Promise((res, rej) => {
    try {
      var dbOpenReq = indexedDB.open('posterify', dbVersion);

      dbOpenReq.onsuccess = () => {
        // Open a transaction to the database
        const db = dbOpenReq.result;

        var tx = db.transaction('collection', 'readonly');
        let list_ref = tx.objectStore('collection');
        const trans = list_ref.getAll(query, limit);
        trans.onsuccess = () => res(trans.result);
        trans.onerror = () => rej(trans.error);
      };
    } catch (e) {
      rej(e);
    }
  });
}
