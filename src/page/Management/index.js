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
  View
} from 'native-base';
import { colors } from '../../assets/css/styles';
import React from 'react';
import { Icones } from '../../assets/icons';
import * as locale from '../../locale.json';
import { Image, TouchableOpacity } from 'react-native';



export default function Management({ navigation }) {
  return (
    <NativeBaseProvider>
      <Box flex={0}  bg={colors.colorRed}>
        
        <Box bg={colors.white}
          height="100%"
          width='100%'
          borderTopLeftRadius={25}
          borderTopRightRadius={25} >
          <Box>
            <Center flex={0}></Center>
            <Box button
              top="8%"
              width="90%"
              height="25%"
              flexDirection="row"
              allignItems="center"
              alignSelf="center"
              justifyContent="center"
              bg={colors.colorOrange}
              borderRadius={25}  >
              
               
              <Text 
              
              color={colors.white} 
              fontSize="md"onPress={() => navigation.navigate('SalesDetail')} >{locale.Management.INFORMACOES}</Text>

            </Box>

            <Box button
              top="8%"
              width="90%"
              height="25%"
              flexDirection="row"
              
              
              
              

                >
              
               
              <Text 
              
              color={colors.white} 
              fontSize="md"onPress={() => navigation.navigate('SalesDetail')} >{locale.Management.INFORMACOES}</Text>

              <Box
              width="50%"
              height="100%"
              bg={colors.colorOrange}
              borderRadius={25}><Text>hello</Text></Box>
              <Box
              bg={colors.colorOrange}
              borderRadius={25}
              ><Text>hello</Text></Box>


            </Box>
            
            
          </Box>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}

