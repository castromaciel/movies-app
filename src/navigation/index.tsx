import { createStackNavigator } from '@react-navigation/stack';
import { Movie } from '../interfaces/movies.interface';
import { Detail, Home } from '../screens';

export type Screens = {
  'Home': undefined,
  'Detail': Movie,
}

const Stack = createStackNavigator<Screens>();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}

export default Navigation