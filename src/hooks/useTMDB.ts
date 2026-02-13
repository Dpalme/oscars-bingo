import { fetcher } from './useFetch'

const TMDB_BASE_URL = 'https://api.themoviedb.org'

export const TMDBFetch = (path: string, params = {}) => {
  return fetcher(TMDB_BASE_URL + path, params, {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  })
}
