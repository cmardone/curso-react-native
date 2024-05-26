import React from 'react';
import { Pressable, Text } from 'react-native';
import { globalStyles } from '../../themes/theme';

interface Props {
  label: string;
  onPress?: () => void;
}
const PrimaryButton = ({ label, onPress }: Props) => {
  return (
    <Pressable style={globalStyles.primaryButton} onPress={() => onPress?.()}>
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
};

export default PrimaryButton;
