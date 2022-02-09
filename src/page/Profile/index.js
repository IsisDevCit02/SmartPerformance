import {
    Box,
    Button,
    Center,
    HStack,
    NativeBaseProvider,
    Text,
    Avatar,
    Heading,
    Input,
    IconButton,
    Stack,
    View,
    Divider
} from 'native-base';
import React, { useState } from 'react';

import { colors } from '../../assets/css/styles';
import * as locale from '../../locale.json';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function Profile({ navigation }) {
    const [nameUser, setNameUser] = useState('Luan Gustavo')
    const [cpf, setCpf] = useState('078.983.281.62')
    const [birthday, setBirthday] = useState('19/04/2003')
    const [cargo, setCargo] = useState('Representante')
    return (
        <NativeBaseProvider>
            <Box flex={1} alignItems="center" justifyContent="center" bg={colors.colorRed}>
                <Center flex={1}></Center>
                <HStack bg={colors.white}
                    alignItems="center"
                    justifyContent="center"
                    height="90%"
                    width='100%'
                    borderTopLeftRadius={20}
                    borderRightRadius={20}
                >
                    <Box safeArea p="2" bottom={10}>
                        <Avatar
                            size="xl"
                            borderColor={colors.white}
                            borderWidth={3}
                            source={{
                                uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
                            }}
                            alignSelf='center'
                            bottom='10%'
                        >
                        </Avatar>
                            <IconButton
                                colorScheme="indigo"
                                alignSelf='center'
                                bottom='26%'
                                left='10%'
                                borderRadius={20}
                                borderWidth={2}
                                backgroundColor={colors.colorRed}
                                borderColor={colors.white}
                                key="variant"
                                onPress={() => navigation.navigate('EditProfile')}
                                icon={<Icon
                                    name='pencil-alt'
                                    size={20} 
                                    color={colors.white} />}
                            />
                        <Heading
                            fontSize={20}
                            color={colors.colorBlack}
                            fontWeight="bold"
                            textAlign="center"
                            bottom='12%'
                            textTransform='uppercase'
                        >
                            {nameUser}
                        </Heading>
                        <Heading
                            mt="4"
                            color={colors.colorGray}
                            fontWeight="bold"
                            fontSize={10}
                            textAlign="center"
                            bottom='13%'
                            textTransform='uppercase'
                        >
                            {cargo}
                        </Heading>
                        <Stack
                            p={4}
                            space={2}
                            width='100%'
                            height='25%'
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
                            borderRadius={20}
                            alignSelf='center'
                            bottom='10%'>
                            <Stack space={2}>
                                <Heading size="xs"
                                    fontWeight="bold"
                                    ml={-0.5}
                                    mt={-1}
                                    color={colors.colorGray}>
                                    {locale.Profile.Label.DADOS_PESSOAIS}
                                </Heading>
                                <Divider />
                            </Stack>
                            <View flexDirection='row' width={300}>
                                <Icon
                                    style={{ top: '5%' }}
                                    name='user-circle'
                                    size={45}
                                    color={colors.colorGray}
                                />
                                <Divider orientation="vertical" mx="3" />
                                <View>
                                    <Text mt="1" fontWeight='bold' color={colors.colorGray}>
                                        Nome: { }
                                    </Text>
                                    <Text mt="1" fontWeight='bold' color={colors.colorGray}>
                                        CPF: { }
                                    </Text>
                                    <Text mt="1" fontWeight='bold' color={colors.colorGray}>
                                        Data de Nascimento: { }
                                    </Text>
                                    <Text mt="1" fontWeight='bold' color={colors.colorGray}>
                                        Sexo: { }
                                    </Text>

                                </View>
                            </View>
                        </Stack>
                        <Stack
                            p={4}
                            space={2}
                            width='100%'
                            height='20%'
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
                            borderRadius={20}
                            alignSelf='center'
                            bottom='5%'
                            >
                            <Stack space={2}>
                                <Heading size="xs"
                                    fontWeight="bold"
                                    ml={-0.5}
                                    mt={-1}
                                    color={colors.colorGray}>
                                    {locale.Profile.Label.ENDERECO}
                                </Heading>
                                <Divider />
                            </Stack>
                            <View flexDirection='row' width={300}>
                                <Icon
                                
                                    name='map-marker-alt'
                                    size={40}
                                    color={colors.colorGray}
                                />
                                <Divider orientation="vertical" mx="3" />
                                <View>
                                    <Text mt="1" fontWeight='bold' color={colors.colorGray}>
                                        Nenhum endereço cadastrado!
                                    </Text>
                                </View>
                            </View>
                        </Stack>
                        <View>
                            <Button
                                backgroundColor={colors.colorRed}
                                borderRadius={15}
                                height={50}
                                width='100%'
                                alignSelf='center'
                                top='10%'
                                onPress={() => navigation.navigate('')}
                            >
                                <Text
                                    color={colors.white}
                                    fontWeight='bold'
                                    fontSize={16}>
                                    {locale.Button.VOLTAR}
                                </Text>
                            </Button>
                        </View>
                    </Box>
                </HStack>
            </Box>
        </NativeBaseProvider>
    );
}