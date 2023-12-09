import { StackScreenProps } from '@react-navigation/stack'
import { FC } from 'react'
import { ActivityIndicator, Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel'
import { GradientBackground, HorizontalSlider, MoviePoster } from '../../components'
import useChangePosterColors from '../../hooks/useChangePosterColors'
import useMovies from '../../hooks/useMovies'
import { Screens } from '../../navigation'

const { width: WINDOW_WITH } = Dimensions.get('window')

interface HomeProps extends StackScreenProps<Screens, 'Home'> { }

const Home: FC<HomeProps> = ({ navigation }) => {
  const {
    isError,
    isLoading,
    nowPlayingMovies,
    popularMovies,
    topRatedMovies,
    upcomingMovies,
  } = useMovies()

  const { top: paddingTop } = useSafeAreaInsets()

  const { getPosterColors } = useChangePosterColors({ nowPlayingMovies })

  if (isLoading) {
    return (
      <View style={{ ...styles.center, paddingTop }}>
        <ActivityIndicator color='red' size={100} />
      </View>
    )
  }

  if (isError) {
    return (
      <View style={{ ...styles.center, paddingTop }}>
        <ActivityIndicator color='red' size={100} />
      </View>
    )
  }

  return (
    <GradientBackground style={{
      backgroundColor: 'grey',
      flex: 1
    }}>
      <ScrollView>
        <View style={{ paddingTop }}>

          <View style={{
            height: 450
          }}>
            <Carousel
              data={nowPlayingMovies}
              renderItem={({ item }) => (
                <MoviePoster  {...item} />
              )}
              sliderWidth={WINDOW_WITH}
              itemWidth={300}
              keyExtractor={({ id }) => `AllMovies${id}`}
              inactiveSlideOpacity={0.9}
              onSnapToItem={getPosterColors}
            />
          </View>

          <HorizontalSlider
            movies={topRatedMovies}
            sliderTitle='Top rated'
          />


          <HorizontalSlider
            movies={upcomingMovies}
            sliderTitle='Upcoming'
          />

          <HorizontalSlider
            movies={popularMovies}
            sliderTitle='Only in cinemas'
          />

        </View>
      </ScrollView>
    </GradientBackground>

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
