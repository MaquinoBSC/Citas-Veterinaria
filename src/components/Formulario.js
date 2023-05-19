import React from 'react';
import { Modal, Text, Button, SafeAreaView } from 'react-native';

export default function Formulario(props){
    const { modalVisible } = props;

    return (
        <Modal animationType='fade' visible={ modalVisible }>
            <SafeAreaView>
                
            </SafeAreaView>
        </Modal>
    )
}