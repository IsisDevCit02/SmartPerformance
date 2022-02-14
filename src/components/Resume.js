import {
    Box,
    Center,
    NativeBaseProvider,
    Text
} from 'native-base';
import React, { Component } from 'react';
import { colors } from '../assets/css/styles';
import Feather from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native';
import * as locale from '../locale.json';

import * as RootNavigation from '../RootNaviation';
import { dateConvert, hourConvert } from '../utils/Mask';
class Resume extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

    }


    render() {
        const date = new Date();
        const convert = JSON.stringify(date)
        const hour = new Date()
        var week = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
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
                        <Box margin={5}
                            justifyContent='space-between'
                            flexDirection='row'>
                            <Box flexDirection='row'>
                                <Text style={{ fontWeight: '700', fontSize: 11, color: colors.blue }}>{`${dateConvert(convert)} - `}</Text>
                                <Text style={{ fontWeight: '700', fontSize: 11, color: colors.blue }}>{`${week[date.getDay()]} `}</Text>
                                <Text style={{ fontWeight: '700', fontSize: 11, color: colors.blue }}>{` - ${hour.getHours()}:${hour.getMinutes()}`}</Text>
                            </Box>
                            <TouchableOpacity>
                                <Feather
                                    name='printer'
                                    size={25}
                                    color={colors.blue}
                                />
                            </TouchableOpacity>
                        </Box>
                        <Box>
                            <Text
                                textAlign='center'
                                fontWeight='700'
                                textTransform='uppercase'
                                marginBottom='5%'
                            >
                                {this.props.label}
                            </Text>
                        </Box>
                        <Box
                            width='90%'
                            backgroundColor={colors.white}
                            style={{
                                shadowColor: colors.colorGray,
                                shadowOpacity: 0.50,
                                shadowRadius: 3,
                                shadowOffset: { width: -1, height: 4 },
                                elevation: 20
                            }}
                            paddingY={5}
                            paddingX={5}
                            borderRadius={15}
                            alignSelf='center'
                            marginBottom={5}
                        >

                            <Box flexDirection='row'>
                                <Box>
                                    <Box >
                                        <Text
                                            fontWeight='700'
                                            fontSize={11}
                                            textTransform='uppercase'>
                                            {locale.WalletClient.Label.HISTORICO}
                                        </Text>
                                        <Box marginTop='20%'>
                                            <Text fontSize={11} fontWeight="600" marginTop='2%'>
                                                {locale.WalletClient.Label.VALOR}
                                            </Text>
                                            <Text fontSize={11} fontWeight="600" marginTop='2%'>
                                                {locale.WalletClient.Label.PEDIDO}
                                            </Text>
                                            <Text fontSize={11} fontWeight="600" marginTop='2%'>
                                                {locale.WalletClient.Label.ITENS}
                                            </Text>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Text
                                            fontWeight='700'
                                            fontSize={11}
                                            marginTop='30%'
                                            textTransform='uppercase'>
                                            Este mês
                                        </Text>
                                        <Box marginTop='15%'>
                                            <Text fontSize={11} fontWeight="600" marginTop='2%'>
                                                {locale.WalletClient.Label.FATURAMENTO}
                                            </Text>
                                            <Text fontSize={11} fontWeight="600" marginTop='2%'>
                                                {locale.WalletClient.Label.PEDIDO}
                                            </Text>
                                            <Text fontSize={11} fontWeight="600" marginTop='2%'>
                                                {locale.WalletClient.Label.ITENS}
                                            </Text>
                                        </Box>
                                    </Box>
                                </Box>
                               <Box>
                                   
                               </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </NativeBaseProvider>
        )
    }
}

export default Resume;