import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../../config/theme/app-theme';
import CalculatorButton from '../components/calculator-button';
import useCalculator from '../hooks/use-calculator';

interface Button {
  label: string;
  buttonColor: 'gray' | 'dark' | 'orange';
  size: 'simple' | 'double';
}

const buttons: Button[][] = [
  [
    {size: 'simple', label: 'AC', buttonColor: 'gray'},
    {size: 'simple', label: '+/-', buttonColor: 'gray'},
    {size: 'simple', label: 'del', buttonColor: 'gray'},
    {size: 'simple', label: '÷', buttonColor: 'orange'},
  ],
  [
    {size: 'simple', label: '7', buttonColor: 'dark'},
    {size: 'simple', label: '8', buttonColor: 'dark'},
    {size: 'simple', label: '9', buttonColor: 'dark'},
    {size: 'simple', label: 'x', buttonColor: 'orange'},
  ],
  [
    {size: 'simple', label: '4', buttonColor: 'dark'},
    {size: 'simple', label: '5', buttonColor: 'dark'},
    {size: 'simple', label: '6', buttonColor: 'dark'},
    {size: 'simple', label: '-', buttonColor: 'orange'},
  ],
  [
    {size: 'simple', label: '1', buttonColor: 'dark'},
    {size: 'simple', label: '2', buttonColor: 'dark'},
    {size: 'simple', label: '3', buttonColor: 'dark'},
    {size: 'simple', label: '+', buttonColor: 'orange'},
  ],
  [
    {size: 'double', label: '0', buttonColor: 'dark'},
    {size: 'simple', label: '.', buttonColor: 'dark'},
    {size: 'simple', label: '=', buttonColor: 'orange'},
  ],
];

const CalculatorScreen = () => {
  const {operation, result, pressButton} = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={globalStyles.resultBox}>
        <Text
          style={globalStyles.mainResult}
          adjustsFontSizeToFit
          numberOfLines={1}>
          {operation}
        </Text>
        <Text
          style={globalStyles.subResult}
          adjustsFontSizeToFit
          numberOfLines={1}>
          {result}
        </Text>
      </View>
      {buttons.map((row, index) => (
        <View style={globalStyles.buttonsRow} key={`row-${index}`}>
          {row.map(button => (
            <CalculatorButton
              label={button.label}
              buttonColor={button.buttonColor}
              size={button.size}
              key={button.label}
              onPress={() => pressButton(button.label)}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export default CalculatorScreen;
