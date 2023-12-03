import currencyFormater from 'currency-formatter'
import { FC } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import { Cast } from '../../interfaces/cast.interface'
import { MovieDetailResponse } from '../../interfaces/movieDetail.interface'
import CastItemCard from '../CastItemCard'

interface MovieDetailProps {
  isLoading: boolean
  isError: boolean
  movieDetail: MovieDetailResponse
  cast: Cast[]
}

const MovieDetail: FC<MovieDetailProps> = ({
  isError, isLoading, cast, movieDetail
}) => {

  if (isLoading) {
    return <ActivityIndicator size={36} color='grey' />
  }

  if (isError) {
    return <Text> Ha ocurrido un error... </Text>
  }

  return (
    <View style={styles.detailContainer}>
      <View style={styles.voteAverageContainer}>
        <Icon name="star-outline" size={16} />
        <Text>{movieDetail.vote_average}</Text>
        <Text>
          {
            movieDetail.genres.map((genre) => genre.name).join(', ')
          }
        </Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
          Story
        </Text>

        <Text style={{ fontSize: 16 }}>
          {movieDetail.overview}
        </Text>

        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
          Budget
        </Text>

        <Text style={{ fontSize: 16 }}>
          {currencyFormater.format(movieDetail.budget, { code: 'USD' })}
        </Text>
      </View>

      <View style={{ ...styles.detailContainer, marginBottom: 32, paddingBottom: 8 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
          Casting
        </Text>

        <FlatList 
          data={cast}
          renderItem={({ item }) => (
            <CastItemCard {...item} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={({ id }) => `CastItem${id}`}
        />
        
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  detailContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  },
  voteAverageContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    opacity: 0.7
  }
})

export default MovieDetail
