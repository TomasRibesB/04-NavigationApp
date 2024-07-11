import { StyleSheet } from "react-native";

export const globalColors = {
    primary: '#7037eb',
    secondary: '#f72585',
    tertiary: '#3a0ca3',
    success: '#4cc9f0',
    warning: '#fca311',
    danger: '#e71d36',
    light: '#f4f4f4',

    text: '#f4f4f4',

    card: '#4a4e69',

    background: '#22223b',

}


export const globalStyles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: globalColors.background,
    },

    primaryButton: {
        backgroundColor: globalColors.primary,
        padding: 10,
        width: '100%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },

    buttonText: {
        color: globalColors.text,
        fontSize: 18,
    },

    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: globalColors.text,
    },

});