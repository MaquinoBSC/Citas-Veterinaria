import React from "react";
import { Text, SafeAreaView, Pressable, View, StyleSheet } from 'react-native';

export default function InformacionPaciente(props) {
    const { paciente, setModalPaciente } = props;

    return (
        <SafeAreaView style={ styles.contenedor }>
            <Text style={ styles.titulo }>
                Información <Text style={ styles.tituloBold }>Paciente</Text>
            </Text>
            <View>
                <Pressable 
                    style={ styles.btnCerrar }
                    onLongPress={ () => setModalPaciente(false) }
                >
                    <Text style={ styles.btnCerrarTexto }>Cerrar X</Text>
                </Pressable>
            </View>
            <Text>{ paciente.paciente }</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#f59e8b',
        flex: 1,
    },

    titulo: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 30,
        color: '#fff',
    },

    tituloBold: {
        fontWeight: 900
    },

    btnCerrar: {
        marginVertical: 15,
        backgroundColor: '#e06900',
        marginHorizontal: 30,
        padding: 10,
        borderRadius: 10,
    },

    btnCerrarTexto: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 15,
        textTransform: 'uppercase'
    },
})