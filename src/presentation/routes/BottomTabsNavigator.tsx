import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { Tab2Screen } from '../screens/tabs/Tab2Screen';
import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native';
import { TopTabNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';
import { IonIcon } from '../components/shared/IonIcon';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { AboutScreen } from '../screens/about/AboutScreen';
import { HomeScreen } from '../screens/home/HomeScreen';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor: globalColors.background,
        }}
        screenOptions={{
            tabBarLabelStyle: {
                marginBottom: 5,
            },
            headerStyle: {
                elevation: 0,
                borderColor: 'transparent',
                shadowColor: 'transparent',
            },
            tabBarStyle:{
                borderTopWidth: 0,
                elevation: 0,
            },
            tabBarActiveTintColor: globalColors.primary, 
        }}
        >
            <Tab.Screen name="Tab1" options={{ title: '', tabBarIcon: ({color}) => <IonIcon name="home" color={color} size={30} /> }} component={Tab1Screen} />
            <Tab.Screen name="Tab2" options={{ title: '', tabBarIcon: ({color}) => <IonIcon name="list" color={color} size={30} /> }} component={ProfileScreen} />
            <Tab.Screen name="Tab3" options={{ title: '', tabBarIcon: ({color}) => <IonIcon name="settings" color={color} size={30} /> }} component={HomeScreen} />
        </Tab.Navigator>
    );
}