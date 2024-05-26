import {useEffect, useState} from 'react';

const useCalculator = () => {
  const [result, setResult] = useState<number>(0);
  const [operation, setOperation] = useState<string>('');
  const [firstNumber, setFirstNumber] = useState<string>();
  const [operator, setOperator] = useState<string>();
  const [secondNumber, setSecondNumber] = useState<string>();

  useEffect(() => {
    let operationText = '';
    if (firstNumber) {
      operationText += firstNumber;
    }
    if (operator) {
      operationText += ' ' + operator;
    }
    if (secondNumber) {
      operationText += ' ' + secondNumber;
    }
    setOperation(operationText);
  }, [firstNumber, operator, secondNumber]);

  const pressButton = (label: string) => {
    switch (label) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
        pressNumber(label);
        break;
      case '+':
      case '-':
      case 'x':
      case '÷':
        pressOperator(label);
        break;
      case 'AC':
        clearOperation();
        break;
      case '+/-':
        changeSign();
        break;
      case '=':
        executeOperation();
        break;
      case 'del':
        doBackspace();
        break;
      default:
        console.log(label);
    }
  };

  const pressNumber = (numberButton: string) => {
    if (operator) {
      if (secondNumber) {
        if (secondNumber.includes('.') && numberButton === '.') {
          return;
        }
        if (secondNumber.startsWith('0') && numberButton === '0') {
          return;
        }
        setSecondNumber(secondNumber + numberButton);
      } else {
        if (numberButton === '.') {
          setSecondNumber('0' + numberButton);
        } else {
          setSecondNumber(numberButton);
        }
      }
      return;
    } else {
      if (firstNumber) {
        if (firstNumber.includes('.') && numberButton === '.') {
          return;
        }
        if (firstNumber.startsWith('0') && numberButton === '0') {
          return;
        }
        setFirstNumber(firstNumber + numberButton);
      } else {
        if (numberButton === '.') {
          setFirstNumber('0' + numberButton);
        } else {
          setFirstNumber(numberButton);
        }
      }
    }
  };

  const pressOperator = (operatorButton: string) => {
    if (secondNumber) {
      executeOperation();
      clearOperation();
      setFirstNumber(String(result));
    }
    setOperator(operatorButton);
  };

  const executeOperation = () => {
    if (firstNumber && secondNumber) {
      switch (operator) {
        case '+':
          setResult(Number(firstNumber) + Number(secondNumber));
          break;
        case '-':
          setResult(Number(firstNumber) - Number(secondNumber));
          break;
        case 'x':
          setResult(Number(firstNumber) * Number(secondNumber));
          break;
        case '÷':
          setResult(Number(firstNumber) / Number(secondNumber));
          break;
        default:
          setResult(0);
      }
    }
  };

  const clearOperation = () => {
    setResult(0);
    setOperation('');
    setFirstNumber(undefined);
    setOperator(undefined);
    setSecondNumber(undefined);
  };

  const changeSign = () => {
    if (secondNumber) {
      setSecondNumber(`${Number(secondNumber) * -1}`);
    }
    if (firstNumber) {
      setFirstNumber(`${Number(firstNumber) * -1}`);
    }
  };

  const doBackspace = () => {
    if (secondNumber) {
      if (secondNumber.length === 1) {
        return clearOperation();
      }
      return setSecondNumber(secondNumber.slice(0, -1));
    }
    if (firstNumber) {
      setFirstNumber(firstNumber.slice(0, -1));
    }
  };

  return {
    result,
    operation,
    pressButton,
  };
};

export default useCalculator;
