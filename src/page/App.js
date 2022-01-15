
import React from 'react';
import { Text, View } from 'react-native';
import * as locale from '../locale.json';
import Icon from 'react-native-vector-icons/AntDesign';

export default function SmartPerformance() {
 return (
   <View style={{marginTop:'50%', alignSelf:'center'}}>
     <Text>{locale.Home.Titles.BEM_VINDO}</Text>
     <Icon name='book' size={50}/>
   </View >
  
  );
}