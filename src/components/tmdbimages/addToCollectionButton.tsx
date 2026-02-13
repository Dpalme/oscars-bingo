import { useState } from 'react';
import {
  useAddToCollection,
  useRemoveFromCollection,
} from '#/collection/hooks';
import AddIcon from '#assets/heart_outline.svg';
import AddedIcon from '#assets/heart_filled.svg';

export const AddToCollectionButton = (props: {
  type: 'backdrop' | 'logo' | 'poster' | 'profile' | 'still';
  movie_id: string;
  file_path: string;
  inCollection: boolean;
  aspect_ratio: number;
  height: number;
  loading?: boolean;
  width: number;
}) => {
  const [inCollection, setInCollection] = useState(props.inCollection);
  const { mutate: addToCollection, isPending: addLoading } =
    useAddToCollection();
  const { mutate: removeFromCollection, isPending: remLoading } =
    useRemoveFromCollection();

  return (
    <div className="h-8 w-8">
      <button
        disabled={props.loading || remLoading || addLoading}
        onClick={(ev) => {
          (inCollection ? removeFromCollection : addToCollection)(
            {
              file_path: props.file_path,
              movie_id: props.movie_id,
              aspect_ratio: props.aspect_ratio,
              height: props.height,
              width: props.width,
              type: props.type,
            },
            {
              onSuccess: () => setInCollection((prevValue) => !prevValue),
            },
          );
          ev.stopPropagation();
        }}
        className={[
          'h-full cursor-pointer',
          addLoading || (remLoading && 'animate-pulse'),
        ].join(' ')}
        key={`${props.file_path}.button.${inCollection}`}
      >
        <img
          className="h-full w-full"
          src={inCollection ? AddedIcon : AddIcon}
        />
      </button>
    </div>
  );
};
