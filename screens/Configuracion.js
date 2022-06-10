// PANTALLA CONFIGURACION
// FECHA DE INICIO DEL PROYECTO:  
// FECHA ULTIMA MODIF          : 19/5/2022
// FORMULARIO CLIENTE PIN 
import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text } from "react-native";

const Configuracion = () => {
  const [cuitCliente, onChangeCuit] = React.useState("");
  const [pinCliente, onChangePin] = React.useState("");

  return (
    <SafeAreaView   style={styles.safearea} >
      <Text style={styles.text} >CUIT</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeCuit}
        value={cuitCliente}
        placeholder="CUIT del Cliente"   
        keyboardType="number-pad"
        maxLength={11}
        placeholderTextColor='#6DA5DA'

      />
      <Text style={styles.text} >PIN</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangePin}
        value={pinCliente}
        placeholder="Pin del Cliente"
        keyboardType="numeric"
        maxLength={4}      
        placeholderTextColor='#6DDA6D'   
        secureTextEntry={true}     
        
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  safearea: {
    padding: 20
  },
  text: {
    left: 20
  }  
});

export default Configuracion;