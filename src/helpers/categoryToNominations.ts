import {
  MOVIE_TO_ID,
  NOMINEE_TO_ID,
  type CATEGORIES,
} from "../constants/nominations";

export function categoryToNominations(
  nominations: (typeof CATEGORIES)[keyof typeof CATEGORIES],
): { id: number; name: string; nominee?: keyof typeof NOMINEE_TO_ID }[] {
  let movies;
  // @ts-expect-error mix of types leads to unreliable typing
  if (nominations.length === undefined) {
    movies = Object.entries(nominations).map(([nominee, movie]) => ({
      id: MOVIE_TO_ID[movie as keyof typeof MOVIE_TO_ID],
      name: movie,
      nominee,
    }));
  } else {
    // @ts-expect-error mix of types leads to unreliable typing
    movies = nominations.map((movie) => ({
      name: movie,
      id: MOVIE_TO_ID[movie as keyof typeof MOVIE_TO_ID],
      nominee: undefined,
    }));
  }
  return movies;
}
