import 'react-native-gesture-handler';
//No mover de lugar el react-native-gesture-handler

import { Text, View } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './presentation/routes/StackNavigator';
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator';

export const App = () => {

  return (
    <NavigationContainer>
      <SideMenuNavigator />
    </NavigationContainer>
  )
}
