import { NavigationContainer } from '@react-navigation/native';
import { FC } from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import Navigation from './src/navigation';

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>    
  )
}

const styles = StyleSheet.create({})

export default App
