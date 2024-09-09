/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import { View, Text} from 'react-native';
import { styles } from '../../config/theme/app-theme';
export const CalculatorScreen = () => {
    return (
        <View style={{ paddingHorizontal: 30, paddingBottom: 20}}>
            <Text style={ styles.mainResult }> 1s500 </Text> 
            <Text style={ styles.subResult }> 15 </Text>
        </View>
    )
}