/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {View, Text} from 'react-native';

import {styles} from '../../config/theme/app-theme';
import useCalculator from '../../hooks/useCalculator';
import {CalculatorButton} from '../../components/CalculatorButton';
export const CalculatorScreen = () => {
  const {number, buildNumber} = useCalculator();
  return (
    <View style={styles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text style={styles.mainResult}> {number} </Text>
        <Text style={styles.subResult}> {number} </Text>
      </View>
      <View style={styles.row}>
        <CalculatorButton
          onPress={() => console.log('C')}
          blackText
          label="C"
          color="LightGray"
        />
        <CalculatorButton
          onPress={() => console.log('+/-')}
          blackText
          label="+/-"
          color="LightGray"
        />
        <CalculatorButton
          onPress={() => console.log('del')}
          blackText
          label="del"
          color="LightGray"
        />
        <CalculatorButton
          onPress={() => console.log('/')}
          label="/"
          color="orange"
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={() => console.log('7')} label="7" />
        <CalculatorButton onPress={() => console.log('8')} label="8" />
        <CalculatorButton onPress={() => console.log('9')} label="9" />
        <CalculatorButton
          onPress={() => console.log('÷')}
          label="÷"
          color="orange"
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={() => console.log('4')} label="4" />
        <CalculatorButton onPress={() => console.log('5')} label="5" />
        <CalculatorButton onPress={() => console.log('6')} label="6" />
        <CalculatorButton
          onPress={() => console.log('-')}
          label="-"
          color="orange"
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={() => console.log('1')} label="1" />
        <CalculatorButton onPress={() => console.log('2')} label="2" />
        <CalculatorButton onPress={() => console.log('3')} label="3" />
        <CalculatorButton
          onPress={() => console.log('+')}
          label="+"
          color="orange"
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton
          onPress={() => console.log('0')}
          label="0"
          doubleSize={true}
        />
        <CalculatorButton onPress={() => console.log('.')} label="." />
        <CalculatorButton
          onPress={() => console.log('=')}
          label="="
          color="orange"
        />
      </View>
    </View>
  );
};
