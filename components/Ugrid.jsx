// COMPONENTE GRILLA
// FECHA DE INICIO DEL PROYECTO:  
// FECHA ULTIMA MODIF          :
//  -> LLAMA A UgridConDatos ( funtion )
//  -> LLAMA A UgridRow ( funtion )


import { StyleSheet, Text, View } from 'react-native';

import { GlobalStyles } from '../constants/styles';
 

import { FlatList } from 'react-native';

import UgridRow from './UgridRow';

 // ESTOY COPIANDO EXPENSESOUTPUT.JS


 function renderDatosItem(itemData) {
    //console.log("dentro render de Ugrid",itemData);
    return <UgridRow {...itemData.item} />;
  }
  
  function UgridConDatos({ datos }) {

    //console.log("dentro de UGRID", datos);
    return (
      <FlatList
        data={datos}
        renderItem={renderDatosItem}
        keyExtractor={(item) => item.id}
      />
    );
  }




function Ugrid({ datos , textoSinDatos }) {
  let content = <Text style={styles.infoText}>{textoSinDatos}</Text>;
  //console.log("dentro de UGRID", datos);

  if (datos.length > 0) {
    content = <UgridConDatos datos={datos} />;
  }

  return (
    <View style={styles.container}>
                    
      {content}
    </View>
  );
}

export default Ugrid;

const styles = StyleSheet.create({
  container: {
    flex: 0,   // El Flex está afectando la visualización
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
    backgroundColor: GlobalStyles.colors.celeste_oscuro,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  },
});
