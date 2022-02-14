import {
    Box,
    Center,
    Heading,
    Input,
    NativeBaseProvider,
    Stack,
    Text,
    Divider
} from 'native-base';
import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import * as locale from '../../../../locale.json'
import { colors } from '../../../../assets/css/styles';

class InsertProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }


    render() {

        return (
            <NativeBaseProvider>
                <Box flex={1} alignItems="center" justifyContent="center" bg={colors.colorRed}>
                    <Center flex={1}></Center>
                    <Box bg={colors.white}
                        height="98%"
                        width='100%'
                        borderTopLeftRadius={25}
                        borderRightRadius={25}
                    >
                        <Center flex={0.05}></Center>
                        <Box margin='5%'>
                            <Text
                                fontSize={22}
                                fontWeight='700'>
                                {locale.WalletClient.Label.PRODUTOS}
                            </Text>
                        </Box>
                        <Box flexDirection='row'
                            alignSelf='center'
                            alignItems='center'

                        >
                            <Box>
                                <Text fontSize={12}>{locale.WalletClient.Label.BASE_ESTOQUE}</Text>
                            </Box>
                            <Divider orientation='vertical' margin='3%' />
                            <Box>
                                <Text fontSize={12}>{locale.WalletClient.Label.SUGERIDO}</Text>
                            </Box>
                            <Divider orientation='vertical' margin='3%' />
                            <Box>
                                <Text fontSize={12}>{locale.WalletClient.Label.PRODUTOS}</Text>
                            </Box>
                            <Divider orientation='vertical' margin='3%' />
                            <Box>
                                <Text fontSize={12}>{locale.WalletClient.Label.RESUMO}</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </NativeBaseProvider>

        );
    }
}
export default InsertProduct;