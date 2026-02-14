import { TMDBImage } from "./tmdbimages/tmdbImg";
import { useMovie } from "../hooks/useMovie";

export function MovieBackdrop({ movieId }: { movieId: number }) {
  const { movie } = useMovie(movieId);
  return (
    <>
      {movie && (
        <TMDBImage
          type="backdrop"
          path={movie.backdrop_path}
          className="absolute top-0 left-0 -z-2 h-full w-full object-cover object-center"
          fullSize={true}
        />
      )}
      <div className="absolute top-0 left-0 -z-1 h-full w-full bg-radial from-20% from-transparent to-black"></div>
      <div className="p-2 text-slate-200">
        {movie?.images?.logos?.length ? (
          <TMDBImage
            type="logo"
            path={
              movie.images.logos.find((image) => image.iso_639_1 == "en")
                ?.file_path ?? movie.images.logos[0].file_path
            }
            alt={movie.title}
            fullSize={true}
            className="w-96! object-contain object-bottom-left drop-shadow-md"
          />
        ) : (
          <p className="font-title text-4xl font-extrabold">{movie?.title}</p>
        )}
      </div>
    </>
  );
}
