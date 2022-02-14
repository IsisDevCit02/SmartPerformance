import { NativeBaseProvider } from 'native-base';
import React, { Component } from 'react';
import CardComponent from '../../components/CardComponent';
import infoClients from './infoClient.json';


class ScriptDay extends Component {
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
                    screen="ScriptDay"
                />
            </NativeBaseProvider>
        )
    }
}

export default ScriptDay;