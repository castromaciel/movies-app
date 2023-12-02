import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Movie } from '../../interfaces/movies.interface'
import MoviePoster from '../MoviePoster'

interface HorizontalSliderProps {
  movies: Movie[]
  sliderTitle?: string
}

const HorizontalSlider: FC<HorizontalSliderProps> = ({
  movies, sliderTitle = ''
}) => {
  return (
    <View style={{
      height: !!sliderTitle ? 260 : 220
    }}>
      {
        sliderTitle && <Text style={{ ...styles.title }}>{sliderTitle}</Text>
      }
      <FlatList
        data={movies}
        horizontal
        renderItem={({ item }) => (
          <MoviePoster
            {...item}
            height={216}
            width={152}
          />
        )}
        keyExtractor={({ id }) => `${sliderTitle}${id}`}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    marginLeft: 10,
    fontSize: 28,
    fontWeight: 'bold'
  }
})

export default HorizontalSlider
