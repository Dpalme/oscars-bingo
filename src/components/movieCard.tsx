import { TMDBImage } from './tmdbimages/tmdbImg'
import { useMovie } from '../hooks/useMovie'

export function MovieCard({ movieId }: { movieId: number }) {
  const { movie } = useMovie(movieId)
  return (
    <div className="flex flex-col gap-2">
      <div
        className="hover:z-2 transform-gpu transition-transform duration-300 hover:scale-110!"
        style={{ aspectRatio: '0.667 / 1' }}
      >
        {movie && <TMDBImage type="poster" path={movie.poster_path} />}
      </div>
      <div className="pt-2 text-slate-300">
        <h3 className="mb-1 text-sm">{movie?.title}</h3>
        {movie?.title !== movie?.original_title && (
          <p className="text-xs">({movie?.original_title})</p>
        )}
      </div>
    </div>
  )
}
