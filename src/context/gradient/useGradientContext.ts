import { useContext } from "react"
import { GradientContext } from "./GradientContext"

const useGradientContext = () => {
  const gradientContext = useContext(GradientContext)
  return gradientContext
}

export default useGradientContext