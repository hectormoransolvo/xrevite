// PANTALLA ACERCADE
// FECHA DE INICIO DEL PROYECTO:  
// FECHA ULTIMA MODIF          : 19/5/2022
// Mostrar Logo de UBIK+

import React from 'react'
import { Text, View, Image , StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

const AcercaDe = () => {

  return (
    
            <SafeAreaView  style={styles.container}>

                <Image 
                style={styles.stretch}
                source={require("../assets/ubik.png")}
                >

                </Image>
                <Text  style={styles.ubik} >UBIK</Text>

            </SafeAreaView>
  )
}

export default AcercaDe;


const styles = StyleSheet.create({
    container: {
      paddingTop: 100,
      padding:100
    },
    stretch: {
      width: 200,
      height: 200,
      resizeMode: 'stretch',

    },
    ubik: {
        //color: GlobalStyles.colors.negro,
        //color: GlobalStyles.colors.primary500,
        fontWeight: 'bold',
        padding: 50 ,
        fontSize: 40,
    
      },    
  });