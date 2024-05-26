import React from 'react';
import {Platform, Pressable, StyleSheet, Text} from 'react-native';

interface Props {
  onPress?: () => void;
  onLongPress?: () => void;
  label: string;
}

const PrimaryButton = ({label, onPress, onLongPress}: Props) => {
  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
      onPress={() => onPress?.()}
      onLongPress={() => onLongPress?.()}>
      <Text
        style={{
          color: Platform.OS === 'android' ? 'white' : '#4746ab',
        }}>
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Platform.OS === 'android' ? '#5856d6' : 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonPressed: {
    backgroundColor: Platform.OS === 'android' ? '#4746ab' : 'white',
  },
});

export default PrimaryButton;
