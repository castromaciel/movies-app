import { StackScreenProps } from '@react-navigation/stack'
import { FC } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import MovieDetail from '../../components/MovieDetail'
import useMovieDetail from '../../hooks/useMovieDetail'
import { Screens } from '../../navigation'

interface DetailProps extends StackScreenProps<Screens, 'Detail'> { }

const {
  width: WINDOW_WITH,
  height: WINDOW_HEIGHT
} = Dimensions.get('window')

const Detail: FC<DetailProps> = ({ route, navigation }) => {
  const { title, poster_path, original_title, id: movieId } = route.params

  const uri = `https://image.tmdb.org/t/p/w500${poster_path}`

  const { isError, isLoading, movieInformation } = useMovieDetail({ movieId })

  const handleBack = () => navigation.goBack()
  return (
    <ScrollView style={{ paddingTop: 0 }}>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image source={{ uri }} style={styles.image} />
        </View>
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{original_title}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>


      <View style={{ ...styles.marginContainer, marginTop: 0 }}>
        <MovieDetail
          {...movieInformation}
          isError={isError}
          isLoading={isLoading}
        />
      </View>

      <View style={styles.backButton}>
        <TouchableOpacity
          onPress={handleBack}
        >
          <Icon
            name='arrow-back-outline'
            size={52}
          />
        </TouchableOpacity>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    width: WINDOW_WITH,
    height: WINDOW_HEIGHT * 0.7,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 9,
    borderBottomEndRadius: 24,
    borderBottomStartRadius: 24,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 24,
    borderBottomStartRadius: 24,
  },
  image: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.7
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  backButton: {
    position: 'absolute',
    zIndex: 3,
    elevation: 3,
    top: 24,
    left: 4
  }
})

export default Detail
