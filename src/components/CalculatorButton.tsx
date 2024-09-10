import React from 'react';
import {Pressable, Text} from 'react-native';
import {styles, colors} from '../config/theme/app-theme';
interface Props {
  label: string;
  color?: string;
  doubleSize?: boolean;
  blackText?: boolean;
  onPress: () => void;
}
export const CalculatorButton = ({
  label,
  color = colors.darkGray,
  doubleSize = false,
  blackText = false,
  onPress,
}: Props) => {
  return (
    <Pressable
      onPress={() => onPress()}
      style={({pressed}) => ({
        ...styles.button,
        backgroundColor: color === 'LightGray' ? colors.LightGray : color,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 180 : 80,
      })}>
      <Text
        style={{
          ...styles.ButtonText,
          color: blackText ? 'black' : 'white',
        }}>
        {label}
      </Text>
    </Pressable>
  );
};
