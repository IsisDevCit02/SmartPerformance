import { Box, Center, Heading, IconButton, NativeBaseProvider } from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Speedometer from 'react-native-vector-icons/MaterialCommunityIcons';
import Wallet from 'react-native-vector-icons/AntDesign';
import { colors } from '../../assets/css/styles';
import styles from './styles';
import * as locale from '../../locale.json';
import { Image, TouchableOpacity } from 'react-native';
import { Icones } from '../../assets/icons/index';

export default function OnBoarding({ navigation }) {
    const hour = new Date()


    return (
        <NativeBaseProvider>
            <Box alignSelf='flex-start'>
                <Box flexDirection='row'>
                    <Box>
                        <IconButton
                            size="md"
                            variant="solid"
                            backgroundColor={colors.white}
                            borderRadius={30}
                            margin={5}
                            style={{
                                shadowColor: colors.colorGray,
                                shadowOpacity: 0.50,
                                shadowRadius: 2,
                                shadowOffset: { width: 0, height: 2 },
                                elevation: 20
                            }}
                            icon={<Icon
                                name='menu'
                                size={20}
                                style={{ color: colors.colorRed }}

                            />
                            }
                        />
                    </Box>
                    <Box
                        p={4}
                        width='70%'
                        height={90}
                        alignSelf='center'
                        alignItems='flex-end'
                        justifyContent='center'
                        backgroundColor={colors.white}
                        borderBottomRadius={15}
                        style={styles.cardStatus}
                        paddingY={25}
                        paddingX={45}
                        flexDirection='row'
                    >
                        <Image
                            source={Icones.bossIcon}
                            resizeMode={"stretch"}
                            width={90}
                            height={90}
                            style={{ marginRight: 10 }}
                        />
                        <Heading
                            color={colors.colorRed}>
                            {locale.OnBoarding.Label.TRABALHANDO}
                        </Heading>
                        <Wallet
                            name='checkcircle'
                            size={25}
                            style={{
                                color: colors.green,
                                margin: 5
                            }}
                        />
                    </Box>
                </Box>
                <Center flex={.76}></Center>
                <Box alignSelf='flex-start'>
                    <IconButton
                        size="lg"
                        onPress={() => navigation.navigate('WorkStatus')}
                        variant="solid"
                        backgroundColor={colors.colorRed}
                        borderRadius={30}
                        margin={5}
                        style={{
                            shadowColor: colors.colorGray,
                            shadowOpacity: 0.50,
                            shadowRadius: 2,
                            shadowOffset: { width: 0, height: 2 },
                            elevation: 20
                        }}
                        icon={<Icon
                            name='suitcase'
                            size={20}
                            style={{ color: colors.white }}
                        />
                        }
                    />
                </Box>
                <Center flex={.1}></Center>

            </Box>
            <Box
                backgroundColor={colors.colorRed}
                alignSelf='center'
                flexDirection='row'
                alignItems="center"
                width='90%'
                height='7%'
                borderRadius={30}
                justifyContent='space-around'
            >
                <TouchableOpacity style={{ padding: 5 }}>
                    <Image
                        source={Icones.speedometer}
                        resizeMode={"stretch"}
                        width={15}
                        height={15}
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                style={{ padding: 5 }}
                onPress={() => navigation.navigate('WalletClient')}>
                    <Wallet
                        name='wallet'
                        size={40}
                        style={{ color: colors.white }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.iconMiddle}>
                    <Image
                        source={Icones.prancheta}
                        resizeMode={"stretch"}
                        width={15}
                        height={15}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 5 }}>
                    <Speedometer
                        name='text-box-multiple-outline'
                        size={40}
                        style={{ color: colors.white }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ padding: 5 }}>
                    <Speedometer
                        name='store'
                        size={40}
                        style={{ color: colors.white }}
                    />
                </TouchableOpacity>
            </Box>
        </NativeBaseProvider>
    );
}