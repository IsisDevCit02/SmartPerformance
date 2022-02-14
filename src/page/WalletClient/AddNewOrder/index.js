import { Box, Button, Center, FormControl, Heading, Input, NativeBaseProvider, Stack, Text } from 'native-base';
import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import * as locale from '../../../locale.json'
import { colors } from '../../../assets/css/styles';

class AddNewOrder extends Component {
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
                        <Center flex={0.05}></Center>
                        <Box flexDirection='row' alignItems='center' justifyContent='space-around'>
                            <ScrollView>
                                <Box>
                                    <Stack p={3} space={1}>
                                        <Stack>
                                            <Heading
                                                marginTop={10}
                                                size="lg"
                                                ml={4}
                                                color={colors.colorBlack}>
                                                {locale.WalletClient.Label.INFO_PEDIDO}
                                            </Heading>
                                        </Stack>
                                        <Text
                                            top='5%'
                                            fontSize={9}
                                            color={colors.colorRed}
                                            fontWeight='bold'
                                            ml={4}> {locale.WalletClient.Input.ORG_VENDA}
                                        </Text>
                                        <Input
                                            variant="underlined"
                                            borderBottomColor={colors.colorRed}
                                            fontSize={14}
                                            width='90%'
                                            fontWeight='bold'
                                            alignSelf='center'
                                            paddingTop={5}
                                        />
                                        <Text
                                            top='5%'
                                            fontSize={9}
                                            color={colors.colorRed}
                                            fontWeight='bold'
                                            ml={4}> {locale.WalletClient.Input.CODIGO_VENDA}
                                        </Text>
                                        <Input
                                            variant="underlined"
                                            borderBottomColor={colors.colorRed}
                                            fontSize={14}
                                            width='90%'
                                            fontWeight='bold'
                                            alignSelf='center'
                                            paddingTop={5}
                                        />
                                        <Text
                                            top='5%'
                                            fontSize={9}
                                            color={colors.colorRed}
                                            fontWeight='bold'
                                            ml={4}>  {locale.WalletClient.Input.CODIGO_VENDA}
                                        </Text>
                                        <Input
                                            variant="underlined"
                                            borderBottomColor={colors.colorRed}
                                            fontSize={14}
                                            width='90%'
                                            fontWeight='bold'
                                            alignSelf='center'
                                            paddingTop={5}
                                        />
                                        <Text
                                            top='5%'
                                            fontSize={9}
                                            color={colors.colorRed}
                                            fontWeight='bold'
                                            ml={4}>  {locale.WalletClient.Input.DATA_PEDIDO}
                                        </Text>
                                        <Input
                                            variant="underlined"
                                            borderBottomColor={colors.colorRed}
                                            fontSize={14}
                                            width='90%'
                                            fontWeight='bold'
                                            alignSelf='center'
                                            paddingTop={5}
                                        />
                                    </Stack>
                                    <Stack p={4} space={2}>
                                        <Stack>
                                            <Heading
                                                size="lg"
                                                ml={4}
                                                color={colors.colorBlack}
                                                paddingTop={5}
                                                paddingBottom={10}>
                                                {locale.WalletClient.Label.ORDEM_COMPRA}
                                            </Heading>
                                        </Stack>
                                        <Text
                                            top='3%'
                                            fontSize={9}
                                            color={colors.colorRed}
                                            fontWeight='bold'
                                            ml={4}> {locale.WalletClient.Input.DATA_ENTREGA}
                                        </Text>
                                        <Input
                                            variant="underlined"
                                            borderBottomColor={colors.colorRed}
                                            fontSize={14}
                                            width='90%'
                                            fontWeight='bold'
                                            alignSelf='center'
                                            paddingTop={5}
                                        />
                                        <Text
                                            top='3%'
                                            fontSize={9}
                                            color={colors.colorRed}
                                            fontWeight='bold'
                                            ml={4}> {locale.WalletClient.Input.MEIO_PAGAMENTO}
                                        </Text>
                                        <Input
                                            variant="underlined"
                                            borderBottomColor={colors.colorRed}
                                            fontSize={14}
                                            width='90%'
                                            fontWeight='bold'
                                            alignSelf='center'
                                            paddingTop={5}
                                        />
                                        <Text
                                            top='3%'
                                            fontSize={9}
                                            color={colors.colorRed}
                                            fontWeight='bold'
                                            ml={4}> {locale.WalletClient.Input.PRAZO}
                                        </Text>
                                        <Input
                                            variant="underlined"
                                            borderBottomColor={colors.colorRed}
                                            fontSize={14}
                                            width='90%'
                                            fontWeight='bold'
                                            alignSelf='center'
                                            paddingTop={5}
                                        />
                                        <Text
                                            top='3%'
                                            fontSize={9}
                                            color={colors.colorRed}
                                            fontWeight='bold'
                                            ml={4}> {locale.WalletClient.Input.PRONTA_ENTREGA}
                                        </Text>
                                        <Input
                                            variant="underlined"
                                            borderBottomColor={colors.colorRed}
                                            fontSize={14}
                                            width='90%'
                                            fontWeight='bold'
                                            alignSelf='center'
                                            paddingTop={5}
                                        />
                                        <Text
                                            top='3%'
                                            fontSize={9}
                                            color={colors.colorRed}
                                            fontWeight='bold'
                                            ml={4}> {locale.WalletClient.Input.TABELA_PRECO}
                                        </Text>
                                        <Input
                                            variant="underlined"
                                            borderBottomColor={colors.colorRed}
                                            fontSize={14}
                                            width='90%'
                                            fontWeight='bold'
                                            alignSelf='center'
                                            paddingTop={5}
                                        />
                                        <Text
                                            top='3%'
                                            fontSize={9}
                                            color={colors.colorRed}
                                            fontWeight='bold'
                                            ml={4}> {locale.WalletClient.Input.ORCAMENTO}
                                        </Text>
                                        <Input
                                            variant="underlined"
                                            borderBottomColor={colors.colorRed}
                                            fontSize={14}
                                            width='90%'
                                            fontWeight='bold'
                                            alignSelf='center'
                                            paddingTop={5}
                                        />
                                        <Stack>
                                            <Heading
                                                size="lg"
                                                ml={4}
                                                color={colors.colorBlack}
                                                paddingTop={5}
                                                paddingBottom={10}>
                                                {locale.WalletClient.Label.PRODUTOS}
                                            </Heading>
                                        </Stack>
                                    </Stack>
                                    <View style={{ marginBottom: '30%', bottom: '3%' }}>
                                        <Button
                                            variant="outline"
                                            style={{ borderColor: colors.colorRed }}
                                            borderRadius={15}
                                            height={50}
                                            width='90%'
                                            alignSelf='center'
                                            onPress={() => this.props.navigation.navigate('InsertProduct')}
                                        >
                                            <Text
                                                color={colors.colorRed}
                                                fontWeight='bold'
                                                fontSize={16}>
                                                {locale.Button.INSERIR_PRODUTO}
                                            </Text>
                                        </Button>
                                    </View>
                                </Box>
                            </ScrollView>
                        </Box>
                    </Box>
                </Box>
            </NativeBaseProvider>

        );
    }
}
export default AddNewOrder;