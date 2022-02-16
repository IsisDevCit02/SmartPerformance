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


export default function SalesDetail({ navigation }) {
  return (
    <NativeBaseProvider>
      <Box flex={1} alignItems="center" justifyContent="center" bg={colors.colorRed}>
        <Center flex={1}></Center>
        <Box bg={colors.white}
          height="100%"
          width='100%'
          borderTopLeftRadius={25}
          borderTopRightRadius={25} >

          <Container
            flexDirection="row"
            alignItems="center"
            justifyContent="space-around"
            margin={5}
          >
            <Text color={colors.colorRed} >{locale.SalesDetail.DIAS_UTEIS}</Text>
            <Text color={colors.colorBlack} >20</Text>
            <Text color={colors.colorRed} >{locale.SalesDetail.DIAS_CORRIDOS}</Text>
            <Text color={colors.colorBlack} >07</Text>
            <Text color={colors.colorRed} >{locale.SalesDetail.FALTAM}</Text>
            <Text color={colors.colorBlack} >13</Text>
          </Container>
          <View
            width="90%"
            height="10%"
            bg={colors.colorRed}
            marginTop={5}
            borderRadius={10}
            alignSelf="center"
            flexDirection="row"
            justifyContent="flex-start"
          >
            <Text
              alignSelf="center"
              color={colors.white}
              textAlign='center'
              fontWeight={800}
              fontSize="md">Allan Jack</Text>
          </View>
          <View
          width="90%"
          height="60%"
          borderWidth={3}
          borderBottomRadius={15}
          borderColor={colors.colorGray}
          alignSelf="center"
          justifyContent="flex-start"
          >
            <View
            width="90%"
            height="85%"
            borderBottomWidth={0.20}
            borderBottomColor={colors.colorGray}
            alignSelf="center"
            >
            <View>
            <Text color={colors.colorRed}fontWeight={600} >Volume</Text>
            </View>
            <View>
            <Text color={colors.colorRed} fontWeight={600}>Faturamento</Text>
            </View>
            <View>
            <Text color={colors.colorRed} fontWeight={600}>Clientes</Text>
            </View>
            </View>
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
    </NativeBaseProvider>
  );
}