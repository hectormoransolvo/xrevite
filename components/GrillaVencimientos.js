import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native';
import { GlobalStyles } from '../constants/styles';


import DataTable, { COL_TYPES } from 'react-native-datatable-component';

function GrillaVencimientos( param ) {
  //let content = <Text style={styles.infoText}>{fallbackText}</Text>;
  //let content = <Text style={styles.infoText}>{param_vencimientos}</Text>;
  
    //console.log("GRILLA VENCIMIENTOS",param_vencimientos);
    console.log("GRILLA VENCIMIENTOS ----------------->",param.vencimientos);
  //if (vencimientos.length > 0) {
  //  content = <VencimientosList vencimientos={vencimientos} />;
  //}
  // backgroundColor={'rgba(23,2,4,0.2)'} //Table Background Color

  return (
    <View>

    
    <DataTable
            data={ param.vencimientos } // list of objects
            colNames={['dominio', 'date_venc', 'id']} //List of Strings
            noOfPages={1} //number
            colSettings={[{ name: 'dominio', type: COL_TYPES.STRING }, { name: 'date_venc', type: COL_TYPES.STRING }, {name: 'id', type: COL_TYPES.STRING}]}//List of Objects
            backgroundColor={'#CEE3F6'} //Table Background Color
    />


    </View>
  );
}

export default GrillaVencimientos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    //backgroundColor: GlobalStyles.colors.primary700,
    backgroundColor: GlobalStyles.colors.celeste_oscuro,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  },
});
