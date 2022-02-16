import {
  Avatar,
  Box,
  Center,
  Container,
  Divider,
  Heading,
  Icon,
  Input,
  NativeBaseProvider,
  Row,
  Text,
  View
} from 'native-base';
import { colors } from '../../../assets/css/styles';
import * as locale from '../../../locale.json';
import React from 'react';
import { ColorPropType } from 'react-native';

export default function SkuFoco({ navigation }) {
  return (
    <NativeBaseProvider>
      <Box flex={1} alignItems="center" justifyContent="center" bg={colors.colorRed}>
        <Center flex={1}></Center>
        <Box bg={colors.white}
          height="100%"
          width='100%'
          borderTopLeftRadius={25}
          borderTopRightRadius={25} >

          <View
            width="90%"
            height="20%"
            bg={colors.white}
            marginTop={20}
            borderRadius={10}
            alignSelf="center"
            flexDirection="row"
            justifyContent="center"
            borderWidth={1}
            borderColor={colors.colorGray}
          >
            <Text
              //alignSelf="center"
              color={colors.colorBlack}
              textAlign='center'
              fontWeight={800}
              fontSize="md">Granola Star Fruits</Text>
              
          </View>
          <View
          width="90%"
          height="40%"
          bg={colors.white}
         
          borderBottomRadius={10}
          alignSelf="center"
          flexDirection="row"
          justifyContent="center"
          borderWidth={1}
          borderColor={colors.colorGray}
          >
            <View
            width="30%"
            height="10%"
            bg={colors.colorRed}
            margin={3}
            borderRadius={10}
            alignSelf="flex-end"
            flexDirection="row"
            justifyContent="center"
          >
            <Text
              alignSelf="center"
              color={colors.white}
              textAlign='center'
              fontWeight={800}
              fontSize="md">Visão geral</Text>
          </View>
          </View>
          
      </Box>
    </Box>
    </NativeBaseProvider >
  );
}