import React, { useState, useEffect } from 'react';
import {
    Modal, 
    Text, 
    SafeAreaView, 
    StyleSheet, 
    TextInput, 
    View, 
    ScrollView, 
    Pressable, 
    Alert
} from 'react-native';
import DatePicker from 'react-native-date-picker';

export default function Formulario(props){
    const { modalVisible, cerrarModal, setPacientes } = props;
    const { paciente: pacienteEditar, setPaciente: setPacienteEditar } = props;

    const [ id, setId ] = useState('');
    const [ paciente, setPaciente ] = useState('');
    const [ propietario, setPropietario ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ telefono, setTelefono ] = useState('');
    const [ fecha, setFecha ] = useState(new Date());
    const [ sintomas, setSintomas ] = useState('');

    useEffect(() => {
        if(Object.keys(pacienteEditar).length > 0) {
            setId(pacienteEditar.id);
            setPaciente(pacienteEditar.paciente);
            setPropietario(pacienteEditar.propietario);
            setEmail(pacienteEditar.email);
            setTelefono(pacienteEditar.telefono);
            setFecha(pacienteEditar.fecha);
            setSintomas(pacienteEditar.sintomas);
        }
    }, [ pacienteEditar ]);

    const handleNuevaCita = () => {
        // Validaciones
        if([paciente, propietario, email, telefono, fecha, sintomas].includes('')) {
            Alert.alert(
                'Error',
                'Todos los campos son obligatorios',
                [
                    { 
                        text: 'Entendido', 
                        onPress: () => { console.log('El usuario entendio') }
                    }
                ]
            )
            return
        }

        const nuevoPaciente = {
            paciente,
            propietario,
            email,
            telefono,
            fecha,
            sintomas
        };
        // Saber si es un registro o una edición
        if(id) {
            // Modo edición
            nuevoPaciente.id = id;
            setPacientes((pacientes) => pacientes.map((p) => p.id === id ? nuevoPaciente : p));
            setPacienteEditar({});
        }
        else {
            // Modo Nuevo Registro
            nuevoPaciente.id = Date.now();
            setPacientes((pacientes) => [ ...pacientes, nuevoPaciente ]);
        }
        
        cerrarModal()
        setId('');
        setPaciente('');
        setPropietario('');
        setEmail('');
        setTelefono('');
        setFecha(new Date());
        setSintomas('');
    }

    const handleCancelarCita = () => {
        cerrarModal()
        setPacienteEditar({});
        setId('');
        setPaciente('');
        setPropietario('');
        setEmail('');
        setTelefono('');
        setFecha(new Date());
        setSintomas('');
    }

    return (
        <Modal animationType='fade' visible={ modalVisible }>
            <SafeAreaView style={ styles.contenido }>
                <ScrollView>
                    <Text style={ styles.titulo }>
                        { id ? 'Editar ' : 'Nueva ' } 
                        <Text style={ styles.tituloBold }>Cita</Text>
                    </Text>
                    <Pressable 
                        style={ styles.btnCancelar } 
                        onLongPress={ () => handleCancelarCita() }
                    >
                        <Text style={ styles.btnCancelarTexto }>X Cancelar</Text>
                    </Pressable>

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
                    <Pressable 
                        style={ styles.btnNuevaCita } 
                        onPress={ () => handleNuevaCita() }>
                        <Text style={ styles.btnNuevaCitaTexto }>
                            { id ? 'Guardar ' : 'Agregar '} Paciente
                        </Text>
                    </Pressable>
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

    btnCancelar: {
        marginVertical: 15,
        backgroundColor: '#5827A4',
        marginHorizontal: 30,
        padding: 10,
        borderRadius: 10,
    },

    btnCancelarTexto: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 15,
        textTransform: 'uppercase'
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
    },

    btnNuevaCita: {
        marginVertical: 30,
        backgroundColor: '#F59E0B',
        paddingVertical: 10,
        marginHorizontal: 30,
        borderRadius: 10,
    },

    btnNuevaCitaTexto: {
        textAlign: 'center',
        color: '#5827A4',
        textTransform: 'uppercase',
        fontWeight: '900',
        fontSize: 16,
    }
})