import React from 'react';
//import LinearGradient from 'react-native-linear-gradient';
import {
  NativeBaseProvider,
  Box,
  Image,
  HStack,
  Center,
  Button,
  Text
} from 'native-base';

import * as locale from '../../locale.json';

import { colors } from "../../assets/css/styles";
import { Images } from '../../assets/img/index';


export default function Login({ navigation }) {
  return (
    // <LinearGradient colors={[colors.homeColor, colors.colorGradient]} style={styles.contentTop}>
    <NativeBaseProvider >
      <Box flex={1} alignItems="center" justifyContent="center" bg={colors.coberColor}>
        <Image
          source={Images.logoKobber}
          alt="Alternate Text"
          resizeMode={"stretch"}
          width={250}
          height={120}
          marginTop='70%'
        />
        <Center flex={1}></Center>
        <HStack bg={colors.white}
          alignItems="center"
          justifyContent="center"
          height={150}
          width='100%'
          borderTopLeftRadius={20}
          borderRightRadius={20}
        >
          <Button
            bg={colors.colorRed}
            width="85%"
            height={50}
            borderRadius={15}
            onPress={() => navigation.navigate('InfoLogin')}>
            <Text
              color={colors.white}
              fontSize={18}
              fontWeight="bold">{locale.Login.Button.ENTRAR}</Text>
          </Button>
        </HStack>
      </Box>


    </NativeBaseProvider>
    // </LinearGradient>
  );
}