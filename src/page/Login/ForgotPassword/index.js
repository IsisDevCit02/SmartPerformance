import React from 'react';
//import LinearGradient from 'react-native-linear-gradient';
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

import * as locale from '../../../locale.json';

import { colors } from "../../../assets/css/styles";
import { Images } from '../../../assets/img/index';


export default function ForgotPassword({ navigation }) {
    return (
        // <LinearGradient colors={[colors.homeColor, colors.colorGradient]} style={styles.contentTop}>
        <NativeBaseProvider >
            <Box flex={1} alignItems="center" justifyContent="center" bg={colors.coberColor}>
                <Image
                    source={Images.logoKobber}
                    alt="Alternate Text"
                    resizeMode={"stretch"}
                    width='40%'
                    height='10%'
                    marginTop='20%'
                />
                <Center flex={1}></Center>
                <HStack bg={colors.white}
                    alignItems="center"
                    justifyContent="center"
                    height='50%'
                    width='100%'
                    borderTopLeftRadius={20}
                    borderRightRadius={20}
                >
                    <Box safeArea p="2" bottom={10} width='100%' >
                        <Heading
                            fontSize={18}
                            textAlign="center"
                            marginBottom='10%'
                            color={colors.colorBlack}
                        >
                            {locale.Login.Label.ESQUECI_SENHA}
                        </Heading>
                        <FormControl width='85%' alignSelf='center' >
                            <Input
                                variant="underlined"
                                placeholder={locale.Login.Input.DIGITE_LOGIN}
                                borderBottomColor={colors.colorRed}
                                fontSize={12}
                                padding={4}

                            />
                        </FormControl>
                        <View top={10}>
                            <Button
                                backgroundColor={colors.colorRed}
                                borderRadius={15}
                                height={50}
                                width='85%'
                                alignSelf='center'
                            onPress={() => navigation.navigate('ConfirmEmail')}
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
        // </LinearGradient>
    );
}