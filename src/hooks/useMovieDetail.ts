import { useEffect, useState } from 'react'
import { moviesDbApi } from '../api/moviesdb.api'
import { Cast, CastResponse } from '../interfaces/cast.interface'
import { MovieDetailResponse } from '../interfaces/movieDetail.interface'

interface Params {
  movieId: number
}

interface MovieInformation {
  movieDetail: MovieDetailResponse
  cast: Cast[]
}

const useMovieDetail = ({ movieId }: Params) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [
    movieInformation,
    setMovieInformation
  ] = useState<MovieInformation>({} as MovieInformation)
  

  const getMovieDetail = async () => {
    try {
      setIsLoading(true)

      const movieDetailRs = await moviesDbApi.get<MovieDetailResponse>(`/${movieId}`)
      const castRs = await moviesDbApi.get<CastResponse>(`/${movieId}/credits`)

      setMovieInformation((prevState) => ({
        ...prevState,
        cast: castRs.data.cast,
        movieDetail: movieDetailRs.data
      }))
    } catch (error) {
      console.error(error)
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getMovieDetail()
  }, [])

  return {
    isError,
    isLoading,
    movieInformation,
  }
}

export default useMovieDetail