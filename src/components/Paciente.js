import React from "react";
import { Text, View, StyleSheet } from 'react-native';

export default function Paciente(props) {
    const { item } = props;
    const { paciente, fecha } = item;

    const formatearFecha = fecha => {
        const nuevaFecha = new Date(fecha);
        const opciones = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }

        return nuevaFecha.toLocaleDateString('es-ES', opciones);
    }

    return(
        <View>
            <Text>{ paciente }</Text>
            <Text>{ formatearFecha(fecha) }</Text>
        </View>
    )
}