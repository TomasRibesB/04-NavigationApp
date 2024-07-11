import { Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { PrimaryButton } from "../../components/PrimaryButton";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { globalStyles } from "../../theme/theme";

export const ProfileScreen = () => {

    const { top } = useSafeAreaInsets();

    const navigation = useNavigation();

    return (
        <View
            style={globalStyles.container}>
            <Text style={globalStyles.sectionTitle}>ProfileScreen</Text>

            <PrimaryButton
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                label="Abrir Menú"
            />
        </View>
    )
}
