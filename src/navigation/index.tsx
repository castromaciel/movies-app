import { createStackNavigator } from '@react-navigation/stack';
import { Detail, Home } from '../screens';

export type Screens = {
  'Home': undefined,
  'Detail': undefined,
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