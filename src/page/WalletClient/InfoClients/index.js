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
import { colors } from '../../../assets/css/styles';
import * as locale from '../../../locale.json';
import Person from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import styles from './styles';

import { ScrollView, TouchableOpacity } from 'react-native';



export default function InfoClients({ navigation }) {
    const [showInfo, setShowInfo] = useState(true)
    console.log(showInfo)
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
                    <Box flexDirection='row' alignItems='center' justifyContent='space-around'>
                        {showInfo ?
                            <TouchableOpacity onPress={() => setShowInfo(true)}
                                style={styles.whenTouch}>
                                <Text fontWeight='700'>Info</Text>
                            </TouchableOpacity> :
                            <TouchableOpacity onPress={() => setShowInfo(true)}
                                style={styles.whenDisabled}>
                                <Text>Info</Text>
                            </TouchableOpacity>}
                        {!showInfo ?
                            <TouchableOpacity onPress={() => setShowInfo(false)}
                                style={styles.whenTouch}>
                                <Text fontWeight='700'>Pedido</Text>
                            </TouchableOpacity> :
                            <TouchableOpacity onPress={() => setShowInfo(false)}
                                style={styles.whenDisabled}>
                                <Text fontWeight='700'>Pedido</Text>
                            </TouchableOpacity>
                        }
                    </Box>
                    {showInfo ?
                        <Box>
                            <TouchableOpacity
                                style={styles.infoClients}>
                                <Box>
                                    <Person
                                        name='person'
                                        size={25}
                                        style={{ marginLeft: '5%' }}
                                    />
                                </Box>
                                <Box>
                                    <Text fontSize={16} fontWeight='500'>{locale.WalletClient.Label.DADOS_CADASTRAIS}</Text>
                                </Box>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.infoClients}>
                                <Box>
                                    <Feather
                                        name='calendar'
                                        size={25}
                                        style={{ marginLeft: '5%' }}
                                    />
                                </Box>
                                <Box>
                                    <Text fontSize={16} fontWeight='500'>{locale.WalletClient.Label.HISTORICO_PEDIDO}</Text>
                                </Box>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.infoClients}>
                                <Box>
                                    <Feather
                                        name='target'
                                        size={25}
                                        style={{ marginLeft: '5%' }}
                                    />
                                </Box>
                                <Box>
                                    <Text fontSize={16} fontWeight='500'>{locale.WalletClient.Label.METAS}</Text>
                                </Box>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.infoClients}>
                                <Box>
                                    <Ionicons
                                        name='compass-outline'
                                        size={25}
                                        style={{ marginLeft: '5%' }}
                                    />
                                </Box>
                                <Box>
                                    <Text fontSize={16} fontWeight='500'>{locale.WalletClient.Label.PEDIDOS}</Text>
                                </Box>
                            </TouchableOpacity>
                            <Box
                                width='90%'
                                marginTop='10%'
                                borderBottomColor={colors.blueStrong}
                                borderBottomWidth={1}
                                alignSelf='center'
                            />
                            <Box
                                flexDirection='row'
                                alignItems='center'
                                justifyContent='space-between'
                                width='95%'
                            >
                                <Box margin='5%'>
                                    <Text
                                        fontWeight='500'
                                        fontSize={16}
                                        color={colors.blueStrong}
                                    > Status</Text>
                                </Box>
                                <Box
                                    backgroundColor={colors.greenLight}
                                    borderRadius={10} width='40%'
                                    alignItems='center'
                                    height={6}>
                                    <Text>
                                        Ativo/ Liberado
                                    </Text>
                                </Box>
                            </Box>
                            <Box marginTop='5%'>
                                <Text
                                    fontSize={16}
                                    fontWeight='700'
                                    textAlign='center'
                                    color={colors.colorBlack}>
                                    {locale.WalletClient.Label.GEOLOCALIZACAO}
                                </Text>
                            </Box>
                        </Box>
                        :
                        <Box>
                            <TouchableOpacity
                                style={styles.infoClients}>
                                <Box>
                                    <Person
                                        name='person'
                                        size={25}
                                        style={{ marginLeft: '5%' }}
                                    />
                                </Box>
                                <Box>
                                    <Text fontSize={16} fontWeight='500'>{locale.WalletClient.Label.CHECK_IN}</Text>
                                </Box>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.infoClients}>
                                <Box>
                                    <Feather
                                        name='target'
                                        size={25}
                                        style={{ marginLeft: '5%' }}
                                    />
                                </Box>
                                <Box>
                                    <Text fontSize={16} fontWeight='500'>{locale.WalletClient.Label.METAS}</Text>
                                </Box>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.infoClients}>
                                <Box>
                                    <Ionicons
                                        name='compass-outline'
                                        size={25}
                                        style={{ marginLeft: '5%' }}
                                    />
                                </Box>
                                <Box>
                                    <Text fontSize={16} fontWeight='500'>{locale.WalletClient.Label.MISSOES}</Text>
                                </Box>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.infoClients}>
                                <Box>
                                    <Feather
                                        name='search'
                                        size={25}
                                        style={{ marginLeft: '5%' }}
                                    />
                                </Box>
                                <Box>
                                    <Text fontSize={16} fontWeight='500'>{locale.WalletClient.Label.EXECUCAO_PDV}</Text>
                                </Box>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("AddNewRequest")}
                                style={styles.infoClients}>
                                <Box>
                                    <MaterialIcons
                                        name='add-circle-outline'
                                        size={25}
                                        style={{ marginLeft: '5%' }}
                                    />
                                </Box>
                                <Box>
                                    <Text fontSize={16} fontWeight='500'>{locale.WalletClient.Label.ADICIONAR_PEDIDO}</Text>
                                </Box>
                            </TouchableOpacity>
                            <Box
                                width='90%'
                                marginTop='10%'
                                borderBottomColor={colors.blueStrong}
                                borderBottomWidth={1}
                                alignSelf='center'
                            />

                        </Box>
                    }
                </Box>
            </Box>
        </NativeBaseProvider>
    );
}