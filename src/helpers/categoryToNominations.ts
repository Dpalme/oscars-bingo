import { MOVIE_TO_ID, type CATEGORIES } from '../constants/nominations'

export function categoryToNominations(
  nominations: (typeof CATEGORIES)[keyof typeof CATEGORIES],
) {
  let movies
  if ((nominations as string[]).length === undefined) {
    movies = Object.entries(nominations).map(([nominee, movie]) => ({
      id: MOVIE_TO_ID[movie as keyof typeof MOVIE_TO_ID],
      name: movie,
      nominee,
    }))
  } else {
    movies = (nominations as string[]).map((movie) => ({
      name: movie,
      id: MOVIE_TO_ID[movie as keyof typeof MOVIE_TO_ID],
      nominee: undefined,
    }))
  }
  return movies
}
