import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { GlobalStyles } from '../constants/styles';
import { getFormattedDate } from '../util/date';

function VencimientoItem({ id, dominio, venc_date }) {
  

  return (
    
      <View style={styles.VencimientoItem}>
        <View>
          <Text style={[styles.textBase, styles.dominio]}>
            {dominio}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date_venc)}</Text>
        </View>
        {/* <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View> */}
      </View>

  );
}

export default VencimientoItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  expenseItem: {
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
  dominio: {
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
