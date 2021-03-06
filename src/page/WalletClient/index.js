import { NativeBaseProvider } from 'native-base';
import React, { Component } from 'react';
import CardComponent from '../../components/CardComponent';
import infoClients from './infoClient.json';

class WalletClient extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pesquisar: '',
            data:[]
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
                    screen="WalletClient"
                />
            </NativeBaseProvider>
        );
    }
}
export default WalletClient;