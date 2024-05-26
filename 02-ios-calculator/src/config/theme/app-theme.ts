import {StyleSheet} from 'react-native';

export const colors = {
  darkGray: '#2d2d2d',
  lightGray: '#9b9b9b',
  orange: '#ff9427',
  textPrimary: '#fff',
  textSecondary: '#666',
  background: '#000',
};

export const globalStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.background,
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },
  resultBox: {
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
  mainResult: {
    fontSize: 70,
    color: colors.textPrimary,
    textAlign: 'right',
    marginBottom: 10,
    fontWeight: '400',
  },
  subResult: {
    fontSize: 40,
    color: colors.textSecondary,
    textAlign: 'right',
    fontWeight: '300',
  },
  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  button: {
    backgroundColor: colors.darkGray,
    marginHorizontal: 10,
    height: 75,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doubleSizeButton: {
    flex: 2,
  },
  buttonText: {
    fontSize: 32,
    color: colors.textPrimary,
  },
});
