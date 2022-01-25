import React from 'react';
import {TouchableOpacity } from 'react-native';
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
const Stack = createNativeStackNavigator()
export default function SmartPerformance() {
  return (
    <NavigationContainer style={styles.contentTop}>
      <Stack.Navigator>
        <Stack.Screen name='Login'
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="InfoLogin"
          component={InfoLogin}
          options={{
            headerShown: false,
        
          }} />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerShown: false,
        
          }}
        />
        <Stack.Screen
          name="ConfirmEmail"
          component={ConfirmEmail}
          options={{
            headerShown: false,
        
          }}
        />
        <Stack.Screen
          name="NewPassword"
          component={NewPassword}
          options={{
            headerShown: false,
        
          }}
        />
        <Stack.Screen
          name="Success"
          component={Success}
          options={{
            headerShown: false,
        
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}