import React, { useState } from 'react';
import { Modal, Text, SafeAreaView, StyleSheet, TextInput, View, ScrollView } from 'react-native';
import DatePicker from 'react-native-date-picker';

export default function Formulario(props){
    const { modalVisible } = props;

    const [ paciente, setPaciente ] = useState('');
    const [ propietario, setPropietario ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ telefono, setTelefono ] = useState('');
    const [ fecha, setFecha ] = useState(new Date());
    const [ sintomas, setSintomas ] = useState('');

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
                            value={ paciente }
                            onChangeText={ (text) => setPaciente(text)}
                        />
                    </View>
                    <View style={ styles.campo }>
                        <Text style={ styles.label }>Nombre Propietario</Text>
                        <TextInput 
                            style={ styles.input }
                            placeholder='Nombre Propietario'
                            placeholderTextColor={ '#666' }
                            value={ propietario }
                            onChangeText={ (text) => setPropietario(text) }
                        />
                    </View>
                    <View style={ styles.campo }>
                        <Text style={ styles.label }>Email Propietario</Text>
                        <TextInput 
                            style={ styles.input }
                            placeholder='Email Propietario'
                            placeholderTextColor={ '#666' }
                            keyboardType='email-address'
                            value={ email }
                            onChangeText={ (text) => setEmail(text)}
                        />
                    </View>
                    <View style={ styles.campo }>
                        <Text style={ styles.label }>Teléfono Propietario</Text>
                        <TextInput 
                            style={ styles.input }
                            placeholder='Teléfono Propietario'
                            placeholderTextColor={ '#666' }
                            keyboardType='number-pad'
                            value={ telefono }
                            onChangeText={ (text) => setTelefono(text) }
                            maxLength={ 10 }
                        />
                    </View>
                    <View style={ styles.campo }>
                        <Text style={ styles.label }>Fecha Alta</Text>
                        <View style={ styles.fechaContenedor }>
                            <DatePicker
                                date={ fecha }
                                locale='es'
                                onDateChange={ (date) => setFecha(date) }
                            />
                        </View>
                    </View>
                    <View style={ styles.campo }>
                        <Text style={ styles.label }>Sintomas</Text>
                        <TextInput 
                            style={[ styles.input, styles.sintomasInput ]}
                            placeholder='Sintomas Paciente'
                            placeholderTextColor={ '#666' }
                            value={ sintomas }
                            onChangeText={ (text) => setSintomas(text) }
                            multiline={ true }
                            numberOfLines={ 4 }
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
    },

    sintomasInput: {
        height: 100,
    },

    fechaContenedor: {
        backgroundColor: '#fff',
        borderRadius: 10,
    }
})