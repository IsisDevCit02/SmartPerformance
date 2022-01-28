import { Box, Button, FormControl, Heading, Input, NativeBaseProvider, Stack, Text } from 'native-base';
import React from 'react';
import { ScrollView, View } from 'react-native';
import * as locale from '../../../locale.json'
import { colors } from '../../../assets/css/styles';

export default function EditProfile({ navigation }) {
    return (
        <NativeBaseProvider>
            <ScrollView>
                <Box>
                    <Stack p={3} space={1}>
                        <Stack>
                            <Heading
                                marginTop={10}
                                size="lg"
                                ml={4}
                                color={colors.colorBlack}>
                                {locale.Profile.Label.DADOS_PESSOAIS}
                            </Heading>
                        </Stack>
                        <Text
                            top='5%'
                            fontSize={9}
                            color={colors.colorRed}
                            fontWeight='bold'
                            ml={4}> {locale.Profile.Input.NOME}
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
                            ml={4}> {locale.Profile.Input.CPF}
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
                            ml={4}> {locale.Profile.Input.DATA_NASCIMENTO}
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
                            ml={4}> {locale.Profile.Input.SEXO}
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
                                color={colors.colorRed}
                                paddingTop={5}
                                paddingBottom={10}>
                                {locale.Profile.Label.ENDERECO}
                            </Heading>
                        </Stack>
                        <Text
                            top='3%'
                            fontSize={9}
                            color={colors.colorRed}
                            fontWeight='bold'
                            ml={4}> {locale.Profile.Input.CEP}
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
                            ml={4}> {locale.Profile.Input.CIDADE}
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
                            ml={4}> {locale.Profile.Input.UF}
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
                            ml={4}> {locale.Profile.Input.BAIRRO}
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
                            ml={4}> {locale.Profile.Input.CIDADE}
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
                            ml={4}> {locale.Profile.Input.MUNICIPIO}
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
                            ml={4}> {locale.Profile.Input.ENDEREÇO}
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
                            ml={4}> {locale.Profile.Input.NUMERO}
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
                    <View style={{ marginBottom: '30%' }}>
                        <Button
                            backgroundColor={colors.colorRed}
                            borderRadius={15}
                            height={50}
                            width='90%'
                            alignSelf='center'
                            top='10%'
                            onPress={() => navigation.navigate('Perfil')}
                        >
                            <Text
                                color={colors.white}
                                fontWeight='bold'
                                fontSize={16}>
                                {locale.Button.SALVAR}
                            </Text>
                        </Button>
                        <Button
                            variant="outline"
                            style={{ borderColor: colors.colorRed }}
                            borderRadius={15}
                            height={50}
                            width='90%'
                            alignSelf='center'
                            top='15%'
                            onPress={() => navigation.navigate('Perfil')}
                        >
                            <Text
                                color={colors.colorRed}
                                fontWeight='bold'
                                fontSize={16}>
                                {locale.Button.CANCELAR}
                            </Text>
                        </Button>
                    </View>
                </Box>
            </ScrollView>
        </NativeBaseProvider>
    );
}