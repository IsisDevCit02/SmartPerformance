import React, { Component } from 'react';
//import LinearGradient from 'react-native-linear-gradient';


import Icon from 'react-native-vector-icons/FontAwesome5';
import * as locale from '../../../locale.json'
import { Images } from '../../../assets/img';
import { colors } from '../../../assets/css/styles';
import { Dimensions, FlatList, Image, ScrollView, StatusBar, View } from 'react-native'
import { Box, Button, Center, FormControl, Heading, HStack, Input, NativeBaseProvider, Text } from 'native-base';


const { width, height } = Dimensions.get('screen')
const imageH = width * 0.5
const imageW = height * 0.25


class InfoLogin extends Component {
  constructor(props) {
    super(props)
    
    this.state ={
      image : [
        'https://kobber.com.br/wp-content/uploads/2019/11/Unidade-Kobber_Bolo-de-chocolate_Classic.png',
        'https://emporioquatroestrelas.vteximg.com.br/arquivos/ids/156178-292-292/Granola-Banana-e-Mel-Kobber-1kg.png?v=636900959168430000',
        'https://s3.amazonaws.com/produtos.vipcommerce.com.br/250x250/a49cc0d2-cde9-4254-97ba-7a98b9bae5cd.jpg',
        'https://kobber.com.br/wp-content/uploads/2018/03/mousse-limao.jpg',
      ]
    }

  }

  renderItem = ({ item }) => (
    <View style={{ width, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={{ uri: item }}
        style={
          {
            width: imageW,
            height: imageH,
            resizeMode: 'stretch',
          }
        }
      />
    </View>
  );
  render() {
    return (
      <NativeBaseProvider>
        <Box flex={1} alignItems="center" justifyContent="center" bg={colors.coberColor}>
          <Image
            source={Images.logoKobber}
            style={{
              resizeMode: 'stretch',
              width: '25%',
              height: 50,

            }}
          />
          <Center flex={1}></Center>
          <HStack bg={colors.white}
            alignItems="center"
            justifyContent="center"
            height="87%"
            width='100%'
            borderTopLeftRadius={20}
            borderRightRadius={20}
          >
            <Box safeArea p="2" marginTop='5%'>
              <Heading
                fontSize={18}
                color={colors.colorRed}
                fontWeight="bold"
                textAlign="center"
              >
                {locale.Login.Label.LOGIN}
              </Heading>
              <Heading
                mt="5"
                color={colors.colorRed}
                fontWeight="bold"
                fontSize={12}
                textAlign="center"
              >
                {locale.Login.Label.ENTRE_CREDENCIAIS}
              </Heading>
              <FormControl width='85%' alignSelf='center' marginTop='15%'>
                <Input
                  variant="underlined"
                  placeholder={locale.Login.Input.DIGITE_LOGIN}
                  borderBottomColor={colors.colorRed}
                  fontSize={12}
                  padding={4}
                  InputLeftElement={
                    <Icon
                      name='user-alt'
                      size={15}
                      color={colors.colorRed} />
                  }
                />
              </FormControl>
              <FormControl
                width='85%'
                alignSelf='center'
                marginTop='5%'
                paddingBottom='5%'>
                <Input
                  variant="underlined"
                  placeholder={locale.Login.Input.DIGITE_SENHA}
                  borderBottomColor={colors.colorRed}
                  fontSize={12}
                  padding={4}
                  InputLeftElement={
                    <Icon
                      name='lock'
                      size={15}
                      color={colors.colorRed} />
                  }
                />
              </FormControl>

              <View style={{ flex: 1, }}>
                <StatusBar hidden />
                <FlatList
                  data={this.state.image}
                  horizontal
                  pagingEnabled
                  keyExtractor={(_, index) => index.toString()}
                  renderItem={this.renderItem}
                />
              </View>
              <View style={{ paddingBottom: '10%' }}>
                <Button
                  backgroundColor={colors.colorRed}
                  borderRadius={15}
                  height={50}
                  width='85%'
                  alignSelf='center'
                  onPress={() => this.props.navigation.navigate('OnBoarding')}
                >
                  <Text
                    color={colors.white}
                    fontWeight='bold'
                    fontSize={16}>
                    {locale.Button.ENTRAR}
                  </Text>
                </Button>
                <Button
                  variant="outline"
                  style={{ borderColor: colors.colorRed }}
                  borderRadius={15}
                  height={50}
                  width='85%'
                  alignSelf='center'
                  top={5}
                  onPress={() => this.props.navigation.navigate('ForgotPassword')}
                >
                  <Text
                    color={colors.colorRed}
                    fontWeight='bold'
                    fontSize={16}>
                    {locale.Button.ESQUECI_SENHA}
                  </Text>
                </Button>
              </View>
            </Box>
          </HStack>
        </Box>
      </NativeBaseProvider >

    );
  }
}
export default InfoLogin;
