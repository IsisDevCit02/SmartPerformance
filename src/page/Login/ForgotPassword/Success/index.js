import React, { Component } from 'react';
import {
    NativeBaseProvider,
    Box,
    Image,
    HStack,
    Center,
    Button,
    Text,
    Heading,
    FormControl,
    View,
    Input
} from 'native-base';

import * as locale from '../../../../locale.json';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from "../../../../assets/css/styles";
import { Images } from '../../../../assets/img/index';


class Success extends Component {
    render() {

        return (
            <NativeBaseProvider >
                <Box flex={1} alignItems="center" justifyContent="center" bg={colors.coberColor}>
                    <Image
                        source={Images.logoKobber}
                        alt="Alternate Text"
                        resizeMode={"stretch"}
                        width='40%'
                        height='10%'
                        marginTop='15%'
                    />
                    <Center flex={1}></Center>
                    <HStack bg={colors.white}
                        alignItems="center"
                        justifyContent="center"
                        height='70%'
                        width='100%'
                        borderTopLeftRadius={20}
                        borderRightRadius={20}
                    >
                        <Box safeArea p="2" bottom='20%' width='100%' >
                            <Image
                                source={Images.success}
                                alt="Alternate Text"
                                resizeMode={"stretch"}
                                width='22%'
                                height='14%'
                                alignSelf='center'
                                bottom='5%'

                            />
                            <View width='90%' alignSelf='center'>
                                <Heading
                                    fontSize={30}
                                    textAlign="center"
                                    color={colors.colorBlack}
                                >
                                    {locale.Login.Label.SUCESSO}
                                </Heading>
                                <Text
                                    top='10%'
                                    fontSize={18}
                                    textAlign="center"
                                    color={colors.colorBlack}
                                    fontWeight='bold'
                                >
                                    {locale.Login.Label.SENHA_ALTERADA_SUCESSO}
                                </Text>
                            </View>

                            <View top='30%'>
                                <Button
                                    backgroundColor={colors.colorRed}
                                    borderRadius={15}
                                    height={50}
                                    width='85%'
                                    alignSelf='center'
                                    onPress={() =>this.props.navigation.navigate('OnBoarding')}
                                >
                                    <Text
                                        color={colors.white}
                                        fontWeight='bold'
                                        fontSize={16}>
                                        {locale.Button.CONTINUAR}
                                    </Text>
                                </Button>
                            </View>
                        </Box>

                    </HStack>
                </Box>
            </NativeBaseProvider>
        );
    }
}
export default Success;