import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { GlobalStyles } from '../../constants/styles';
import { getFormattedDate } from '../../util/date';

function RenglonVencimientos({ id, dominio, date_venc }) {
  /*const navigation = useNavigation();*/

  function expensePressHandler() {
   // navigation.navigate('ManageExpense', {
   //   expenseId: id
   // }
   
    }

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.renglon}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {dominio}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date_venc)}</Text>
        </View>

      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  renglon: {
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
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: GlobalStyles.colors.naranja,
    //color: GlobalStyles.colors.primary500,
    fontWeight: 'bold',
  },
});
