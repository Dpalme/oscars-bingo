import { zodResolver } from "@hookform/resolvers/zod";
import { MovieCard } from "./components/movieCard";
import {
  BallotForm,
  CATEGORIES,
  EMOJI_TO_NOMINEE,
} from "./constants/nominations";
import { Form, useForm } from "react-hook-form";
import { useMemo, useRef, useState } from "react";
import { Ballot } from "./Ballot";
import { categoryToNominations } from "./helpers/categoryToNominations";
import { CrewCard } from "./components/crewMemberCard";

export function Voting() {
  const initialValues = location.search;
  const title = useRef<HTMLHeadingElement | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [shouldShowBallot, setShouldShowBallot] = useState(false);

  const form = useForm({
    resolver: zodResolver(BallotForm),
    defaultValues: JSON.parse(localStorage.getItem("votes") ?? "{}"),
  });

  const votes = form.watch();

  useMemo(() => {
    if (!initialValues) return;
    const value = atob(initialValues.split("&")[0].split("=")[1]);
    Object.keys(CATEGORIES).forEach((category, i) =>
      form.setValue(category, value.charAt(i)),
    );
    setShouldShowBallot(true);
  }, [initialValues, form]);

  const close = () => {
    if (!isSubmitted) {
      Object.keys(CATEGORIES).forEach((category) =>
        form.setValue(category, undefined),
      );
    }
    setShouldShowBallot(false);
    setIsSubmitted(false);
    title.current?.scrollIntoView();
  };

  return (
    <div ref={title} className="flex flex-col gap-8 text-center my-16">
      <h1>98th Academy Awards</h1>
      {!shouldShowBallot ? (
        <Form
          control={form.control}
          onSubmit={(ev) => {
            ev.event?.preventDefault();
          }}
          onChange={() => {
            localStorage.setItem("votes", JSON.stringify(votes));
          }}
          className="flex flex-col gap-16 px-4 max-w-4xl mx-auto "
        >
          {Object.entries(CATEGORIES).map(([name, nominations]) => {
            const movies = categoryToNominations(nominations);
            return (
              <div className="flex flex-col gap-4 w-full" key={name}>
                <h2 className="text-2xl">{name}</h2>
                <div className="grid md:grid-cols-5 gap-2 w-full">
                  {movies.map((movie, i) => (
                    <div
                      key={name + movie.id + movie.nominee}
                      className="flex md:flex-col md:h-full gap-1 relative grayscale has-checked:grayscale-0 has-checked:scale-102 border-b-4 md:border-b-0 md:border-t-4 border-transparent has-checked:border-[#c79f27] shadow-md transform-gpu transition-all h-fit"
                    >
                      {movie.id ? (
                        name in EMOJI_TO_NOMINEE ? (
                          <CrewCard
                            movieId={movie.id}
                            crewName={movie.nominee!}
                          />
                        ) : (
                          <MovieCard movieId={movie.id} extra={movie.nominee} />
                        )
                      ) : (
                        movie.name
                      )}
                      <input
                        type="radio"
                        {...form.register(name)}
                        value={i}
                        className="cursor-pointer absolute w-full h-full opacity-1 left-0 top-0 z-1000"
                      ></input>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
          <button
            type="submit"
            className="px-4 py-2 bg-[#7f1b1e] rounded-md text-xl text-white! cursor-pointer"
            onClick={() => {
              setShouldShowBallot(true);
              setIsSubmitted(true);
              title.current?.scrollIntoView();
            }}
          >
            <h2>Submit</h2>
          </button>
        </Form>
      ) : (
        <Ballot ballot={votes} submitted={isSubmitted} goBack={close} />
      )}
    </div>
  );
}
