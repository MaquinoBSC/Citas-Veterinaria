import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  FlatList,
  Alert,
  Modal
} from 'react-native';

import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';
import InformacionPaciente from './src/components/InformacionPaciente';


const App = () => {
  const [ modalVisible, setModalVisible ] = useState(false);
  const [ pacientes, setPacientes ] = useState([]);
  const [ paciente, setPaciente ] = useState({});
  const [ modalPaciente, setModalPaciente ] = useState(false);

  const nuevaCitaHandler = () => { setModalVisible(true) }

  const pacienteEditar = (id) => { setPaciente(pacientes.filter((p) => p.id === id)[0]) }

  const pacienteEliminar= (id) => { 
    Alert.alert(
      'Deseas Eliminar Paciente',
      'Un paciente eliminado no se puede recuperar', 
      [
        {
          'text': 'Cancelar',
          'style': 'cancel' 
        },
        {
          'text': 'Si, Eliminar',
          'style': 'default',
          'onPress': () => setPacientes(pacientes.filter((p) => p.id !== id)) 
        }
      ]
    )
  }

  return (
    <SafeAreaView style={ styles.container }>
      <Text style={ styles.titulo }>
        Administrador de Citas <Text style={ styles.tituloBold }>Veterinaria</Text>
      </Text>

      <Pressable onPress={ () => nuevaCitaHandler() } style={ styles.btnNuevaCita }>
        <Text style = { styles.btnNuevaCitaTexto }>Nueva Cita</Text>
      </Pressable>

      {
        pacientes.length === 0 ? 
          <Text style={ styles.noPacientes }>No hay pacientes aún</Text> : 
          <FlatList
            style={ styles.listado }
            data={ pacientes }
            keyExtractor={ (item) => item.id }
            renderItem={ ({ item }) => <Paciente 
                                          item={ item } 
                                          setModalVisible={ setModalVisible} 
                                          pacienteEditar={ pacienteEditar }
                                          pacienteEliminar={ pacienteEliminar }
                                          setModalPaciente={ setModalPaciente }
                                       /> 
                       }
          />
      }
      <Formulario 
        modalVisible={ modalVisible }
        setModalVisible={ setModalVisible }
        setPacientes={ setPacientes }
        paciente={ paciente }
        setPaciente={ setPaciente }
      />

      <Modal 
        visible={ modalPaciente }
        animationType='fade'
      >
        <InformacionPaciente />
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f4f6',
    flex: 1,
  },

  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600'
  },

  tituloBold: {
    fontWeight: '900',
    color: '#6d28d9'
  },

  btnNuevaCita: {
    backgroundColor: '#6d28d9',
    padding: 15,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
  },

  btnNuevaCitaTexto: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase',
  },

  noPacientes: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '800'
  },

  listado: {
    marginTop: 50,
    marginHorizontal: 30,
  }
});

export default App;