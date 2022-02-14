import {
    Box,
    Center,
    Avatar,
    Input,
    NativeBaseProvider,
    Text,
    Divider,
    ScrollView
} from 'native-base';
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Filter from 'react-native-vector-icons/FontAwesome'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from '../../../../assets/css/styles';
import * as locale from '../../../../locale.json';

class RegistrationData extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pesquisar: ''
        }

    }

    render() {
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
                        <Box
                            margin={5}
                            justifyContent='flex-end'
                            flexDirection='row'
                        >
                            <TouchableOpacity>
                                <Ionicons
                                    name='reload'
                                    size={20}
                                    color={colors.colorGrayStrong}

                                />
                            </TouchableOpacity>
                        </Box>
                        <ScrollView>

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
                                paddingX={2}
                                borderRadius={15}
                                alignSelf='center'
                            >
                                <Box flexDirection='row' justifyContent='space-between'>
                                    <Box>
                                        <Avatar
                                            size="lg"
                                            borderColor={colors.white}
                                            borderWidth={3}
                                            marginRight='5%'
                                            source={{
                                                uri: "https://img.freepik.com/fotos-gratis/eu-venci-mulher-feliz-de-sucesso-vitorioso-comemorando-ser-um-vencedor-imagem-dinamica-de-modelo-feminino-caucasiano-no-espaco-rosa-vitoria-conceito-de-deleite_155003-26504.jpg?size=338&ext=jpg",
                                            }}
                                        >
                                        </Avatar>
                                    </Box>
                                    <Box>
                                        <Box>
                                            <Text color={colors.blueTitle}>{`item.endereco.ce`} - {`item.nomeFantasia`}</Text>
                                            <Text color={colors.colorGray}>{`item.endereco.logradouro`}</Text>
                                            <Text color={colors.colorGray}>Telefone: {`item.telefone`} </Text>
                                        </Box>
                                        <Box
                                            justifyContent='flex-end'
                                            flexDirection='row'>
                                            <Box backgroundColor={colors.greenLight}
                                                borderRadius={10}
                                                width='50%'
                                                marginTop='10%'
                                                alignItems='center'
                                                height={6}>
                                                <Text
                                                    color={colors.white}
                                                    fontWeight='700'
                                                >{'Ativo e Liberado'}</Text>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Divider bg={colors.blue} my={4} width='100%' alignSelf='center' />
                                <Box flexDirection='row' margin='2%'>
                                    <Text
                                        fontWeight='700'
                                        fontSize={16}>
                                        {locale.WalletClient.Label.CREDITO}
                                    </Text>
                                </Box>
                                <Box
                                    margin='2%'
                                    flexDirection='row'
                                    justifyContent='space-between'>
                                    <Text>
                                        {locale.WalletClient.Label.LIMITE_CREDITO}
                                    </Text>
                                    <Text>
                                        {locale.WalletClient.Label.CREDITO_DISPONIVEL}
                                    </Text>
                                </Box>
                                <Box
                                    margin='2%'
                                    bottom='2%'
                                    flexDirection='row'
                                    justifyContent='space-between'>
                                    <Text>
                                        R$ 2.000,00
                                    </Text>
                                    <Text
                                        color={colors.greenLight}>
                                        R$ 1.800,00
                                    </Text>
                                </Box>
                                <Divider bg={colors.blue} my={5} marginTop='5%' width={350} alignSelf='center' />
                                <Box
                                    flexDirection='row'
                                    margin='2%'>
                                    <Text
                                        fontWeight='700'
                                        fontSize={16}
                                        marginBottom='2%'>
                                        {locale.WalletClient.Label.PLANEJAMENTO_VISITA}
                                    </Text>
                                </Box>
                                <Box
                                    margin='2%'
                                    flexDirection='row'
                                    justifyContent='space-between'>
                                    <Text>{locale.WalletClient.Label.FREQUENCIA}</Text>
                                    <Text>Dia da Semana</Text>
                                </Box>
                                <Divider bg={colors.blue} my={5} marginTop='10%' width={350} alignSelf='center' />
                                <Box flexDirection='row' margin='2%'>
                                    <Text
                                        fontWeight='700'
                                        fontSize={16}
                                        marginBottom='5%'
                                    >{locale.WalletClient.Label.GRADE_ENTREGA}
                                    </Text>
                                </Box>
                                <Box
                                    margin='2%'
                                    flexDirection='row'
                                    justifyContent='space-between'>
                                    <Text>{locale.WalletClient.Label.FREQUENCIA}</Text>
                                    <Text>Dia da Semana</Text>
                                </Box>
                                <Divider bg={colors.blue} my={5} marginTop='10%' width={350} alignSelf='center' />
                                <Box flexDirection='row' margin='2%'>
                                    <Text
                                        fontWeight='700'
                                        fontSize={16}
                                    >{locale.WalletClient.Label.INFORMACOES}
                                    </Text>
                                </Box>
                                <Box
                                    margin='2%'
                                    flexDirection='row'
                                    justifyContent='space-between'>
                                    <Text fontSize={11} fontWeight='700'>
                                        {locale.WalletClient.Label.NOME_RESPONSAVEL}
                                    </Text>
                                    <Text fontSize={11} fontWeight='700'>
                                        {locale.WalletClient.Label.CARGO}
                                    </Text>
                                </Box>
                                <Box
                                    margin='2%'
                                    flexDirection='row'
                                    bottom='2%'
                                    justifyContent='space-between'>
                                    <Text fontSize={14}>
                                        João da Silva
                                    </Text>
                                    <Text fontSize={14}>
                                        Analista de vendas
                                    </Text>
                                </Box>
                                <Box
                                    margin='2%'
                                    flexDirection='row'
                                    justifyContent='space-between'>
                                    <Text fontSize={11} fontWeight='700'>
                                        {locale.WalletClient.Label.EMAIL}
                                    </Text>
                                    <Text fontSize={11} fontWeight='700'>
                                        {locale.WalletClient.Label.CELULAR}
                                    </Text>
                                </Box>
                                <Box

                                    margin='2%'
                                    flexDirection='row'
                                    bottom='2%'
                                    justifyContent='space-between'>
                                    <Text fontSize={14}>
                                        joao@email.com
                                    </Text>
                                    <Text fontSize={14}>
                                        61000000000
                                    </Text>
                                </Box>
                                <Divider bg={colors.blue} my={5} marginTop='10%' width={350} alignSelf='center' />
                                <Box flexDirection='row' margin='2%'>
                                    <Text
                                        fontWeight='700'
                                        fontSize={16}
                                    >{locale.WalletClient.Label.CLASSIFICACAO}
                                    </Text>
                                </Box>
                                <Box
                                    margin='2%'
                                    flexDirection='row'
                                    justifyContent='space-between'>
                                    <Text fontSize={11} fontWeight='700'>
                                        {locale.WalletClient.Label.CATEGORIA_CLIENTE}
                                    </Text>
                                    <Text fontSize={11} fontWeight='700'>
                                        {locale.WalletClient.Label.CANAL}
                                    </Text>
                                </Box>
                                <Box
                                    margin='2%'
                                    flexDirection='row'
                                    bottom='2%'
                                    justifyContent='space-between'>
                                    <Text fontSize={14}>
                                        CONTRIBUINTE
                                    </Text>
                                    <Text fontSize={14}>
                                        Var. Tradicional
                                    </Text>
                                </Box>
                                <Box
                                    margin='2%'
                                    flexDirection='row'
                                    justifyContent='space-between'>
                                    <Text fontSize={11} fontWeight='700'>
                                        {locale.WalletClient.Label.SUBCANAL}
                                    </Text>
                                    <Text fontSize={11} fontWeight='700'>
                                        {locale.WalletClient.Label.FILIAL}
                                    </Text>
                                </Box>
                                <Box

                                    margin='2%'
                                    flexDirection='row'
                                    bottom='2%'
                                    justifyContent='space-between'>
                                    <Text fontSize={14}>
                                        Mini mercado
                                    </Text>
                                    <Text fontSize={14}>
                                        1
                                    </Text>
                                </Box>
                                <Box
                                    margin='2%'
                                    flexDirection='row'
                                    justifyContent='space-between'>
                                    <Text fontSize={11} fontWeight='700'>
                                        {locale.WalletClient.Label.TIPO_COMERCIALIZACAO}
                                    </Text>
                                    <Text fontSize={11} fontWeight='700'>
                                        {locale.WalletClient.Label.CLASSIFICACAO_FISCAL}
                                    </Text>
                                </Box>
                                <Box

                                    margin='2%'
                                    flexDirection='row'
                                    bottom='2%'
                                    justifyContent='space-between'>
                                    <Text fontSize={14}>
                                      .
                                    </Text>
                                    <Text fontSize={14}>
                                        .
                                    </Text>
                                </Box>
                                <Box
                                    margin='2%'
                                    flexDirection='row'
                                    justifyContent='space-between'>
                                    <Text fontSize={11} fontWeight='700'>
                                        {locale.WalletClient.Label.PEDIDO_MINIMO}
                                    </Text>
                                    <Text fontSize={11} fontWeight='700'>
                                        {locale.WalletClient.Label.PEDIDO_MAXIMO}
                                    </Text>
                                </Box>
                                <Box

                                    margin='2%'
                                    flexDirection='row'
                                    bottom='2%'
                                    justifyContent='space-between'>
                                    <Text fontSize={14}>
                                      .
                                    </Text>
                                    <Text fontSize={14}>
                                        .
                                    </Text>
                                </Box>
                            </Box>
                        </ScrollView>
                    </Box>
                </Box>
            </NativeBaseProvider>
        )
    }
}
export default RegistrationData;