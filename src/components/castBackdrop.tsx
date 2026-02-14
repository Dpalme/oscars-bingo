import { TMDBImage } from "./tmdbimages/tmdbImg";
import { useCrewMember } from "../hooks/useCrew";
import { useMemo } from "react";
import type { NOMINEE_TO_ID } from "../constants/nominations";

export function CastBackdrop({
  peopleName,
  movieId,
}: {
  peopleName: keyof typeof NOMINEE_TO_ID;
  movieId: number;
}) {
  const { data: castMember } = useCrewMember(peopleName);
  const movie = useMemo(
    () => castMember?.credits.cast.find((movie) => movie.id == movieId),
    [castMember, movieId],
  );
  return (
    <>
      {castMember && (
        <TMDBImage
          type="poster"
          path={castMember.profile_path}
          className="absolute top-0 left-0 -z-2 h-full w-full object-cover object-center"
          fullSize={true}
        />
      )}
      <div className="absolute top-0 left-0 -z-1 h-full w-full bg-radial from-20% from-transparent to-black"></div>
      <div className="p-2 text-slate-300">
        <h2>{movie?.character}</h2>
        <p>{movie?.title}</p>
      </div>
    </>
  );
}
