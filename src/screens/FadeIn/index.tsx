import { FC } from 'react'
import { Animated, Button, StyleSheet, View } from 'react-native'
import useFade from '../../hooks/useFade'

interface FadeInProps { }

const FadeIn: FC<FadeInProps> = () => {
  const { opacity, fadeIn, fadeOut } = useFade()

  return (
    <View style={{
      alignItems: 'center',
      backgroundColor: 'grey',
      flex: 1,
      justifyContent: 'center',
    }}>
      <Animated.View style={{
        backgroundColor: 'green',
        borderColor: 'white',
        borderWidth: 8,
        height: 150,
        width: 150,
        opacity
      }} />

      <Button onPress={fadeIn} title='Fade in' color={'white'}/>
      <Button onPress={fadeOut} title='Fade out' color={'white'}/>
    </View>
  )
}

const styles = StyleSheet.create({})

export default FadeIn
