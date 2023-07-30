import React from "react";
import { Text } from 'react-native';

export default function Paciente(props) {
    const { item } = props;
    const { paciente, fecha } = item;

    return(
        <Text>{ paciente }</Text>
    )
}