import { useEffect, useState } from "react"
import { moviesDbApi } from "../api/moviesdb.api"
import { Movie, MovieDBResponse } from "../interfaces/movies.interface"

interface MoviesState {
  nowPlayingMovies: Movie[]
  popularMovies: Movie[]
  topRatedMovies: Movie[]
  upcomingMovies: Movie[]
}

const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [movies, setMovies] = useState<MoviesState>({} as MoviesState)

  const getMovies = async () => {
    try {
      setIsLoading(true)

      const [
        nowPlayingMoviesRs,
        popularMoviesRs,
        upcomingMoviesRs,
        topRatedMoviesRs,
      ] = await Promise.all([
        moviesDbApi.get<MovieDBResponse>('now_playing'),
        moviesDbApi.get<MovieDBResponse>('popular'),
        moviesDbApi.get<MovieDBResponse>('upcoming'),
        moviesDbApi.get<MovieDBResponse>('top_rated'),
      ])

      setMovies((prevState) => ({
        ...prevState,
        nowPlayingMovies: nowPlayingMoviesRs.data.results,
        popularMovies: popularMoviesRs.data.results,
        upcomingMovies: upcomingMoviesRs.data.results,
        topRatedMovies: topRatedMoviesRs.data.results,
      }))
    } catch (error) {
      console.error(error)
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  return {
    ...movies,
    isError,
    isLoading
  }
}

export default useMovies
