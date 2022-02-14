import * as RootNavigation from '../RootNaviation';
import { dateConvert } from '../utils/Mask';
import {
    Avatar,
    Box,
    Input,
    NativeBaseProvider,
    Text,
    View
} from 'native-base';
import { FlatList } from 'react-native';
import React, { Component } from 'react';
import { colors } from '../assets/css/styles';
import * as locale from '../locale.json';
import Filter from 'react-native-vector-icons/FontAwesome'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { TouchableOpacity } from 'react-native';

class CardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pesquisar: ''
        }

    }

    goInfoClients = () => {

    }
    renderCard = ({ item }) => {
        return (
            <Box bg={colors.white}>
                {(() => {
                    if (item.statusCliente == "Ativo e Liberado" && item.statusVisita) {
                        return (
                            <TouchableOpacity onPress={() =>
                                RootNavigation.navigate('InfoClients', { userName: 'InfoClients' })}>
                                <Box
                                    width='90%'
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
                                    <Box flexDirection='row'>
                                        <Box>
                                            <Avatar
                                                size="lg"
                                                borderColor={colors.white}
                                                borderWidth={3}
                                                right='30%'
                                                source={{
                                                    uri: item.image,
                                                }}
                                            >
                                            </Avatar>
                                        </Box>
                                        <Box>
                                            <Text color={colors.blueTitle}>{item.endereco.cep} - {item.nomeFantasia}</Text>
                                            <Text color={colors.colorGray}>{item.endereco.logradouro}</Text>
                                            <Box flexDirection='row' justifyContent='space-between'>
                                                <Text color={colors.colorGray}>Telefone: {item.telefone} </Text>
                                                <Foundation
                                                    name='telephone'
                                                    size={20}
                                                    color={colors.blue}
                                                />
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Box flexDirection='row' justifyContent='space-between' marginTop={3}>
                                            <Box>
                                                <Text right='30%' color={colors.blueStrong}>Status</Text>
                                            </Box>
                                            <Box backgroundColor={
                                                item.statusCliente == 'Ativo e Liberado' ? colors.greenLight : colors.red
                                            } borderRadius={10} width='50%' left='100%' alignItems='center' height={6}>
                                                <Text
                                                    color={colors.white}
                                                    fontWeight='700'
                                                >{item.statusCliente}</Text>
                                            </Box>
                                        </Box>
                                        <Box flexDirection='row' justifyContent='space-between' marginTop={2}>
                                            <Box>
                                                <Text right='18%' color={colors.blueStrong}>Última visita</Text>
                                            </Box>
                                            <Box backgroundColor={colors.greenLight} borderRadius={10} width='50%' left='100%' alignItems='center' height={6}>
                                                <Text
                                                    color={colors.white}
                                                    fontWeight='700'
                                                >{item.ultimaVisita}</Text>
                                            </Box>
                                        </Box>
                                        {item.statusVisita ?
                                            <Box
                                                flexDirection='row'
                                                justifyContent='space-between'
                                                marginTop={2}>
                                                <Box
                                                    backgroundColor={(() => {
                                                        if (item.statusVisita == 'Visita Relizada') {
                                                            return colors.green
                                                        } else if (item.statusVisita == "Em andamento") {
                                                            return colors.orange
                                                        } else if (item.statusVisita == "Justificada") {
                                                            return colors.blue
                                                        } else if (item.statusVisita == "Justificar Visita") {
                                                            return colors.colorGray
                                                        }

                                                        return null;
                                                    })()}
                                                    borderRadius={10}
                                                    width='50%'
                                                    right='70%'
                                                    alignItems='center'
                                                    height={6}>
                                                    <Text
                                                        color={colors.white}
                                                        fontWeight='700'
                                                    >{item.statusVisita}</Text>
                                                </Box>
                                                <Box backgroundColor={colors.red} borderRadius={10} width='50%' left='100%' alignItems='center' height={6}>
                                                    <Text
                                                        color={colors.white}
                                                        fontWeight='700'
                                                    >Não realizar visita</Text>
                                                </Box>
                                            </Box> : <Text></Text>
                                        }
                                    </Box>
                                </Box>
                            </TouchableOpacity>
                        )
                    } else if (this.props.screen == "WalletClient") {
                        return (
                            <TouchableOpacity onPress={() =>
                                RootNavigation.navigate('InfoClients', { userName: 'InfoClients' })}>
                                <Box
                                    width='95%'
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
                                    <Box flexDirection='row'>
                                        <Box>
                                            <Avatar
                                                size="lg"
                                                borderColor={colors.white}
                                                borderWidth={3}
                                                right='30%'
                                                source={{
                                                    uri: item.image,
                                                }}
                                            >
                                            </Avatar>
                                        </Box>
                                        <Box>
                                            <Text color={colors.blueTitle}>{item.endereco.cep} - {item.nomeFantasia}</Text>
                                            <Text color={colors.colorGray}>{item.endereco.logradouro}</Text>
                                            <Box flexDirection='row' justifyContent='space-between'>
                                                <Text color={colors.colorGray}>Telefone: {item.telefone} </Text>
                                                <Foundation
                                                    name='telephone'
                                                    size={20}
                                                    color={colors.blue}
                                                />
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Box flexDirection='row' justifyContent='space-between' marginTop={3}>
                                            <Box>
                                                <Text right='30%' color={colors.blueStrong}>Status</Text>
                                            </Box>
                                            <Box backgroundColor={
                                                item.statusCliente == 'Ativo e Liberado' ? colors.greenLight : colors.red
                                            } borderRadius={10}
                                                width='50%'
                                                left='100%'
                                                alignItems='center'
                                                height={6}>
                                                <Text
                                                    color={colors.white}
                                                    fontWeight='700'
                                                >{item.statusCliente}</Text>
                                            </Box>
                                        </Box>
                                        <Box flexDirection='row' justifyContent='space-between' marginTop={2}>
                                            <Box>
                                                <Text right='18%' color={colors.blueStrong}>Última visita</Text>
                                            </Box>
                                            <Box backgroundColor={colors.greenLight} borderRadius={10} width='50%' left='100%' alignItems='center' height={6}>
                                                <Text
                                                    color={colors.white}
                                                    fontWeight='700'
                                                >{item.ultimaVisita}</Text>
                                            </Box>
                                        </Box>
                                        {item.statusVisita ?
                                            <Box
                                                flexDirection='row'
                                                justifyContent='space-between'
                                                marginTop={2}>
                                                <Box
                                                    backgroundColor={(() => {
                                                        if (item.statusVisita == 'Visita Relizada') {
                                                            return colors.green
                                                        } else if (item.statusVisita == "Em andamento") {
                                                            return colors.orange
                                                        } else if (item.statusVisita == "Justificada") {
                                                            return colors.blue
                                                        } else if (item.statusVisita == "Justificar Visita") {
                                                            return colors.colorGray
                                                        }

                                                        return null;
                                                    })()}
                                                    borderRadius={10}
                                                    width='50%'
                                                    right='70%'
                                                    alignItems='center'
                                                    height={6}>
                                                    <Text
                                                        color={colors.white}
                                                        fontWeight='700'
                                                    >{item.statusVisita}</Text>
                                                </Box>
                                                <Box backgroundColor={colors.red} borderRadius={10} width='50%' left='100%' alignItems='center' height={6}>
                                                    <Text
                                                        color={colors.white}
                                                        fontWeight='700'
                                                    >Não realizar visita</Text>
                                                </Box>
                                            </Box> : <Text></Text>
                                        }
                                    </Box>
                                </Box>
                            </TouchableOpacity>
                        )
                    } else if (this.props.screen == "OrderHistory") {
                        return (
                            <TouchableOpacity onPress={() =>
                                RootNavigation.navigate('InfoClients', { userName: 'InfoClients' })}>
                                <Box
                                    width='90%'
                                    backgroundColor={colors.white}
                                    style={{
                                        shadowColor: colors.colorGray,
                                        shadowOpacity: 0.50,
                                        shadowRadius: 3,
                                        shadowOffset: { width: -2, height: 4 },
                                        elevation: 20
                                    }}
                                    paddingY={5}
                                    paddingX={5}
                                    borderRadius={15}
                                    alignSelf='center'
                                    marginBottom={5}
                                >
                                    <Box flexDirection='row' justifyContent='center'>
                                        <Box width='50%'>
                                            <Text color={colors.blueTitle}>123456</Text>
                                        </Box>
                                        <Box width='50%'>
                                            <Text
                                                color={colors.blue}
                                                textTransform='uppercase'
                                            > {item.nomeFantasia}</Text>
                                        </Box>
                                    </Box>
                                    <Box flexDirection='row' marginTop='5%'>
                                        <Box width='50%'>
                                            <Text
                                                color={colors.colorGray}
                                                fontSize={14}
                                            >
                                                {locale.WalletClient.Label.PEDIDO}
                                            </Text>
                                        </Box>
                                        <Box width='50%'>
                                            <Text
                                                color={colors.colorGray}
                                                fontSize={14}
                                            >
                                                {locale.WalletClient.Label.TIPO}
                                            </Text>
                                        </Box>
                                    </Box>
                                    <Box flexDirection='row'>
                                        <Box width='50%'>
                                            <Text fontSize={12}>
                                                {item.numeroPedido}
                                            </Text>
                                        </Box>
                                        <Box width='50%'>
                                            <Text>
                                                (Venda Mobile) Pedido de venda
                                            </Text>
                                        </Box>
                                    </Box>
                                    <Box backgroundColor={
                                        item.statusPedido == 'Entregue' ? colors.greenLight : colors.red
                                    } borderRadius={10}
                                        width='50%'
                                        alignItems='center'
                                        alignSelf='flex-end'
                                        marginTop='5%'
                                        height={6}>
                                        <Text
                                            color={colors.white}
                                            fontWeight='700'
                                        >{item.statusPedido}</Text>
                                    </Box>

                                </Box>
                            </TouchableOpacity>
                        )
                    }
                })()}
            </Box>
        )
    }
    render() {
        const date = new Date();
        const convert = JSON.stringify(date)
        var week = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
        return (
            <NativeBaseProvider>
                <Box flex={1} bg={colors.white}>
                    <Box height='3%' />
                    <Input
                        alignSelf='center'
                        placeholder={locale.WalletClient.Input.PESQUISAR}
                        fontSize={12}
                        padding={3}
                        borderRadius={10}
                        width='90%'
                        onChangeText={(text) => this.setState({ pesquisar: text })}
                        value={this.state.pesquisar}
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
                    {this.props.screen == "ScriptDay" ? <Box
                        margin={5}
                        justifyContent='space-between'
                        flexDirection='row'
                    >
                        <Box flexDirection='row'>
                            <Text style={{ fontWeight: '700', fontSize: 11 }}>{`${week[date.getDay()]} - `}</Text>
                            <Text style={{ fontWeight: '700', fontSize: 11 }}>{dateConvert(convert)}</Text>
                        </Box>
                        <TouchableOpacity>
                            <Ionicons
                                name='reload'
                                size={20}
                                color={colors.colorGrayStrong}

                            />
                        </TouchableOpacity>
                    </Box> : <Box flexDirection='row' margin={5} justifyContent='flex-end'>
                        <TouchableOpacity>
                            <Ionicons
                                name='reload'
                                size={20}
                                color={colors.colorGrayStrong}

                            />
                        </TouchableOpacity>
                    </Box>
                    }

                    <FlatList
                        renderItem={this.renderCard}
                        keyExtractor={item => item.id}
                        data={this.props.data}
                    />
                </Box>
            </NativeBaseProvider >
        );
    }
}
export default CardComponent;