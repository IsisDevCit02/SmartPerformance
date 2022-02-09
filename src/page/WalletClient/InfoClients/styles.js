import { StyleSheet } from "react-native";
import { colors } from "../../../assets/css/styles";
const styles = StyleSheet.create({

    whenTouch: {
        borderBottomColor: colors.colorGrayStrong,
        borderBottomWidth: 2,
        width: '40%',
        alignItems: 'center',
        marginBottom:'10%'
    },
    whenDisabled: {
        width: '40%',
        alignItems: 'center',
        marginBottom:'10%'
    },
    infoClients: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        margin: '3%'
    }
})

export default styles;