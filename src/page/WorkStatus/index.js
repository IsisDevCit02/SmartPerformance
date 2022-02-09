import { Box, Button, Center, FormControl, Input, Modal, NativeBaseProvider, Switch, Text } from 'native-base';
import React, { useState } from 'react';
import { View } from 'react-native';
import { colors } from '../../assets/css/styles';
import * as locale from '../../locale.json';
export default function WorkStatus() {
    [isVisible, setIsVisible] = useState(false)
    return (
        <NativeBaseProvider>
            <Box flex={1} alignItems="center" justifyContent="center" bg={colors.colorRed}>
                <Modal isOpen={isVisible} onClose={() => setIsVisible(false)}>
                    <Modal.Content maxWidth="400px">
                        <Modal.CloseButton />
                        <Modal.Header>Inserir atestado</Modal.Header>
                        <Modal.Body>
                            <FormControl>
                                <FormControl.Label>Name</FormControl.Label>
                                <Input />
                            </FormControl>
                            <FormControl mt="3">
                                <FormControl.Label>Email</FormControl.Label>
                                <Input />
                            </FormControl>
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
                            <Text color={colors.blue} fontSize={18} width='70%'>{locale.WorkStatus.Label.TRABALHANDO}</Text>
                            <Switch
                                size="sm"
                                offTrackColor={colors.blue}
                            />
                        </Box>
                        <Box flexDirection='row' margin='3%' alignSelf='center'>
                            <Text color={colors.blue} fontSize={18} width='70%'>{locale.WorkStatus.Label.AFASTADO}</Text>
                            <Switch
                                size="sm"
                                offTrackColor={colors.blue}
                                onChange={() => setIsVisible(true)}
                                isChecked={isVisible}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </NativeBaseProvider>
    );
}