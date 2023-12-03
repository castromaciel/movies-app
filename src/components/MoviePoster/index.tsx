import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { FC } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Movie } from '../../interfaces/movies.interface'
import { Screens } from '../../navigation'

interface MoviePosterProps extends Movie {
  height?: number
  width?: number
}

const MoviePoster: FC<MoviePosterProps> = ({
  poster_path, height = 420, width = 300, ...rest
}) => {
  const uri = `https://image.tmdb.org/t/p/w500${poster_path}`
  const movie = {
    ...rest,
    poster_path
  }
  const navigation = useNavigation<StackNavigationProp<Screens>>()
  
  const handlePress = () => navigation.navigate('Detail', movie)

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.8}
      style={{
        width,
        height,
        marginHorizontal: 4,
        paddingBottom: 16,
        paddingHorizontal: 4
      }}>
      <View style={styles.imageContaiener}>
        <Image source={{ uri }} style={styles.image} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  imageContaiener: {
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 9,
    flex: 1
  },
  image: {
    flex: 1,
    borderRadius: 16,
  },
})

export default MoviePoster
