import { FC } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Movie } from '../../interfaces/movies.interface'

interface MoviePosterProps extends Pick<Movie, 'poster_path'> {
  height?: number
  width?: number
}

const MoviePoster: FC<MoviePosterProps> = ({
  poster_path, height = 420, width = 300
}) => {
  const uri = `https://image.tmdb.org/t/p/w500${poster_path}`

  return (
    <View style={{
      width,
      height,
      marginHorizontal: 8
    }}>
      <View style={styles.imageContaiener}>
        <Image source={{ uri }} style={styles.image} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContaiener: {
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flex: 1
  },
  image: {
    flex: 1,
    borderRadius: 16,
  },
})

export default MoviePoster
