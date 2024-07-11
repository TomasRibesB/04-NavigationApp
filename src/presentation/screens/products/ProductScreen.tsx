import { Text, View } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParams } from "../../routes/StackNavigator";
import { globalStyles } from "../../theme/theme";
import { useEffect } from "react";

export const ProductScreen = () => {

    const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            title: params.name,
        })

    }, [])
    

    return (
        <View style={globalStyles.container}>
            <Text style={{
                textAlign: 'center',
                fontSize: 24,
                fontWeight: '300',
            }}>
                {params.name}
            </Text>
        </View>
    );
};