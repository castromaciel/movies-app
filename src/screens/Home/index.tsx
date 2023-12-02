import { StackScreenProps } from '@react-navigation/stack'
import { FC } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { Screens } from '../../navigation'


interface HomeProps extends StackScreenProps<Screens, 'Home'> {}

const Home: FC<HomeProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>

      <Button
        title="Go Detail"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default Home
