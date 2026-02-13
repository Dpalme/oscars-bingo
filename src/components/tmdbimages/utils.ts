export const TMDB_IMG_BASE_URL = 'https://image.tmdb.org/t/p/'

export const SIZES = {
  backdrop: ['w300', 'w780', 'w1280', 'original'],
  logo: ['w45', 'w92', 'w154', 'w185', 'w300', 'w500', 'original'],
  poster: ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'],
  profile: ['w45', 'w185', 'h632', 'original'],
  still: ['w92', 'w185', 'w300', 'original'],
}

export function getURLForSize(size: string, imgPath: string) {
  return `${TMDB_IMG_BASE_URL}${size}${imgPath}`
}

export function getSmallestImage(
  type: 'backdrop' | 'logo' | 'poster' | 'profile' | 'still',
  path: string,
) {
  const sizes = SIZES[type]
  return getURLForSize(sizes[0], path)
}

export function getSrcSetForImage(
  type: 'backdrop' | 'logo' | 'poster' | 'profile' | 'still',
  path: string,
) {
  const sizes = SIZES[type]
  const srcSets = sizes
    .slice(2)
    .map((size, i) => `${getURLForSize(size, path)} ${i + 1}x`)

  return srcSets.join(',')
}
