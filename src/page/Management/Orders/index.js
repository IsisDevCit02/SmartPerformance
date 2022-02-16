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


  state = {
    slogan: 'chegou aqui otário'
  }

  alternar = () => {

    this.setState({
      slogan : this.state.slogan ? '' : 'chegou aqui otário'
    })
  }
  export default function Orders({ navigation }) {
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

            
          </Box>
        </Box>
      </NativeBaseProvider>
    );
  }