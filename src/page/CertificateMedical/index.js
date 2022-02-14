import {
    Box,
    Center,
    NativeBaseProvider,
    Text,
    Input,
    Button,
} from 'native-base';
import React, { Component } from 'react';

import { colors } from '../../assets/css/styles';
import * as locale from '../../locale.json';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'


import { TouchableOpacity } from 'react-native';


class CertificateMedical extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            cid: ''
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
                        <Box>
                            <Box>
                                <Text
                                    fontSize={20}
                                    color={colors.red}
                                    alignSelf='center'
                                    margin='10%'
                                >
                                    {locale.CertificateMedical.Label.INSERIR_ATESTADO}
                                </Text>
                            </Box>
                            <Box
                                width='85%'
                                marginBottom='5%'
                                backgroundColor={colors.white}
                                style={{
                                    shadowColor: colors.colorGray,
                                    shadowOpacity: 0.50,
                                    shadowRadius: 3,
                                    shadowOffset: { width: -2, height: 4 },
                                    elevation: 20
                                }}
                                borderColor={colors.blueStrong}
                                borderWidth={1}
                                paddingY={15}
                                borderRadius={10}
                                alignSelf='center'
                            >
                                <Box flexDirection='row' justifyContent='space-around'>
                                    <Box>
                                        <Text
                                            fontSize={16}
                                            fontWeight='500'
                                            color={colors.blueStrong}
                                        >
                                            {locale.CertificateMedical.Label.INICIO_ATESTADO}
                                        </Text>
                                        <Text color={colors.colorGrayStrong}>
                                            14/12/2021
                                        </Text>
                                    </Box>
                                    <Feather
                                        name="calendar"
                                        size={50}
                                        style={{
                                            color: colors.blueStrong
                                        }}
                                    />
                                </Box>
                            </Box>
                            <Box
                                width='85%'
                                marginBottom='5%'
                                backgroundColor={colors.white}
                                style={{
                                    shadowColor: colors.colorGray,
                                    shadowOpacity: 0.50,
                                    shadowRadius: 3,
                                    shadowOffset: { width: -2, height: 4 },
                                    elevation: 20
                                }}
                                borderColor={colors.blueStrong}
                                borderWidth={1}
                                paddingY={15}
                                borderRadius={10}
                                alignSelf='center'
                            >
                                <Box flexDirection='row' justifyContent='space-around'>
                                    <Box>
                                        <Text
                                            fontSize={16}
                                            fontWeight='500'
                                            color={colors.blueStrong}
                                        >
                                            {locale.CertificateMedical.Label.FIM_ATESTADO}
                                        </Text>
                                        <Text color={colors.colorGrayStrong}>

                                        </Text>
                                    </Box>
                                    <Feather
                                        name="calendar"
                                        size={50}
                                        style={{
                                            color: colors.blueStrong
                                        }}
                                    />
                                </Box>
                            </Box>
                            <Box
                                width='85%'
                                marginBottom='5%'
                                backgroundColor={colors.white}
                                style={{
                                    shadowColor: colors.colorGray,
                                    shadowOpacity: 0.50,
                                    shadowRadius: 3,
                                    shadowOffset: { width: -2, height: 4 },
                                    elevation: 20
                                }}
                                borderColor={colors.blueStrong}
                                borderWidth={1}
                                paddingY={15}
                                borderRadius={10}
                                alignSelf='center'
                            >
                                <Box flexDirection='row' justifyContent='space-around'>
                                    <Box>
                                        <Text
                                            fontSize={16}
                                            fontWeight='500'
                                            color={colors.blueStrong}
                                        >
                                            {locale.CertificateMedical.Label.FOTO_ATESTADO}
                                        </Text>
                                        <Text color={colors.colorGrayStrong}>

                                        </Text>
                                    </Box>
                                    <AntDesign
                                        name="camera"
                                        size={50}
                                        style={{
                                            color: colors.blueStrong
                                        }}
                                    />
                                </Box>
                            </Box>
                            <Box
                                width='85%'
                                marginBottom='5%'
                                backgroundColor={colors.white}
                                style={{
                                    shadowColor: colors.colorGray,
                                    shadowOpacity: 0.50,
                                    shadowRadius: 3,
                                    shadowOffset: { width: -2, height: 4 },
                                    elevation: 20
                                }}
                                borderColor={colors.blueStrong}
                                borderWidth={1}
                                paddingY={15}
                                borderRadius={10}
                                alignSelf='center'
                            >
                                <Box flexDirection='row' justifyContent='space-around'>
                                    <Box>
                                        <Text
                                            fontSize={16}
                                            fontWeight='500'
                                            color={colors.blueStrong}
                                        >
                                            {}
                                        </Text>
                                        <Input
                                            alignSelf='center'
                                            placeholder={locale.CertificateMedical.Input.CID_MEDICO}
                                            fontSize={12}
                                            padding={2}
                                            borderRadius={5}
                                            marginTop='5%'
                                            width={200}
                                            onChangeText={(text) => this.setState({ cid: text })}
                                            value={this.state.cid}
                                        />
                                    </Box>
                                    <Feather
                                        name="file-text"
                                        size={50}
                                        style={{
                                            color: colors.blueStrong
                                        }}
                                    />
                                </Box>
                            </Box>
                            <Box>
                            <Button
                                    variant="outline"
                                    style={{ borderColor: colors.colorRed }}
                                    borderRadius={10}
                                    height={50}
                                    width='85%'
                                    alignSelf='center'
                                    onPress={() => this.props.navigation.navigate('OnBoarding')}
                                >
                                    <Text
                                        color={colors.colorRed}
                                        fontWeight='bold'
                                        fontSize={16}>
                                        {locale.Button.VOLTAR}
                                    </Text>
                                </Button>
                                <Button
                                    backgroundColor={colors.colorRed}
                                    borderRadius={10}
                                    height={50}
                                    width='85%'
                                    marginTop='2%'
                                    alignSelf='center'
                                    onPress={() => this.props.navigation.navigate('')}
                                >
                                    <Text
                                        color={colors.white}
                                        fontWeight='bold'
                                        fontSize={16}>
                                        {locale.Button.APLICAR}
                                    </Text>
                                </Button>
                            </Box>

                        </Box>
                    </Box>
                </Box>
            </NativeBaseProvider>
        );
    }
}
export default CertificateMedical;