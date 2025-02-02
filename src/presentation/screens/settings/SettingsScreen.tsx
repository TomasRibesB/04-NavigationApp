import { Text, View } from "react-native"
import { globalStyles } from "../../theme/theme"
import { PrimaryButton } from "../../components/shared/PrimaryButton"
import { StackActions, useNavigation } from "@react-navigation/native"

export const SettingsScreen = () => {
    const navigator = useNavigation()
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.sectionTitle}>SettingsScreen</Text>
            <PrimaryButton label="Back" onPress={() => navigator.goBack()}/>
            <PrimaryButton label="Home" onPress={() => navigator.dispatch(StackActions.popToTop())}/>
        </View>
    )
}
