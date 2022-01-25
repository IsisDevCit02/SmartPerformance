import React from 'react';
import {TouchableOpacity } from 'react-native';
import styles from './styles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

 
import { colors } from '../assets/css/styles';
import Login from './Login/index';
import InfoLogin from './Login/InfoLogin/index';

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
        
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}