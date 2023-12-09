import { FC, ReactNode, createContext } from "react";
import { CurrentImageColors } from "./common.interface";
import useInitGradientContext from "./useInitGradientContext";


interface GradientContextProps {
  colors: CurrentImageColors
  prevColors: CurrentImageColors

  setMainColors: (colors: CurrentImageColors) => void
  setPreviousMainColors: (colors: CurrentImageColors) => void
}

const GradientContext = createContext<GradientContextProps>({} as GradientContextProps)

interface GradientProviderProps {
  children: ReactNode | ReactNode[]
}

const GradientProvider: FC<GradientProviderProps> = ({ children }) => {
  const gradientContext = useInitGradientContext()

  return (
    <GradientContext.Provider value={gradientContext}>
      { children }
    </GradientContext.Provider>
  )
}

export { GradientContext, GradientProvider };

