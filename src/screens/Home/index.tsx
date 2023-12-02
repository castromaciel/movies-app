import { StackScreenProps } from '@react-navigation/stack'
import { FC } from 'react'
import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel'
import { MoviePoster } from '../../components'
import useMovies from '../../hooks/useMovies'
import { Screens } from '../../navigation'

const { width: WINDOW_WITH } = Dimensions.get('window')

interface HomeProps extends StackScreenProps<Screens, 'Home'> {}

const Home: FC<HomeProps> = ({ navigation }) => {
  const { movies, isLoading } = useMovies()
  const { top: paddingTop } = useSafeAreaInsets()

  if (isLoading) {
    return (
      <View style={{...styles.center, paddingTop}}>
        <ActivityIndicator color='red' size={100} />
      </View>
    )
  }

  return (
    <View style={{paddingTop}}>

      <View style={{
        height: 450
      }}>
        <Carousel
          data={movies}
          renderItem={({ item }) => (<MoviePoster {...item}/>)}
          sliderWidth={WINDOW_WITH}
          itemWidth={300}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center'
  }
})

export default Home
