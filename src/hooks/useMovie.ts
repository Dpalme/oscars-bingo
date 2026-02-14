import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { TMDBFetch } from '../helpers/TMDBFetch'

export interface TMDBImage {
  aspect_ratio: number
  height: number
  iso_639_1: string
  file_path: string
  vote_average: number
  vote_count: number
  width: number
}

export interface ITMDBMovie {
  adult: boolean
  backdrop_path: string
  genre_ids: string[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  images?: MovieImages
}

export interface MovieImages {
  backdrops: TMDBImage[]
  posters: TMDBImage[]
  logos: TMDBImage[]
}

export async function getMovie(movieId: number | string): Promise<ITMDBMovie> {
  return TMDBFetch(
    '/3/movie/' + movieId,
  ) as unknown as Promise<ITMDBMovie>
}

export const useMovie = (movieId: number | string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['movies', movieId],
    queryFn: () => getMovie(movieId),
  })

  return {
    movie: data,
    error: error as AxiosError | undefined,
    loading: isLoading,
  }
}
