/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {View, Text} from 'react-native';

import {styles} from '../../config/theme/app-theme';
import {CalculatorButton} from '../../components/CalculatorButton';
export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text style={styles.mainResult}> 1500 </Text>
        <Text style={styles.subResult}> 15 </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <CalculatorButton label="C" />
        <CalculatorButton label="C" />
        <CalculatorButton label="C" />
        <CalculatorButton label="C" />
      </View>
    </View>
  );
};
