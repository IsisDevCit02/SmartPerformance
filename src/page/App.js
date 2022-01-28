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
      </Stack.Navigator>
    </NavigationContainer>

  );
}