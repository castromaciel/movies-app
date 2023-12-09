import { useRef } from 'react'
import { Animated } from 'react-native'

const useFade = () => {
  const opacityRef = useRef(new Animated.Value(0)).current

  const fadeIn = ( callback?: Function ) => {
    Animated.timing(opacityRef, {
      duration: 300,
      toValue: 1,
      useNativeDriver: true
    }).start(() => callback? callback() : null)
  }
  const fadeOut = () => {
    Animated.timing(opacityRef, {
      duration: 300,
      toValue: 0,
      useNativeDriver: true
    }).start()
  }

  return {
    fadeIn,
    fadeOut,
    opacity: opacityRef
  }
}

export default useFade