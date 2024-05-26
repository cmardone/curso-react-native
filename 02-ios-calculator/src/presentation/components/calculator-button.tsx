import React from 'react';
import {Pressable, Text} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';

interface Props {
  label: string;
  buttonColor?: 'dark' | 'gray' | 'orange';
  size: 'simple' | 'double';
  onPress: () => void;
}
const CalculatorButton = ({
  label,
  size,
  onPress,
  buttonColor = 'dark',
}: Props) => {
  const backgroundColor: {[key: string]: string} = {
    dark: colors.darkGray,
    gray: colors.lightGray,
    orange: colors.orange,
  };
  const foregroundColor: {[key: string]: string} = {
    dark: colors.textPrimary,
    gray: colors.background,
    orange: colors.textPrimary,
  };

  return (
    <Pressable
      style={({pressed}) => ({
        ...globalStyles.button,
        backgroundColor: backgroundColor[buttonColor],
        flex: size === 'simple' ? 1 : 2,
        opacity: pressed ? 0.8 : 1,
      })}
      onPress={onPress}>
      <Text
        style={{
          ...globalStyles.buttonText,
          color: foregroundColor[buttonColor],
        }}>
        {label}
      </Text>
    </Pressable>
  );
};

export default CalculatorButton;
