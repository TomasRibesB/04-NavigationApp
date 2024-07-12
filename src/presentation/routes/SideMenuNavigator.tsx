import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { globalColors } from '../theme/theme';
import { useWindowDimensions, View } from 'react-native';
import { BottomTabNavigator } from './BottomTabsNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {

  const dimensions = useWindowDimensions();


  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: (dimensions.width >= 700) ? 'permanent' : 'slide',
        drawerActiveBackgroundColor: globalColors.secondary,
        drawerActiveTintColor: globalColors.text,
        drawerInactiveBackgroundColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        },
        drawerStyle: {
          backgroundColor: globalColors.card,
        }
      }}
    >
      {/*<Drawer.Screen name="StackNavigator" component={StackNavigator} />*/}
      <Drawer.Screen name="Tabs" component={BottomTabNavigator}
        options={{
          drawerIcon: ({ color }) => (<IonIcon name='home' size={30} color={color} />)

        }}
      />
      <Drawer.Screen name="Profile" component={ProfileScreen}
        options={{
          drawerIcon: ({ color }) => (<IonIcon name='person' size={30} color={color} />)
        }}
      />
    </Drawer.Navigator>
  );
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          backgroundColor: globalColors.primary,
          height: 200,
          margin: 30,
          borderRadius: 50,
        }}
      />

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}