import { useEffect } from 'react'
import { getColors } from 'react-native-image-colors'
import { useGradientContext } from '../context'
import { Movie } from '../interfaces/movies.interface'

interface Params {
  nowPlayingMovies: Movie[]
}

const useChangePosterColors = ({ nowPlayingMovies }: Params) => {
  const { setMainColors } = useGradientContext()

  const getPosterColors = async (slideIndex: number) => {
    const currentMovie = nowPlayingMovies[slideIndex]
    const uri = `https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`

    try {
      const colors = await getColors(uri, {
        fallback: '#228B22',
        cache: true,
        key: uri,
      });

      let primary = 'transparent';
      let secondary = 'transparent';

      if (colors.platform === "android") {
        primary = colors.dominant
        secondary = colors.average

      } else if (colors.platform === "ios") {
        primary = colors.primary
        secondary = colors.secondary

      }
      const mainColors = {
        primary,
        secondary
      }
      setMainColors(mainColors)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if ( nowPlayingMovies?.length ) {
      getPosterColors(0)
    }
  }, [nowPlayingMovies])

  return {
    getPosterColors
  }
}

export default useChangePosterColors
