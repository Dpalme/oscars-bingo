import { useMemo } from 'react'
import { getSmallestImage, getURLForSize } from './utils'

export const TMDBImage = (props: {
  type: 'backdrop' | 'logo' | 'poster' | 'profile' | 'still'
  path: string
  alt?: string
  className?: string
  aspectRatio?: number
  fullSize?: boolean
}) => {
  const smallestImage = useMemo(
    () => getSmallestImage(props.type, props.path),
    [props.type, props.path],
  )
  const originalImage = useMemo(() => {
    let size = 'original'
    if (!props.fullSize) {
      switch (props.type) {
        case 'poster':
          size = 'w342'
          break
        case 'backdrop':
          size = 'w300'
          break
        case 'logo':
          size = 'w300'
          break
        case 'still':
          size = 'w300'
          break
        case 'profile':
          size = 'w185'
          break
      }
    }
    return getURLForSize(size, props.path)
  }, [props.fullSize, props.path, props.type])
  return (
    <img
      src={originalImage}
      alt={props.alt}
      className={[
        props.className,
        props.type == 'poster' ? 'bg-gray-400 dark:bg-gray-700' : '',
        'w-full',
      ].join(' ')}
      loading="lazy"
      style={{
        aspectRatio: props.aspectRatio,
        backgroundImage: `url('${smallestImage}')`,
      }}
      width={props.type == 'poster' ? 2000 : props.type == 'logo' ? 480 : 3840}
      height={props.type == 'poster' ? 3000 : props.type == 'logo' ? 480 : 2160}
      onLoad={(ev) => (ev.currentTarget.style.background = 'transparent')}
    />
  )
}
