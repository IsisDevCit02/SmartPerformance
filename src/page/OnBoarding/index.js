import { Box, Center, Heading, HStack, IconButton, NativeBaseProvider, Stack } from 'native-base';
import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { colors } from '../../assets/css/styles';
import * as locale from '../../locale.json';
export default function OnBoarding() {
    const hour = new Date()
    const zeroFill = n => {
        return ('0' + n).slice(-2);
    }
    const dateTime = zeroFill(hour.getHours()) + ':' + zeroFill(hour.getUTCMinutes()) + ':' + zeroFill(hour.getUTCSeconds())
    return (
        <NativeBaseProvider>
            <View style={{ alignItems: 'flex-start' }}>
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
                <Stack
                    p={4}
                    space={2}
                    width='60%'
                    height='20%'
                    alignSelf='center'
                    alignItems='flex-start'
                    justifyContent='center'
                    bottom='20%'
                    backgroundColor={colors.white}
                    borderBottomRadius={15}
                    style={{
                        shadowColor: colors.colorGray,
                        shadowOpacity: 0.50,
                        shadowRadius: 3,
                        shadowOffset: { width: -2, height: 4 },
                        elevation: 20
                    }}
                    paddingY={25}
                    paddingX={45}
                >
                    <Stack space={2} flexDirection='row'>
                        <Icon
                            name='user'
                            size={45}
                            style={{
                                color: colors.colorRed
                            }}
                        />
                        <View>
                            <Heading
                                size='md'
                                ml={-0.5}
                                mt={-1}
                                color={colors.colorRed}>
                                {locale.OnBoarding.Label.TRABALHANDO}
                            </Heading>
                            <View>
                                <Text
                                    style={{
                                        color: colors.colorGrayStrong,
                                        fontSize: 24,
                                        fontWeight: 'bold',
                                        left: '2%'
                                    }}>{dateTime}</Text>
                            </View>
                        </View>
                    </Stack>
                </Stack>
                <Center flex={1}></Center>
                <View style={{ top: '50%' }}>
                    <IconButton
                        size="lg"
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
                </View>
                <Center flex={1}></Center>
                <HStack bg={colors.colorRed}
                    alignItems="center"
                    alignSelf='center'
                    height='15%'
                    top='90%'
                    width='95%'
                    borderRadius={30}
                    flexDirection='row'
                    
                >
                    <IconButton
                        size="lg"
                        variant="solid"
                        backgroundColor={colors.colorRed}
                        borderRadius={30}
                        icon={<Icon
                            name='suitcase'
                            size={30}
                            style={{ color: colors.white }}
                            

                        />
                        }
                    />
                     <IconButton
                        size="lg"
                        variant="solid"
                        backgroundColor={colors.colorRed}
                        borderRadius={30}
                        icon={<Icon
                            name='suitcase'
                            size={30}
                            style={{ color: colors.white }}


                        />
                        }
                    />
                     <IconButton
                        size="lg"
                        variant="solid"
                        backgroundColor={colors.colorRed}
                        borderRadius={30}
                        icon={<Icon
                            name='suitcase'
                            size={30}
                            style={{ color: colors.white }}


                        />
                        }
                    />
                     <IconButton
                        size="lg"
                        variant="solid"
                        backgroundColor={colors.colorRed}
                        borderRadius={30}
                        icon={<Icon
                            name='suitcase'
                            size={30}
                            style={{ color: colors.white }}


                        />
                        }
                    />
                     <IconButton
                        size="lg"
                        variant="solid"
                        backgroundColor={colors.colorRed}
                        borderRadius={30}
                        icon={<Icon
                            name='suitcase'
                            size={30}
                            style={{ color: colors.white }}


                        />
                        }
                    />

                </HStack>

            </View>
        </NativeBaseProvider>
    );
}