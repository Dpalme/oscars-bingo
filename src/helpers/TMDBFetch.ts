import { fetcher } from './fetcher'

const TMDB_BASE_URL = 'https://api.themoviedb.org'

export async function TMDBFetch(path: string, params = {}) {
  return await fetcher(TMDB_BASE_URL + path, params, {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  })
}
