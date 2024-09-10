import React from 'react';
import {Pressable, Text} from 'react-native';
import {styles, colors} from '../config/theme/app-theme';
interface Props {
  label: string;
  color?: string;
}
export const CalculatorButton = ({label, color = colors.darkGray}: Props) => {
  return (
    <Pressable
      style={({pressed}) => ({
        ...styles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
      })}>
      <Text style={styles.ButtonText}>{label}</Text>
    </Pressable>
  );
};
