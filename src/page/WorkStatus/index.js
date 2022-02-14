import {
    Box,
    Button,
    Center,
    FormControl,
    Input,
    Modal,
    NativeBaseProvider,
    Switch,
    Text
} from 'native-base';
import React, { Component } from 'react';
import { colors } from '../../assets/css/styles';
import * as locale from '../../locale.json';
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'

class WorkStatus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false
        }
    }
    render() {
        return (
            <NativeBaseProvider>
                <Box flex={1} alignItems="center" justifyContent="center" bg={colors.colorRed}>
                    <Modal
                        isOpen={this.state.isVisible}
                        onClose={() => this.setState({ isVisible: false })}>
                        <Modal.Content maxWidth="90%" width='80%' height='60%'>
                            <Modal.CloseButton />
                            <Box
                                alignSelf='center'
                                padding='5%'>
                                <Text
                                    color={colors.red}
                                    fontSize={16}
                                >
                                    {locale.CertificateMedical.Label.INSERIR_ATESTADO}
                                </Text>
                            </Box>

                            <Modal.Body>
                                <Box
                                    width='90%'
                                    marginBottom='5%'
                                    backgroundColor={colors.white}
                                    style={{
                                        shadowColor: colors.colorGray,
                                        shadowOpacity: 0.50,
                                        shadowRadius: 3,
                                        shadowOffset: { width: -2, height: 4 },
                                        elevation: 20
                                    }}
                                    borderColor={colors.blueStrong}
                                    borderWidth={1}
                                    paddingY={15}
                                    borderRadius={10}
                                    alignSelf='center'
                                >
                                    <Box flexDirection='row' justifyContent='space-around'>
                                        <Box>
                                            <Text
                                                fontSize={16}
                                                fontWeight='500'
                                                color={colors.blueStrong}
                                            >
                                                {locale.CertificateMedical.Label.INICIO_ATESTADO}
                                            </Text>
                                            <Text color={colors.colorGrayStrong}>
                                                14/12/2021
                                            </Text>
                                        </Box>
                                        <Feather
                                            name="calendar"
                                            size={40}
                                            style={{
                                                color: colors.blueStrong
                                            }}
                                        />
                                    </Box>
                                </Box>
                                <Box
                                    width='90%'
                                    marginBottom='5%'
                                    backgroundColor={colors.white}
                                    style={{
                                        shadowColor: colors.colorGray,
                                        shadowOpacity: 0.50,
                                        shadowRadius: 3,
                                        shadowOffset: { width: -2, height: 4 },
                                        elevation: 20
                                    }}
                                    borderColor={colors.blueStrong}
                                    borderWidth={1}
                                    paddingY={15}
                                    borderRadius={10}
                                    alignSelf='center'
                                >
                                    <Box flexDirection='row' justifyContent='space-around'>
                                        <Box>
                                            <Text
                                                fontSize={16}
                                                fontWeight='500'
                                                color={colors.blueStrong}
                                            >
                                                {locale.CertificateMedical.Label.FIM_ATESTADO}
                                            </Text>
                                            <Text color={colors.colorGrayStrong}>

                                            </Text>
                                        </Box>
                                        <Feather
                                            name="calendar"
                                            size={40}
                                            style={{
                                                color: colors.blueStrong
                                            }}
                                        />
                                    </Box>
                                </Box>
                                <Box
                                    width='90%'
                                    marginBottom='5%'
                                    backgroundColor={colors.white}
                                    style={{
                                        shadowColor: colors.colorGray,
                                        shadowOpacity: 0.50,
                                        shadowRadius: 3,
                                        shadowOffset: { width: -2, height: 4 },
                                        elevation: 20
                                    }}
                                    borderColor={colors.blueStrong}
                                    borderWidth={1}
                                    paddingY={15}
                                    borderRadius={10}
                                    alignSelf='center'
                                >
                                    <Box flexDirection='row' justifyContent='space-around'>
                                        <Box>
                                            <Text
                                                fontSize={16}
                                                fontWeight='500'
                                                color={colors.blueStrong}
                                            >
                                                {locale.CertificateMedical.Label.CID_MEDICO}
                                            </Text>
                                            <Text color={colors.colorGrayStrong}>

                                            </Text>
                                        </Box>
                                        <Feather
                                            name="file-text"
                                            size={40}
                                            style={{
                                                color: colors.blueStrong
                                            }}
                                        />
                                    </Box>
                                </Box>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button.Group space={2}>
                                    <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                                        setShowModal(false);
                                    }}>
                                        Cancel
                                    </Button>
                                    <Button onPress={() => {
                                        setShowModal(false);
                                    }}>
                                        Save
                                    </Button>
                                </Button.Group>
                            </Modal.Footer>
                        </Modal.Content>
                    </Modal>

                    <Center flex={1}></Center>
                    <Box bg={colors.white}
                        height="95%"
                        width='100%'
                        borderTopLeftRadius={20}
                        borderRightRadius={20}
                    >
                        <Box safeArea
                            p="2"
                            marginTop='5%'
                            alignSelf='center'
                            marginTop='10%'
                        >
                            <Box flexDirection='row' margin='3%' alignSelf='center'>
                                <Text fontWeight='600' fontSize={18} width='70%'>{locale.WorkStatus.Label.TRABALHANDO}</Text>
                                <Switch
                                    size="sm"
                                    offTrackColor={colors.colorRed}
                                />
                            </Box>
                            <Box flexDirection='row' margin='3%' alignSelf='center'>
                                <Text fontWeight='600' fontSize={18} width='70%'>{locale.WorkStatus.Label.AFASTADO}</Text>
                                <Switch
                                    size="sm"
                                    offTrackColor={colors.colorRed}
                                    onChange={() => this.setState({ isVisible: true })}
                                    isChecked={this.state.isVisible}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </NativeBaseProvider>
        );
    }
}
export default WorkStatus;