import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  Modal
} from 'react-native';

const App = () => {
  const [ modalVisible, setModalVisible ] = useState(false);

  const nuevaCitaHandler = () => {
    setModalVisible(!modalVisible);
  }


  return (
    <SafeAreaView style={ styles.container }>
      <Text style={ styles.titulo }>
        Administrador de Citas <Text style={ styles.tituloBold }>Veterinaria</Text>
      </Text>

      <Pressable onPress={ () => nuevaCitaHandler() } style={ styles.btnNuevaCita }>
        <Text style={ styles.btnNuevaCitaTexto }>Nueva Cita</Text>
      </Pressable>

      <Modal animationType='fade' visible={ modalVisible }>
        <Text>Desde Modal</Text>
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
  }
});

export default App;