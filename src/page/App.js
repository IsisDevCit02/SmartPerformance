import React from 'react';
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
import AddNewRequest from './WalletClient/AddNewRequest/index'
import Management from './Management';
import { Center } from 'native-base';
import SalesDetail from './Management/SalesDetail';
import Orders from './Management/Orders';
import ProductivityTree from './Management/ProductivityTree';
import SkuFoco from './Management/SkuFoco';
import Stock from './Management/Stock';


const Stack = createNativeStackNavigator()
export default function SmartPerformance() {
  return (
    <NavigationContainer style={styles.contentTop}>
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
          name="AddNewRequest"
          component={AddNewRequest}
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
          name="Management"
          component={Management}
          options={{
            title: 'Gestão',
            
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: colors.colorRed,
              
            },
            headerTintColor: colors.white,
            headerShadowVisible: false
          }}
        />
         <Stack.Screen
          name="SalesDetail"
          component={SalesDetail}
          options={{
            title: 'Gestão',
            
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: colors.colorRed,
              
            },
            headerTintColor: colors.white,
            headerShadowVisible: false
          }}
        />
         <Stack.Screen
          name="Orders"
          component={Orders}
          options={{
            title: 'Gestão',
            
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: colors.colorRed,
              
            },
            headerTintColor: colors.white,
            headerShadowVisible: false
          }}
        />
         <Stack.Screen
          name="ProductivityTree"
          component={ProductivityTree}
          options={{
            title: 'Gestão',
            
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: colors.colorRed,
              
            },
            headerTintColor: colors.white,
            headerShadowVisible: false
          }}
        />
         <Stack.Screen
          name="SkuFoco"
          component={SkuFoco}
          options={{
            title: 'Gestão',
            
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: colors.colorRed,
              
            },
            headerTintColor: colors.white,
            headerShadowVisible: false
          }}
        />
         <Stack.Screen
          name="Stock"
          component={Stock}
          options={{
            title: 'Gestão',
            
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