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
  import { colors } from '../../../assets/css/styles';
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
                <Text>Hello World</Text>
            
          </Box>
        </Box>
      </NativeBaseProvider>
    );
  }