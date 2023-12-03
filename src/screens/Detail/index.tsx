import { StackScreenProps } from '@react-navigation/stack'
import { FC } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Screens } from '../../navigation'

interface DetailProps extends StackScreenProps<Screens, 'Detail'> { }

const {
  width: WINDOW_WITH,
  height: WINDOW_HEIGHT
} = Dimensions.get('window')

const Detail: FC<DetailProps> = ({ route }) => {
  const { title, poster_path, original_title } = route.params
  const uri = `https://image.tmdb.org/t/p/w500${poster_path}`

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
  }
})

export default Detail
