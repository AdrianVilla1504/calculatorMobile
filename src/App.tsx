/* eslint-disable react/react-in-jsx-scope */
import {
  StatusBar,
  View
} from 'react-native';
import { styles } from './config/theme/app-theme'
import { CalculatorScreen } from './presentation/screens/CalculatorScreen';

function App() {
  return (
    <View style={ styles.background }>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'black'}
      />
      <CalculatorScreen/>
    </View>
  ) 
}

export default App;