import { TMDBImage } from "./tmdbimages/tmdbImg";
import { useCrewMember } from "../hooks/useCrew";
import { useMemo } from "react";
import type { NOMINEE_TO_ID } from "../constants/nominations";

export function CrewCard({
  crewName,
  movieId,
  extra,
}: {
  crewName: keyof typeof NOMINEE_TO_ID;
  movieId: number;
  extra?: string;
}) {
  const { data: person } = useCrewMember(crewName);
  const movie = useMemo(
    () => person?.credits?.cast?.find((movie) => movie.id == movieId),
    [person, movieId],
  );
  return (
    <div className="flex md:flex-col gap-2">
      <div
        className="hover:z-2 transform-gpu transition-transform duration-300 hover:scale-110!"
        style={{ aspectRatio: "0.667 / 1" }}
      >
        {person && (
          <TMDBImage
            type="poster"
            className="w-16! md:w-auto!"
            path={person.profile_path}
          />
        )}
      </div>
      <div className="pt-2 flex flex-col justify-center text-left md:text-center">
        {extra && <p className="mb-1 text-slate-500 text-lg">{extra}</p>}
        <h3 className="mb-1 text-sm">{person?.name}</h3>
        <p>{movie?.character}</p>
        <p className="text-slate-400 text-xs">({movie?.title})</p>
      </div>
    </div>
  );
}
