import {
    Avatar,
    Box,
    Center,
    Divider,
    Heading,
    Icon,
    Input,
    NativeBaseProvider,
    Text,
    View
} from 'native-base';
import React, { useState } from 'react';
import { colors } from '../../assets/css/styles';
import * as locale from '../../locale.json';
import Filter from 'react-native-vector-icons/FontAwesome'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ScrollView, TouchableOpacity } from 'react-native';

export default function WalletClient({navigation}) {
    [pesquisar, setPesquisar] = useState('')
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
                    <Center flex={5}></Center>
                    <Input
                        alignSelf='center'
                        placeholder={locale.WalletClient.Input.PESQUISAR}
                        fontSize={12}
                        padding={3}
                        borderRadius={10}
                        width='90%'
                        onChangeText={(text) => setPesquisar(text)}
                        value={pesquisar}
                        InputRightElement={
                            <Filter
                                name='filter'
                                size={15}
                                color={colors.colorGrayStrong}
                                style={{ marginRight: 10 }}
                            />
                        }
                        InputLeftElement={
                            <Filter
                                name='search'
                                size={15}
                                color={colors.colorGrayStrong}
                                style={{ marginLeft: 10 }}
                            />
                        }
                    />
                    <Box alignSelf='flex-end' margin={5}>
                        <TouchableOpacity>
                            <Ionicons
                                name='reload'
                                size={20}
                                color={colors.colorGrayStrong}

                            />
                        </TouchableOpacity>
                    </Box>
                    <ScrollView>
                        <TouchableOpacity onPress={() => navigation.navigate('InfoClients')}>
                            <Box
                                p={4}
                                space={2}
                                backgroundColor={colors.white}
                                style={{
                                    shadowColor: colors.colorGray,
                                    shadowOpacity: 0.50,
                                    shadowRadius: 3,
                                    shadowOffset: { width: -2, height: 4 },
                                    elevation: 20
                                }}
                                paddingY={25}
                                paddingX={45}
                                borderRadius={15}
                                alignSelf='center'
                                marginBottom={5}
                            >
                                <Box
                                    flexDirection='row'
                                    justifyContent='space-between'
                                >
                                    <Box>
                                        <Avatar
                                            size="lg"
                                            borderColor={colors.white}
                                            borderWidth={3}
                                            source={{
                                                uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
                                            }}
                                            alignSelf='center'
                                            bottom='10%'
                                        >
                                        </Avatar>
                                    </Box>
                                    <Box>
                                        <Text color={colors.blueTitle}>123456 - QUITANDA DO DAVID - ME</Text>
                                        <Text color={colors.colorGray}>Av. dos Autonomistas, 17</Text>
                                        <Box flexDirection='row' justifyContent='space-between'>
                                            <Text color={colors.colorGray}>Telefone : 871.567.4877</Text>
                                            <Foundation
                                                name='telephone'
                                                size={20}
                                                color={colors.blue}
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                                <Box>
                                    <Box flexDirection='row' justifyContent='space-between' marginTop={5}>
                                        <Box>
                                            <Text color={colors.blueStrong}>Status</Text>
                                        </Box>
                                        <Box backgroundColor={colors.greenLight} borderRadius={10} width='40%' alignItems='center' height={6}>
                                            <Text
                                                color={colors.white}
                                                fontWeight='600'
                                            >Ativo e liberado</Text>
                                        </Box>
                                    </Box>
                                    <Box flexDirection='row' justifyContent='space-between' marginTop={5}>
                                        <Box>
                                            <Text color={colors.blueStrong}>Última visita</Text>
                                        </Box>
                                        <Box backgroundColor={colors.greenLight} borderRadius={10} width='40%' alignItems='center' height={6}>
                                            <Text
                                                color={colors.white}
                                                fontWeight='600'
                                            >15/12/2021</Text>
                                        </Box>
                                    </Box>

                                </Box>
                            </Box>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('InfoClients')}>
                            <Box
                                p={4}
                                space={2}
                                backgroundColor={colors.white}
                                style={{
                                    shadowColor: colors.colorGray,
                                    shadowOpacity: 0.50,
                                    shadowRadius: 3,
                                    shadowOffset: { width: -2, height: 4 },
                                    elevation: 20
                                }}
                                paddingY={25}
                                paddingX={45}
                                borderRadius={15}
                                alignSelf='center'
                                marginBottom={5}
                            >
                                <Box
                                    flexDirection='row'
                                    justifyContent='space-between'
                                >
                                    <Box>
                                        <Avatar
                                            size="lg"
                                            borderColor={colors.white}
                                            borderWidth={3}
                                            source={{
                                                uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
                                            }}
                                            alignSelf='center'
                                            bottom='10%'
                                        >
                                        </Avatar>
                                    </Box>
                                    <Box>
                                        <Text color={colors.blueTitle}>123456 - QUITANDA DO DAVID - ME</Text>
                                        <Text color={colors.colorGray}>Av. dos Autonomistas, 17</Text>
                                        <Box flexDirection='row' justifyContent='space-between'>
                                            <Text color={colors.colorGray}>Telefone : 871.567.4877</Text>
                                            <Foundation
                                                name='telephone'
                                                size={20}
                                                color={colors.blue}
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                                <Box>
                                    <Box flexDirection='row' justifyContent='space-between' marginTop={5}>
                                        <Box>
                                            <Text color={colors.blueStrong}>Status</Text>
                                        </Box>
                                        <Box backgroundColor={colors.greenLight} borderRadius={10} width='40%' alignItems='center' height={6}>
                                            <Text
                                                color={colors.white}
                                                fontWeight='600'
                                            >Ativo e liberado</Text>
                                        </Box>
                                    </Box>
                                    <Box flexDirection='row' justifyContent='space-between' marginTop={5}>
                                        <Box>
                                            <Text color={colors.blueStrong}>Última visita</Text>
                                        </Box>
                                        <Box backgroundColor={colors.greenLight} borderRadius={10} width='40%' alignItems='center' height={6}>
                                            <Text
                                                color={colors.white}
                                                fontWeight='600'
                                            >15/12/2021</Text>
                                        </Box>
                                    </Box>

                                </Box>
                            </Box>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('InfoClients')}>
                            <Box
                                p={4}
                                space={2}
                                backgroundColor={colors.white}
                                style={{
                                    shadowColor: colors.colorGray,
                                    shadowOpacity: 0.50,
                                    shadowRadius: 3,
                                    shadowOffset: { width: -2, height: 4 },
                                    elevation: 20
                                }}
                                paddingY={25}
                                paddingX={45}
                                borderRadius={15}
                                alignSelf='center'
                                marginBottom={5}
                            >
                                <Box
                                    flexDirection='row'
                                    justifyContent='space-between'
                                >
                                    <Box>
                                        <Avatar
                                            size="lg"
                                            borderColor={colors.white}
                                            borderWidth={3}
                                            source={{
                                                uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
                                            }}
                                            alignSelf='center'
                                            bottom='10%'
                                        >
                                        </Avatar>
                                    </Box>
                                    <Box>
                                        <Text color={colors.blueTitle}>123456 - QUITANDA DO DAVID - ME</Text>
                                        <Text color={colors.colorGray}>Av. dos Autonomistas, 17</Text>
                                        <Box flexDirection='row' justifyContent='space-between'>
                                            <Text color={colors.colorGray}>Telefone : 871.567.4877</Text>
                                            <Foundation
                                                name='telephone'
                                                size={20}
                                                color={colors.blue}
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                                <Box>
                                    <Box flexDirection='row' justifyContent='space-between' marginTop={5}>
                                        <Box>
                                            <Text color={colors.blueStrong}>Status</Text>
                                        </Box>
                                        <Box backgroundColor={colors.greenLight} borderRadius={10} width='40%' alignItems='center' height={6}>
                                            <Text
                                                color={colors.white}
                                                fontWeight='600'
                                            >Ativo e liberado</Text>
                                        </Box>
                                    </Box>
                                    <Box flexDirection='row' justifyContent='space-between' marginTop={5}>
                                        <Box>
                                            <Text color={colors.blueStrong}>Última visita</Text>
                                        </Box>
                                        <Box backgroundColor={colors.greenLight} borderRadius={10} width='40%' alignItems='center' height={6}>
                                            <Text
                                                color={colors.white}
                                                fontWeight='600'
                                            >15/12/2021</Text>
                                        </Box>
                                    </Box>

                                </Box>
                            </Box>
                        </TouchableOpacity>
                    </ScrollView>
                </Box>

            </Box>
        </NativeBaseProvider >
    );
}