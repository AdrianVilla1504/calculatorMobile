/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import { View, Text, Pressable} from 'react-native';

import { styles } from '../../config/theme/app-theme';
export const CalculatorScreen = () => {
    return (
        <View style={ styles.calculatorContainer }>
            <View style={{ paddingHorizontal: 30, paddingBottom: 20}}>
                <Text style={ styles.mainResult }> 1500 </Text> 
                <Text style={ styles.subResult }> 15 </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Pressable style={ styles.button }>
                    <Text style={styles.ButtonText}>1</Text>
                </Pressable>
                <Pressable style={ styles.button }>
                    <Text style={styles.ButtonText}>1</Text>
                </Pressable>
                <Pressable style={ styles.button }>
                    <Text style={styles.ButtonText}>1</Text>
                </Pressable>
                <Pressable style={ styles.button }>
                    <Text style={styles.ButtonText}>1</Text>
                </Pressable>
                <Pressable style={ styles.button }>
                    <Text style={styles.ButtonText}>1</Text>
                </Pressable>
                <Pressable style={ styles.button }>
                    <Text style={styles.ButtonText}>1</Text>
                </Pressable>

            </View>
        </View>
    )
}