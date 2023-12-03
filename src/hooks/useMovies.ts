import { useEffect, useState } from "react"
import { moviesDbApi } from "../api/moviesdb.api"
import { Movie, MovieDBNowPlaying } from "../interfaces/movies.interface"

interface MoviesState {
  nowPlayingMovies: Movie[]
  popularMovies: Movie[]
  topRatedMovies: Movie[]
  upcomingMovies: Movie[]
}

const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true)
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
        moviesDbApi.get<MovieDBNowPlaying>('now_playing'),
        moviesDbApi.get<MovieDBNowPlaying>('popular'),
        moviesDbApi.get<MovieDBNowPlaying>('upcoming'),
        moviesDbApi.get<MovieDBNowPlaying>('top_rated'),
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
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  return {
    ...movies,
    isLoading
  }
}

export default useMovies
