import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { globalColors, globalStyles } from '../theme/theme';
import { ProductScreen } from '../screens/products/ProductScreen';



export type RootStackParams = {
    Home: undefined;
    Products: undefined;
    Settings: undefined;
    Product: { id: number, name: string },
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator 
        screenOptions={{
            headerStyle: {
                backgroundColor: globalColors.card,
                elevation: 0,
                shadowColor: 'transparent',
            },
        }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Products" component={ProductsScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />

            <Stack.Screen name="Product" component={ProductScreen} />
        </Stack.Navigator>
    );
}