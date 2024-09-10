import {useRef, useState} from 'react';

enum Operators {
  add,
  subtract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');
  const lastOperation = useRef<Operators>();

  const buildNumber = (numberString: string) => {
    setNumber(number + numberString);
    if (number.includes('.') && numberString === '.') return;
    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberString === '.') {
        return setNumber(number + numberString);
      }
      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }
      if (numberString === '0' && !number.includes('.')) {
        return;
      }
      return setNumber(number + numberString);
    }
    setNumber(number + numberString);
  };

  const clean = () => {
    setNumber('0');
  };

  const deleteOperation = () => {
    let currentSign = '';
    let temporalNumber = number;
    if (number.includes('-')) {
      currentSign = '-';
      temporalNumber = number.substring(1);
    }
    if (temporalNumber.length > 1) {
      return setNumber(currentSign + temporalNumber.slice(0, -1));
    }
    setNumber('0');
  };

  const toggleSign = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }
    setNumber('-' + number);
  };

  const setLastNumber = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }
    setNumber('0');
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operators.divide;
  };
  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operators.multiply;
  };
  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operators.subtract;
  };
  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operators.add;
  };

  const calculateResult = () => {
    const num1 = Number(number);
    const num2 = Number(prevNumber);
    switch (lastOperation.current) {
      case Operators.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operators.subtract:
        setNumber(`${num2 - num1}`);
        break;
      case Operators.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operators.divide:
        setNumber(`${num1 / num2}`);
        break;
      default:
        throw new Error('Operation not implemented');
    }
  };

  return {
    number,
    prevNumber,
    buildNumber,
    setNumber,
    clean,
    deleteOperation,
    toggleSign,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult,
  };
};

export default useCalculator;
