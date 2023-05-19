import React from 'react';
import { Modal, Text, SafeAreaView, StyleSheet, TextInput, View, ScrollView } from 'react-native';

export default function Formulario(props){
    const { modalVisible } = props;

    return (
        <Modal animationType='fade' visible={ modalVisible }>
            <SafeAreaView style={ styles.contenido }>
                <ScrollView>
                    <Text style={ styles.titulo }>
                        Nueva <Text style={ styles.tituloBold }>Cita</Text>
                    </Text>

                    <View style={ styles.campo }>
                        <Text style={ styles.label }>Nombre Paciente</Text>
                        <TextInput 
                            style={ styles.input }
                            placeholder='Nombre Paciente'
                            placeholderTextColor={ '#666' }
                        />
                    </View>
                    <View style={ styles.campo }>
                        <Text style={ styles.label }>Nombre Propietario</Text>
                        <TextInput 
                            style={ styles.input }
                            placeholder='Nombre Propietario'
                            placeholderTextColor={ '#666' }
                        />
                    </View>
                    <View style={ styles.campo }>
                        <Text style={ styles.label }>Email Propietario</Text>
                        <TextInput 
                            style={ styles.input }
                            placeholder='Email Propietario'
                            placeholderTextColor={ '#666' }
                            keyboardType='email-address'
                        />
                    </View>
                    <View style={ styles.campo }>
                        <Text style={ styles.label }>Teléfono Propietario</Text>
                        <TextInput 
                            style={ styles.input }
                            placeholder='Teléfono Propietario'
                            placeholderTextColor={ '#666' }
                            keyboardType='number-pad'
                        />
                    </View>
                    <View style={ styles.campo }>
                        <Text style={ styles.label }>Sintomas</Text>
                        <TextInput 
                            style={ styles.input }
                            placeholder='Sintomas Paciente'
                            placeholderTextColor={ '#666' }
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    contenido: {
        backgroundColor: '#6D28D9',
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

    campo: {
        marginTop: 5,
        marginHorizontal: 30,
        marginBottom: 10,
    },

    label: {
        color: '#fff',
        marginBottom: 5,
        marginTop: 15,
        fontSize: 15,
        fontWeight: '600'
    },

    input: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
    }
})