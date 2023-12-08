import { FC, ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

interface GradientBackgroundProps {
  children: ReactNode | ReactNode[]
  style: {
    [key: string]: any
  }
}

const GradientBackground: FC<GradientBackgroundProps> = ({
  children, style: customStyles
}) => {
  return (
    <View style={{
      ...styles,
      ...customStyles
    }}>
      <LinearGradient
        colors={['#084F6A', '#75CEDB', 'white']}
        style={{
          ...StyleSheet.absoluteFillObject
        }}
        start={{
          x: 0.1,
          y: 0.1,
        }}
        end={{
          x: 0.65,
          y: 0.75,
        }}
      />
      { children }
    </View>
  )
}

const styles = StyleSheet.create({})

export default GradientBackground
