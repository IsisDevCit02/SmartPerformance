import {
  Avatar,
  Box,
  Center,
  Divider,
  Heading,
  Icon,
  Input,
  NativeBaseProvider,
  Row,
  Text,
  View,
  Image
} from 'native-base';
import { colors } from '../../assets/css/styles';
import { Icones } from '../../assets/icons/index';
import React from 'react';


import * as locale from '../../locale.json';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'react-native-svg';

export default function Management({ navigation }) {
  return (
    <NativeBaseProvider>
      <Box flex={0} bg={colors.colorRed}>

        <Box bg={colors.white}
          height="100%"
          width='100%'
          borderTopLeftRadius={25}
          borderTopRightRadius={25} >
          <Box>
            <Center flex={0}></Center>

           
            <Box button

              width="90%"
              height="25%"
              margin={5}
              flexDirection="row"
              allignItems="center"
              alignSelf="center"
              justifyContent="space-around"
              bg={colors.colorOrange}
              borderRadius={25}  >

              <Image
                source={Icones.grafico}
                resizeMode={"stretch"}
                width={65}
                height={90}
                tintColor={colors.white}
                alignSelf='center'
              />

              <Text
                alignSelf="center"

                color={colors.white}
                textAlign='center'
                
                fontSize="md" onPress={() => navigation.navigate('SalesDetail')} >{locale.Management.INFORMACOES}</Text>

            </Box>
            
            <Box

              width="90%"
              height="25%"
              margin={5}
              flexDirection="row"
              allignItems="center"
              alignSelf="center"
              justifyContent="space-between"
            >
              <Box
                bg={colors.colorOrange}
                borderRadius={15}
                width="45%"
                allignItems="center"
                justifyContent="center"

              >
                <Image
                  source={Icones.target}
                  resizeMode={"stretch"}
                  width={90}
                  height={90}
                  tintColor={colors.white}
                  alignSelf='center'
                />
                <Text
                  color={colors.white}
                  textAlign='center'
                  fontSize="md" onPress={() => navigation.navigate('SkuFoco')} >{locale.Management.SKU_FOCO}</Text>
              </Box>
              <Box
                bg={colors.colorOrange}
                borderRadius={15}
                width="45%"
                allignItems="center"
                justifyContent="center"
              >
                <Image
                  source={Icones.tree}
                  resizeMode={"stretch"}
                  width={90}
                  height={90}
                  tintColor={colors.white}
                  alignSelf='center'
                />
                <Text
                  color={colors.white}
                  textAlign='center'
                  fontSize="md" onPress={() => navigation.navigate('ProductivityTree')} >{locale.Management.ARVORE_PRODUTIVIDADE}</Text>
              </Box>
            </Box>
            <Box button

              width="90%"
              height="25%"
              flexDirection="row"
              allignItems="center"
              alignSelf="center"
              justifyContent="space-between"
              margin={5}
            >

              <Box
                bg={colors.colorOrange}
                borderRadius={15}
                width="45%"
                allignItems="center"
                justifyContent="center"
              >
                <Image
                  source={Icones.clipboard}
                  resizeMode={"stretch"}
                  width={65}
                  height={90}
                  tintColor={colors.white}
                  alignSelf='center'
                />

                <Text
                  color={colors.white}
                  textAlign='center'
                  fontSize="md" onPress={() => navigation.navigate('Orders')} >{locale.Management.PEDIDOS}</Text>
              </Box>
              <Box
                bg={colors.colorOrange}
                borderRadius={15}
                width="45%"
                allignItems="center"
                justifyContent="center"
              >

                <Image
                  source={Icones.stock}
                  resizeMode={"stretch"}
                  width={90}
                  height={90}
                  tintColor={colors.white}
                  alignSelf='center'
                />

                <Text
                  alignContent="center"
                  textAlign='center'
                  color={colors.white}
                  fontSize="md" onPress={() => navigation.navigate('Stock')} >{locale.Management.ESTOQUE}</Text>


              </Box>

            </Box>

          </Box>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}

