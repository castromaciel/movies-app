import { FC, ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'

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
      { children }
    </View>
  )
}

const styles = StyleSheet.create({})

export default GradientBackground
