import { useEffect, useState } from "react"
import { moviesDbApi } from "../api/moviesdb.api"
import { Movie, MovieDBNowPlaying } from "../interfaces/movies.interface"

const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [movies, setMovies] = useState<Movie[]>([])

  const getMovies = async () => {
    try {
      setIsLoading(true)
      const response = await moviesDbApi.get<MovieDBNowPlaying>('now_playing')
      setMovies(response.data.results)
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
    movies,
    isLoading
  }
}

export default useMovies
