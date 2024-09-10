/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {View, Text} from 'react-native';

import {styles} from '../../config/theme/app-theme';
import useCalculator from '../../hooks/useCalculator';
import {CalculatorButton} from '../../components/CalculatorButton';
export const CalculatorScreen = () => {
  const {
    number,
    prevNumber,
    buildNumber,
    clean,
    deleteOperation,
    toggleSign,
    divideOperation,
    multiplyOperation,
    addOperation,
    subtractOperation,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text
          adjustsFontSizeToFit={true}
          numberOfLines={1}
          style={styles.mainResult}>
          {number}
        </Text>
        <Text style={styles.subResult}>
          {prevNumber === '0' ? ' ' : prevNumber}
        </Text>
      </View>
      <View style={styles.row}>
        <CalculatorButton
          onPress={() => clean()}
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
          onPress={() => deleteOperation()}
          blackText
          label="del"
          color="LightGray"
        />
        <CalculatorButton
          onPress={() => divideOperation()}
          label="/"
          color="orange"
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={() => buildNumber('7')} label="7" />
        <CalculatorButton onPress={() => buildNumber('8')} label="8" />
        <CalculatorButton onPress={() => buildNumber('9')} label="9" />
        <CalculatorButton
          onPress={() => multiplyOperation()}
          label="x"
          color="orange"
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={() => buildNumber('4')} label="4" />
        <CalculatorButton onPress={() => buildNumber('5')} label="5" />
        <CalculatorButton onPress={() => buildNumber('6')} label="6" />
        <CalculatorButton
          onPress={() => subtractOperation()}
          label="-"
          color="orange"
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton onPress={() => buildNumber('1')} label="1" />
        <CalculatorButton onPress={() => buildNumber('2')} label="2" />
        <CalculatorButton onPress={() => buildNumber('3')} label="3" />
        <CalculatorButton
          onPress={() => addOperation()}
          label="+"
          color="orange"
        />
      </View>
      <View style={styles.row}>
        <CalculatorButton
          onPress={() => buildNumber('0')}
          label="0"
          doubleSize={true}
        />
        <CalculatorButton onPress={() => buildNumber('.')} label="." />
        <CalculatorButton
          onPress={() => console.log('=')}
          label="="
          color="orange"
        />
      </View>
    </View>
  );
};
