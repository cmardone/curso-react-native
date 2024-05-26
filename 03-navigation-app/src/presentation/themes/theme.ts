import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#7037eb',
  secondary: '#f72585',
  tertiary: '#3a0ca3',
  success: '#4cc9f0',
  warning: '#fca311',
  danger: '#e71d36',
  dark: '#22223b',
  background: '#ffffff',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: colors.background,
    fontSize: 18,
  },
});
