import { useState } from "react"
import { CurrentImageColors } from "./common.interface"

const useInitGradientContext = () => {
  const [colors, setColors] = useState<CurrentImageColors>({
    primary: 'transparent',
    secondary: 'transparent'
  })

  const [prevColors, setPrevColors] = useState<CurrentImageColors>({
    primary: 'transparent',
    secondary: 'transparent'
  })

  const setMainColors = (colors: CurrentImageColors) => {
    setColors(colors)
  }

  const setPreviousMainColors = (colors: CurrentImageColors) => {
    setPrevColors(colors)
  }

  return {
    colors,
    prevColors,
    setMainColors,
    setPreviousMainColors
  }
}

export default useInitGradientContext
