import React from "react";
import { Text, SafeAreaView } from 'react-native';

export default function InformacionPaciente(props) {
    const { paciente } = props;
    console.log(paciente);

    return (
        <SafeAreaView>
            <Text>Informa8icón del Paciente</Text>
            <Text>{ paciente.paciente }</Text>
        </SafeAreaView>
    )
} 