import { TMDBImage } from './tmdbimages/tmdbImg'
import { useMovie } from '../hooks/useMovie'

export function MovieCard({
  movieId,
  extra,
}: {
  movieId: number
  extra?: string
}) {
  const { movie } = useMovie(movieId)
  return (
    <div className="flex md:flex-col gap-2">
      <div
        className="hover:z-2 transform-gpu transition-transform duration-300 hover:scale-110!"
        style={{ aspectRatio: '0.667 / 1' }}
      >
        {movie && (
          <TMDBImage
            type="poster"
            className="w-16! md:w-auto!"
            path={movie.poster_path}
          />
        )}
      </div>
      <div className="pt-2 flex flex-col justify-center text-left md:text-center">
        {extra && <p className="mb-1 text-slate-500 text-lg">{extra}</p>}
        <h3 className="mb-1 text-sm">{movie?.title}</h3>
        {movie?.title !== movie?.original_title && (
          <p className="text-slate-400 text-xs">({movie?.original_title})</p>
        )}
      </div>
    </div>
  )
}
