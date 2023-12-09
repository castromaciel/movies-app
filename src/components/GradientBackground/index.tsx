import { FC, ReactNode, useEffect } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useGradientContext } from '../../context'
import useFade from '../../hooks/useFade'

interface GradientBackgroundProps {
  children: ReactNode | ReactNode[]
  style: {
    [key: string]: any
  }
}

const GradientBackground: FC<GradientBackgroundProps> = ({
  children, style: customStyles
}) => {
  const { colors, prevColors, setPreviousMainColors } = useGradientContext()

  const { fadeIn, fadeOut, opacity } = useFade()

  useEffect(() => {
    fadeIn(() => {
      setPreviousMainColors(colors)
      fadeOut()
    })
  }, [colors])

  return (
    <View style={{
      ...styles,
      ...customStyles
    }}>
      <LinearGradient
        colors={[prevColors.primary, prevColors.secondary, 'white']}
        style={{
          ...StyleSheet.absoluteFillObject
        }}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.65, y: 0.75 }}
      />

      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          opacity
        }}
      >
        <LinearGradient
          colors={[colors.primary, colors.secondary, 'white']}
          style={{
            ...StyleSheet.absoluteFillObject
          }}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 0.65, y: 0.75 }}
        />
      </Animated.View>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({})

export default GradientBackground
