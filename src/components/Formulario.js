import React, { useState } from 'react';
import { Modal, Text } from 'react-native';

export const Formulario = () => {

    return (
        <Modal animationType='fade' visible={ modalVisible }>
            <Text>Desde Modal</Text>
        </Modal>
    )
}

export default Formulario;