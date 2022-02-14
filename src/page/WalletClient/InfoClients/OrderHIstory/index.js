import {
    Box,
    Center,
    Avatar,
    Input,
    NativeBaseProvider,
    Text,
    Divider,
    ScrollView
} from 'native-base';
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Filter from 'react-native-vector-icons/FontAwesome'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from '../../../../assets/css/styles';
import * as locale from '../../../../locale.json';
import CardComponent from '../../../../components/CardComponent';
import infoClients from './infoClient.json';

class OrderHistory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }
    componentDidMount = () => {
        this.setState({ data: infoClients })
    }


    render() {
        return (
            <NativeBaseProvider>
                <CardComponent
                    data={this.state.data}
                    screen="OrderHistory"
                />
            </NativeBaseProvider >
        )
    }
}
export default OrderHistory;