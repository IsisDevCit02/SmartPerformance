import { StyleSheet } from "react-native";
import { colors } from "../../assets/css/styles";
const styles = StyleSheet.create({

    cardStatus: {
        shadowColor: colors.colorGray,
        shadowOpacity: 0.50,
        shadowRadius: 3,
        shadowOffset: { width: -2, height: 4 },
        elevation: 20
    },
    iconMiddle: {
        backgroundColor: colors.white,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent:'center',
        alignSelf:'center',
        borderColor: colors.colorRed,
        borderWidth: 7,
        borderRadius: 50,

    }
})
export default styles;