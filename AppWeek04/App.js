import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login2_a_Screen from './screens/Login-2_a-Screen.js';
import Screen_2_b from './screens/2_b-Screen.js';
import PasswordGenerateScreen from './screens/PasswordGenerateScreen.js';
import Tiki_oke_Screen from './screens/Tiki_oke-Screen.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tiki_oke">
        <Stack.Screen name="Login" component={Login2_a_Screen} options={{headerShown: false}}/>
        <Stack.Screen name="Screen_2_b" component={Screen_2_b} options={{headerShown: false}}/>
        <Stack.Screen name="PasswordGenerate" component={PasswordGenerateScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Tiki_oke" component={Tiki_oke_Screen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}