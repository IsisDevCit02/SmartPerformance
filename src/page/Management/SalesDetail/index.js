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
                  
                  <Text color = {colors.colorRed} >{locale.SalesDetail.DIAS_UTEIS}</Text> 
                  <Text color = {colors.colorRed} >{locale.SalesDetail.DIAS_CORRIDOS}</Text> 
                  <Text color = {colors.colorRed} >{locale.SalesDetail.FALTAM}</Text> 
                  
                  

                </Container>
            
          </Box>
        </Box>
      </NativeBaseProvider>
    );
  }