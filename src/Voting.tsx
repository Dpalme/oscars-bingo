import { zodResolver } from '@hookform/resolvers/zod'
import { MovieCard } from './components/movieCard'
import { BallotForm, CATEGORIES } from './constants/nominations'
import { Form, useForm } from 'react-hook-form'
import { useEffect, useMemo, useState } from 'react'
import { Ballot } from './Ballot'
import { categoryToNominations } from './helpers/categoryToNominations'

export function Voting() {
  const initialValues = location.search
  const [isSubmitted, setIsSubmitted] = useState(false)
  const form = useForm({
    resolver: zodResolver(BallotForm),
    defaultValues: JSON.parse(localStorage.getItem('votes') ?? '{}'),
  })

  const votes = form.watch()

  useEffect(() => {
    if (!votes) return
    localStorage.setItem('votes', JSON.stringify(votes))
  }, [votes])

  useMemo(() => {
    if (!initialValues) return
    const value = initialValues.split('=')[1]
    Object.keys(CATEGORIES).forEach((category, i) =>
      form.setValue(category, value.charAt(i)),
    )
    setIsSubmitted(true)
  }, [initialValues, form])

  return (
    <div className="flex flex-col gap-8 text-center my-16">
      <h1>98th Academy Awards</h1>
      {!isSubmitted && (
        <Form
          {...form}
          onSubmit={(ev) => {
            ev.event?.preventDefault()
          }}
          className="flex flex-col gap-16 px-4 max-w-4xl mx-auto "
        >
          {Object.entries(CATEGORIES).map(([name, nominations]) => {
            const movies = categoryToNominations(nominations)
            return (
              <div className="flex flex-col gap-4 w-full">
                <h2 className="text-2xl">{name}</h2>
                <div className="grid md:grid-cols-5 gap-2 w-full">
                  {movies.map((movie, i) => (
                    <div className="flex md:flex-col gap-1 relative grayscale has-checked:grayscale-0 has-checked:scale-102 border-b-4 md:border-b-0 md:border-t-4 border-transparent has-checked:border-[#c79f27] shadow-md transform-gpu transition-all h-fit">
                      {movie.id ? (
                        <MovieCard movieId={movie.id} extra={movie.nominee} />
                      ) : (
                        movie.name
                      )}
                      <input
                        type="radio"
                        {...form.register(name)}
                        value={i}
                        className="absolute w-full h-full opacity-1 left-0 top-0 z-1000"
                      ></input>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
          <button
            type="submit"
            className="px-4 py-2 bg-[#7f1b1e] rounded-md text-xl text-white! cursor-pointer"
            onClick={() => {
              window.location.replace(
                window.location.href.split('?')[0] +
                  '?_=' +
                  Object.values(votes).join(''),
              )
            }}
          >
            <h2>Submit</h2>
          </button>
        </Form>
      )}
      {isSubmitted && <Ballot ballot={votes} />}
    </div>
  )
}
