import {
    Box,
    Center,
    Heading,
    Input,
    NativeBaseProvider,
    Stack,
    Text,
    Divider,
    FlatList
} from 'native-base';
import React, { Component } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import * as locale from '../../../../locale.json'
import { colors } from '../../../../assets/css/styles';
import products from './products.json';
import { Images } from '../../../../assets/img/index'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Filter from 'react-native-vector-icons/FontAwesome'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
class InsertProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            baseEstoqueClick: true,
            sugeridoClick: false,
            prdutosClick: false,
            resumoClick: false,
            data: [],
            pesquisar: ""
        }

    }

    componentDidMount = () => {
        this.setState({ data: products })
    }
    renderSugerido = ({ item }) => {
        {
            return (
                <Box flexDirection='row'>
                    <Box
                        width='45%'
                        backgroundColor={colors.white}
                        marginTop='5%'
                        style={{
                            shadowColor: colors.colorGray,
                            shadowOpacity: 0.10,
                            shadowRadius: 3,
                            shadowOffset: { width: -2, height: 4 },
                            elevation: 20
                        }}
                        paddingY={15}
                        paddingX={5}
                        borderRadius={15}
                        marginLeft='5%'
                        marginBottom={5}
                    >
                        <Box flexDirection='row' alignItems='center'>
                            <Box>
                                <Box flexDirection='row' justifyContent='space-between'>
                                    <Text fontWeight='700'>{item.nomeProduto}</Text>
                                    <FontAwesome
                                        name='circle'
                                        size={20}
                                        color={colors.yellow}
                                    />
                                </Box>
                                <Box marginTop='5%'>
                                    <Text fontSize={11} color={colors.colorGrayStrong}>
                                        Cod: {item.cod}
                                    </Text>
                                    <Text fontSize={11} color={colors.colorGrayStrong}>
                                        Un: {item.unidade}
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        width='45%'
                        backgroundColor={colors.white}
                        marginTop='5%'

                        alignItems='center'
                    >
                        <Text
                            color={colors.blueLight}
                            fontWeight='800'
                            fontSize={20}>
                            {item.sugerido}
                        </Text>
                    </Box>
                </Box>
            )
        }
    }

    renderBaseEstoque = ({ item }) => {
        {
            return (
                <TouchableOpacity>
                    <Box
                        width='90%'
                        backgroundColor={colors.white}
                        style={{
                            shadowColor: colors.colorGray,
                            shadowOpacity: 0.10,
                            shadowRadius: 3,
                            shadowOffset: { width: -2, height: 4 },
                            elevation: 20
                        }}
                        paddingY={15}
                        paddingX={5}
                        borderRadius={15}
                        alignSelf='center'
                        marginBottom={5}
                    >
                        <Box flexDirection='row' alignItems='center'>
                            <Image
                                source={{ uri: item.image }}
                                style={
                                    {
                                        width: '30%',
                                        height: 100,
                                        resizeMode: 'stretch',
                                    }
                                }
                            />
                            <Box>
                                <Text fontWeight='700'>{item.nomeProduto}</Text>
                                <Box marginTop='5%'>
                                    <Text fontSize={11} color={colors.colorGrayStrong}>
                                        Cod: {item.cod}
                                    </Text>
                                    <Text fontSize={11} color={colors.colorGrayStrong}>
                                        Un: {item.unidade}
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </TouchableOpacity>
            )
        }
    }
    render() {
        console.log(this.state.sugeridoClick)
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
                        <Box margin='5%'>
                            <Text
                                fontSize={22}
                                fontWeight='700'>
                                {locale.WalletClient.Label.PRODUTOS}
                            </Text>
                        </Box>
                        <Box flexDirection='row'
                            alignSelf='center'
                            alignItems='center'

                        >
                            <Box>
                                <TouchableOpacity
                                    onPress={() => this.setState({
                                        baseEstoqueClick: true,
                                        sugeridoClick: false
                                    })}>
                                    <Text
                                        fontSize={12}
                                        fontWeight={this.state.baseEstoqueClick ? 700 : 200}>
                                        {locale.WalletClient.Label.BASE_ESTOQUE}
                                    </Text>
                                </TouchableOpacity>
                            </Box>
                            <Divider orientation='vertical' margin='3%' />
                            <Box>
                                <TouchableOpacity
                                    onPress={() => this.setState({
                                        baseEstoqueClick: false,
                                        sugeridoClick: true,
                                        prdutosClick: false
                                    })}>
                                    <Text fontSize={12}
                                        fontWeight={this.state.sugeridoClick ? 700 : 200}>
                                        {locale.WalletClient.Label.SUGERIDO}
                                    </Text>
                                </TouchableOpacity>
                            </Box>
                            <Divider orientation='vertical' margin='3%' />
                            <Box>
                                <TouchableOpacity
                                    onPress={() => this.setState({
                                        baseEstoqueClick: false,
                                        sugeridoClick: false,
                                        prdutosClick: true
                                    })}>

                                    <Text
                                        fontWeight={this.state.prdutosClick ? 700 : 200}>
                                        {locale.WalletClient.Label.PRODUTOS}
                                    </Text>
                                </TouchableOpacity>
                            </Box>
                            <Divider orientation='vertical' margin='3%' />
                            <Box>
                                <TouchableOpacity
                                    onPress={() => this.setState({
                                        baseEstoqueClick: false,
                                        sugeridoClick: false,
                                        prdutosClick: false,
                                        resumoClick: true
                                    })}>
                                    <Text
                                        fontSize={12}>
                                        {locale.WalletClient.Label.RESUMO}
                                    </Text>
                                </TouchableOpacity>
                            </Box>
                        </Box>

                        {(() => {
                            if (this.state.baseEstoqueClick == true) {
                                return (
                                    <Box>
                                        <Box flexDirection='row' justifyContent='flex-end'>
                                            <TouchableOpacity style={{
                                                width: '35%',
                                                margin: '5%',
                                                borderRadius: 10,
                                                alignItems: 'center',
                                                backgroundColor: colors.yellow,
                                                height: 25
                                            }}>
                                                <Text fontWeight='600'>{locale.Button.ADICIONAR_PRODUTO}</Text>
                                            </TouchableOpacity>
                                        </Box>
                                        <FlatList
                                            data={this.state.data}
                                            renderItem={this.renderBaseEstoque}
                                        />
                                    </Box>
                                )
                            } else if (this.state.sugeridoClick == true) {
                                return (
                                    <Box>
                                        <Divider bg={colors.blue} my={5} marginTop='5%' width={350} alignSelf='center' />
                                        <Box
                                            flexDirection='row'

                                            alignSelf='center'
                                        >
                                            <Box marginRight='15%'>
                                                <Text fontSize={16} fontWeight='700'>
                                                    {locale.WalletClient.Label.PRODUTO}
                                                </Text>
                                            </Box>
                                            <Box marginLeft='15%'>
                                                <Text fontSize={16} fontWeight='700'>
                                                    {locale.WalletClient.Label.SUGERIDO}
                                                </Text>
                                            </Box>
                                        </Box>
                                        <FlatList
                                            data={this.state.data}
                                            renderItem={this.renderSugerido}
                                        />
                                    </Box>
                                )
                            } else if (this.state.prdutosClick == true) {
                                return (
                                    <Box>
                                        <Input
                                            alignSelf='center'
                                            placeholder={locale.WalletClient.Input.PESQUISAR}
                                            fontSize={12}
                                            padding={3}
                                            borderRadius={10}
                                            width='90%'
                                            marginTop='5%'
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
                                        <FlatList
                                            data={this.state.data}
                                            renderItem={this.renderBaseEstoque}
                                        />
                                    </Box>
                                )
                            } else if (this.state.resumoClick == true) {
                                return (
                                    <FlatList
                                        data={this.state.data}
                                        renderItem={this.renderBaseEstoque}
                                    />
                                )
                            }
                        })()}

                    </Box>
                </Box>
            </NativeBaseProvider >

        );
    }
}
export default InsertProduct;