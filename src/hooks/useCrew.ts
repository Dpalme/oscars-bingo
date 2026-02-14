import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { TMDBFetch } from "../helpers/TMDBFetch";
import { NOMINEE_TO_ID } from "../constants/nominations";

interface CrewMember {
  adult: boolean;
  gender: number;
  id: number;

  known_for_department: string;

  name: string;
  original_name: string;
  popularity: number;

  profile_path: string;
  credits: Credits;
}

interface Credits {
  cast: Cast[];
  crew: Crew[];
}

interface Cast {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;

  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;

  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;

  vote_average: number;
  vote_count: number;
  character: string;
  credit_id: string;
  order: number;
}
interface Crew {
  adult: boolean;

  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;

  vote_average: number;
  vote_count: number;
  credit_id: string;
  department: string;
  job: string;
}

export async function getCrewMember(personId: number): Promise<CrewMember> {
  const res = (await TMDBFetch(
    `/3/person/${personId}?append_to_response=credits`,
  )) as CrewMember;
  return res;
}

export const useCrewMember = (personName: keyof typeof NOMINEE_TO_ID) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["people", personName],
    queryFn: () => getCrewMember(NOMINEE_TO_ID[personName]),
  });

  return {
    data,
    error: error as AxiosError | undefined,
    loading: isLoading,
  };
};
