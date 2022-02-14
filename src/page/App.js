import React, { Component } from 'react';
import styles from './styles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { colors } from '../assets/css/styles';

import Login from './Login/index';
import InfoLogin from './Login/InfoLogin/index';
import ForgotPassword from './Login/ForgotPassword/index';
import ConfirmEmail from './Login/ForgotPassword/ConfirmEmail/index';
import NewPassword from './Login/ForgotPassword/NewPassword/index';
import Success from './Login/ForgotPassword/Success/index';
import Perfil from './Profile/index';
import EditProfile from './Profile/EditProfile/index';
import OnBoarding from './OnBoarding/index';
import WorkStatus from './WorkStatus/index';
import WalletClient from './WalletClient/index';
import InfoClients from './WalletClient/InfoClients';
import AddNewOrder from './WalletClient/AddNewOrder/index'
import ScriptDay from './ScriptDay/index';
import RegistrationData from './WalletClient/InfoClients/RegistrationData/index';
import OrderHistory from './WalletClient/InfoClients/OrderHIstory/index';
import Mark from './WalletClient/InfoClients/Mark/index';
import InsertProduct from './WalletClient/AddNewOrder/InsertProduct/index';
import Mission from './WalletClient/InfoClients/Mission/index'

import CardComponent from '../components/CardComponent';
import Resume from '../components/Resume';
import { navigationRef } from '../RootNaviation';


const Stack = createNativeStackNavigator()

class Kobber extends Component {
  render() {
    return (
      <NavigationContainer style={styles.contentTop}  ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen name='Login'
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="InfoLogin"
            component={InfoLogin}
            options={{
              title: null,
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: colors.coberColor,
              },
              headerTintColor: colors.white,
              headerShadowVisible: false
            }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{
              title: null,
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: colors.coberColor,
              },
              headerTintColor: colors.white,
              headerShadowVisible: false
            }}
          />
          <Stack.Screen
            name="ConfirmEmail"
            component={ConfirmEmail}
            options={{
              title: null,
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: colors.coberColor,
              },
              headerTintColor: colors.white,
              headerShadowVisible: false
            }}
          />
          <Stack.Screen
            name="NewPassword"
            component={NewPassword}
            options={{
              title: null,
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: colors.coberColor,
              },
              headerTintColor: colors.white,
              headerShadowVisible: false
            }}
          />
          <Stack.Screen
            name="Success"
            component={Success}
            options={{
              title: null,
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: colors.coberColor,
              },
              headerTintColor: colors.white,
              headerShadowVisible: false
            }}
          />
          <Stack.Screen
            name="Perfil"
            component={Perfil}
            options={{
              title: null,
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: colors.colorRed,
              },
              headerTintColor: colors.white,
              headerShadowVisible: false
            }}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{
              title: null,
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: colors.colorRed,
              },
              headerTintColor: colors.white,
              headerShadowVisible: false
            }}
          />
          <Stack.Screen
            name="OnBoarding"
            component={OnBoarding}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="WorkStatus"
            component={WorkStatus}
            options={{
              title: 'Status de trabalho',

              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: colors.colorRed,
              },
              headerTintColor: colors.white,
              headerShadowVisible: false
            }}
          />
          <Stack.Screen
            name="WalletClient"
            component={WalletClient}
            options={{
              title: 'Clientes',

              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: colors.colorRed,
              },
              headerTintColor: colors.white,
              headerShadowVisible: false
            }}
          />
          <Stack.Screen
            name="InfoClients"
            component={InfoClients}
            options={{
              title: 'Clientes',

              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: colors.colorRed,
              },
              headerTintColor: colors.white,
              headerShadowVisible: false
            }}
          />
          <Stack.Screen
            name="AddNewOrder"
            component={AddNewOrder}
            options={{
              title: 'Clientes',

              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: colors.colorRed,
              },
              headerTintColor: colors.white,
              headerShadowVisible: false
            }}
          />
          <Stack.Screen
            name="ScriptDay"
            component={ScriptDay}
            options={{
              title: 'Roteiro do dia',

              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: colors.colorRed,
              },
              headerTintColor: colors.white,
              headerShadowVisible: false
            }}
          />
          <Stack.Screen
            name="RegistrationData"
            component={RegistrationData}
            options={{
              title: 'Clientes',

              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: colors.colorRed,
              },
              headerTintColor: colors.white,
              headerShadowVisible: false
            }}
          />
          <Stack.Screen
            name="OrderHistory"
            component={OrderHistory}
            options={{
              title: 'Clientes',

              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: colors.colorRed,
              },
              headerTintColor: colors.white,
              headerShadowVisible: false
            }}
          />
          <Stack.Screen
            name="Mark"
            component={Mark}
            options={{
              title: 'Clientes',

              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: colors.colorRed,
              },
              headerTintColor: colors.white,
              headerShadowVisible: false
            }}
          />
          <Stack.Screen
            name="InsertProduct"
            component={InsertProduct}
            options={{
              title: 'Clientes',

              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: colors.colorRed,
              },
              headerTintColor: colors.white,
              headerShadowVisible: false
            }}
          />
          <Stack.Screen
            name="Mission"
            component={Mission}
            options={{
              title: 'Clientes',

              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: colors.colorRed,
              },
              headerTintColor: colors.white,
              headerShadowVisible: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default Kobber;