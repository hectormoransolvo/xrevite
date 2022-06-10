// COMPONENTE UGRIDROW
// FECHA DE INICIO DEL PROYECTO:  
// FECHA ULTIMA MODIF          :
// MUESTRA UN RENGLON DE LOS VENCIMIENTOS
 

import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { GlobalStyles } from '../constants/styles';

// import { getFormattedDate } from '../../util/date';

function UgridRow({ id, dominio, date_venc, marca, dias }) {



  const navigation = useNavigation();

  //console.log(' UGRIDROWddddd ',  dominio  )

   function expensePressHandler() {
     navigation.navigate('ManageExpense', {
       expenseId: id
     });
   }

  return (
     <Pressable
       onPress={expensePressHandler}
       style={({ pressed }) => pressed && styles.pressed}
     >
      <View style={styles.datosItem}>
        <View>
          {/* <Text>
            {id}
          </Text> */}
          {/* <Text style={styles.textBase}>{date_venc}</Text> */}
          <Text style={styles.textMarca}>{marca}</Text>
          <View style={styles.diasContainer} > 
            <Text style={styles.textDate}>{date_venc}</Text>
            <Text style={styles.textDias}>  {dias} días</Text>
          </View>          
          {/* <Text style={styles.textBase}>{dias}</Text> */}
        </View>
        <View style={styles.dominioContainer}>
          <Text style={styles.dominio}>{dominio}</Text>
        </View>
      </View>
     </Pressable>
  );
}

export default UgridRow;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  datosItem: {
    padding: 12,
    marginVertical: 8,
    //backgroundColor: GlobalStyles.colors.primary500,
    backgroundColor: GlobalStyles.colors.naranja,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    //shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  textDate: {
    color: GlobalStyles.colors.primary50,
  },
  textDias: {
    color: GlobalStyles.colors.primary50,
    fontWeight: 'bold',    
  },    
  textMarca: {
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary50,
  },  
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  dominioContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 120,
    borderWidth: 2,
  },
  diasContainer: {
    flexDirection: 'row',
  },  

  dominio: {
    color: GlobalStyles.colors.negro,
    //color: GlobalStyles.colors.primary500,
    fontWeight: 'bold',
    fontSize: 20,

  },
});
