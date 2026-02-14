import {
  CATEGORIES,
  EMOJI_TO_MOVIE,
  EMOJI_TO_NOMINEE,
  MOVIE_TO_EMOJI,
  NOMINEE_TO_EMOJI,
} from '../constants/nominations'

export function nominationToEmoji(
  categoryName: keyof typeof CATEGORIES,
  optionNumber: number,
): string {
  const category = CATEGORIES[categoryName]
  // @ts-expect-error bad typing since I'm mixing value types for object
  if (category.length !== undefined) {
    // @ts-expect-error bad typing since I'm mixing value types for object
    return MOVIE_TO_EMOJI[category[optionNumber] as keyof typeof MOVIE_TO_EMOJI]
  }
  if (categoryName in NOMINEE_TO_EMOJI) {
    const nominee = Object.keys(category)[optionNumber]
    const categoryNominees =
      NOMINEE_TO_EMOJI[categoryName as keyof typeof NOMINEE_TO_EMOJI]
    // @ts-expect-error bad typing since I'm mixing value types for object
    return categoryNominees[nominee]
  }
  return MOVIE_TO_EMOJI[
    Object.values(category)[optionNumber] as keyof typeof MOVIE_TO_EMOJI
  ]
}

export function emojiToNomination(
  categoryName: keyof typeof CATEGORIES,
  emoji: (typeof MOVIE_TO_EMOJI)[keyof typeof MOVIE_TO_EMOJI],
): number {
  const category = CATEGORIES[categoryName]
  // @ts-expect-error bad typing since I'm mixing value types for object
  if (category.length !== undefined) {
    const movie = EMOJI_TO_MOVIE[emoji]
    // @ts-expect-error bad typing since I'm mixing value types for object
    return category.indexOf(movie)
  }
  if (categoryName in NOMINEE_TO_EMOJI) {
    const nominee = EMOJI_TO_NOMINEE[categoryName][emoji]
    return Object.keys(category).indexOf(nominee)
  }

  const movie = EMOJI_TO_MOVIE[emoji]
  return Object.values(category).indexOf(movie)
}
