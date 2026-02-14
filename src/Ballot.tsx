import type z from "zod";
import {
  CATEGORIES,
  NOMINEE_TO_EMOJI,
  type BallotForm,
} from "./constants/nominations";
import { categoryToNominations } from "./helpers/categoryToNominations";
import { useMemo } from "react";
import { MovieBackdrop } from "./components/movieBackdrop";
import { nominationToEmoji } from "./helpers/nominationToEmoji";
import { shareBallot } from "./helpers/shareBallot";
import { CastBackdrop } from "./components/castBackdrop";

export function Ballot(props: {
  submitted: boolean;
  ballot: z.infer<typeof BallotForm>;
  goBack: () => void;
}) {
  const categories = useMemo(() => {
    return Object.entries(props.ballot).map(([category, selection]) => {
      const movie = categoryToNominations(
        CATEGORIES[category as keyof typeof CATEGORIES],
      )[selection];
      return [category, movie] as const;
    });
  }, [props.ballot]);

  const emojifiedBallot = useMemo(
    () =>
      Object.entries(props.ballot)
        .map(([categoryName, vote]): string =>
          nominationToEmoji(categoryName as keyof typeof CATEGORIES, vote),
        )
        .join(""),
    [props.ballot],
  );

  return (
    <div className="grid gap-8">
      {props.submitted ? (
        <div className="flex flex-col gap-4 max-w-lg w-full mx-auto p-4 rounded-md shadow-md">
          <h2>Share your bingo card!</h2>
          <p>{emojifiedBallot}</p>
          <button
            className="px-4 py-2 rounded-md bg-[#7f1b1e] text-white! cursor-pointer"
            onClick={() => {
              shareBallot(emojifiedBallot);
            }}
          >
            <h2>Share</h2>
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-4 max-w-lg w-full mx-auto p-4 rounded-md shadow-md">
          <h2>Want to join the fun?</h2>
          <button
            className="px-4 py-2 rounded-md bg-[#7f1b1e] cursor-pointer text-white uppercase font-title"
            type="button"
            onClick={props.goBack}
          >
            Make your own bingo card
          </button>
        </div>
      )}
      {categories.map(([category, movie]) => {
        return (
          <div className="grid" key={category}>
            <div
              className="relative isolate flex flex-col items-center justify-end h-[70vh] p-4"
              key={category + movie.id}
            >
              {category in NOMINEE_TO_EMOJI ? (
                <div className="flex flex-row items-center justify-start gap-2 w-full">
                  <CastBackdrop
                    peopleName={movie.nominee!}
                    movieId={movie.id}
                    nominee={movie.nominee!}
                    category={category}
                  />
                </div>
              ) : (
                <>
                  {movie.nominee && (
                    <p className="text-2xl font-semibold text-slate-200">
                      {movie.nominee}
                    </p>
                  )}
                  <MovieBackdrop movieId={movie.id} />
                  <h2 className="text-4xl py-4">{category}</h2>
                </>
              )}
            </div>
          </div>
        );
      })}
      {props.submitted && (
        <button
          className="px-4 py-2 rounded-md bg-slate-100 cursor-pointer"
          onClick={props.goBack}
        >
          <h2>Edit</h2>
        </button>
      )}
    </div>
  );
}
