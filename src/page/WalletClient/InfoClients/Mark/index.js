import {
    Box,
    NativeBaseProvider,
    Text,
} from 'native-base';
import React, { Component } from 'react';
import Resume from '../../../../components/Resume';



class Mark extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showInfo: '',
            data: []
        }
    }


    render() {

        return (
            <NativeBaseProvider>
                <Resume label={"Metas"}/>
            </NativeBaseProvider>
        );
    }
}
export default Mark;