import { TMDBImage } from "./tmdbimages/tmdbImg";
import { useCrewMember } from "../hooks/useCrew";
import { useMemo } from "react";
import type { NOMINEE_TO_ID } from "../constants/nominations";

export function CastBackdrop({
  peopleName,
  movieId,
  nominee,
  category,
}: {
  peopleName: keyof typeof NOMINEE_TO_ID;
  movieId: number;
  nominee: string;
  category: string;
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
          className="-z-2 h-[70vh] w-full object-contain object-center"
          fullSize={true}
        />
      )}
      {/* <div className="absolute top-0 left-0 -z-1 h-full w-full bg-radial from-20% from-transparent to-black"></div> */}
      <div className="p-2 flex flex-col w-full">
        <h2 className="text-4xl py-4">{category}</h2>
        <p className="text-2xl">{nominee}</p>
        <p>
          as <b className="font-semibold">{movie?.character}</b>
        </p>
        <p className="font-title">{movie?.title}</p>
      </div>
    </>
  );
}
