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

import * as locale from '../../../../locale.json';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from "../../../../assets/css/styles";
import { Images } from '../../../../assets/img/index';


export default function ConfirmEmail({ navigation }) {
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
                    marginTop='30%'
                />
                <Center flex={1}></Center>
                <HStack bg={colors.white}
                    alignItems="center"
                    justifyContent="center"
                    height='60%'
                    width='100%'
                    borderTopLeftRadius={20}
                    borderRightRadius={20}
                >
                    <Box safeArea p="2" bottom='20%' width='100%' >
                        <Heading
                            fontSize={18}
                            textAlign="center"
                            color={colors.colorBlack}
                        >
                            {locale.Login.Label.ESQUECI_SENHA}
                        </Heading>
                        <FormControl width='85%' alignSelf='center' marginTop='5%'>
                            <Input
                                variant="underlined"
                                placeholder={locale.Login.Input.DIGITE_LOGIN}
                                borderBottomColor={colors.colorRed}
                                fontSize={12}
                                padding={4}
                                InputLeftElement={
                                    <Icon
                                        name='user-alt'
                                        size={15}
                                        color={colors.colorRed} />
                                }
                            />
                        </FormControl>
                        <FormControl width='85%' alignSelf='center' marginTop='5%'>
                            <Input
                                variant="underlined"
                                placeholder={locale.Login.Input.DIGITE_CODIGO}
                                borderBottomColor={colors.colorRed}
                                fontSize={12}
                                padding={4}
                                InputLeftElement={
                                    <Icon
                                        name='lock'
                                        size={15}
                                        color={colors.colorRed} />
                                }
                            />
                        </FormControl>
                        <View top='40%'>
                            <Button
                                backgroundColor={colors.colorRed}
                                borderRadius={15}
                                height={50}
                                width='85%'
                                alignSelf='center'
                                onPress={() => navigation.navigate('NewPassword')}
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