import React from "react";
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function Paciente(props) {
    const { item, setModalVisible, pacienteEditar, pacienteEliminar } = props;
    const { paciente, fecha, id } = item;

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
        <View style={ styles.contenedor }>
            <Text style={ styles.label }>Paciente:</Text>
            <Text style={ styles.texto }>{ paciente }</Text>
            <Text style={ styles.fecha }>{ formatearFecha(fecha) }</Text>
            <View style={ styles.contenedorBotones }>
                <Pressable 
                    style={ [styles.btn, styles.btnEditar] }
                    onLongPress={ () => {
                        pacienteEditar(item.id);
                        setModalVisible(true);
                    }}
                >
                    <Text style={ styles.btnTexto }>Editar</Text>
                </Pressable>
                <Pressable 
                    style={ [styles.btn, styles.btnEliminar] }
                    onLongPress={ () => pacienteEliminar(id) }
                >
                    <Text style={ styles.btnTexto }>Eliminar</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#fff',
        padding: 20,
        borderBottomColor: '#94a3d8',
        borderBottomWidth: 1
    },

    label: {
        color: '#374151',
        textTransform: 'uppercase',
        fontWeight: '700',
    },

    texto: {
        color: '#6d28d9',
        fontSize: 20,
        fontWeight: '700',
    },

    fecha: {
        color: '#374151'
    },

    contenedorBotones: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },

    btn: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5
    },

    btnEditar: {
        backgroundColor: '#f59e0b'
    },

    btnEliminar: {
        backgroundColor: '#ef4444'
    },

    btnTexto: {
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: 12,
        color: '#fff',
    }
})