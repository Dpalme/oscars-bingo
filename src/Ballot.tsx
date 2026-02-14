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
  close: () => void;
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
          <h2>The only cure for FOMO is</h2>
          <button
            className="px-4 py-2 rounded-md bg-[#7f1b1e] cursor-pointer"
            onClick={close}
          >
            <h3 className="text-white!">Making your own bingo card</h3>
          </button>
        </div>
      )}
      {categories.map(([category, movie]) => {
        return (
          <div className="grid" key={category}>
            <h2 className="text-2xl py-4">{category}</h2>

            <div
              className="relative isolate flex flex-col items-center justify-end h-[70vh] p-4"
              key={category + movie.id}
            >
              {movie.nominee && (
                <p className="text-2xl text-white">{movie.nominee}</p>
              )}
              {category in NOMINEE_TO_EMOJI ? (
                <CastBackdrop peopleName={movie.nominee!} movieId={movie.id} />
              ) : (
                <MovieBackdrop movieId={movie.id} />
              )}
            </div>
          </div>
        );
      })}
      {props.submitted && (
        <button
          className="px-4 py-2 rounded-md bg-slate-100 cursor-pointer"
          onClick={() => {
            window.location.replace(window.location.href.split("?")[0]);
          }}
        >
          <h2>Edit</h2>
        </button>
      )}
    </div>
  );
}
