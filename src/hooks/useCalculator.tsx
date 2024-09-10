import {useEffect, useRef, useState} from 'react';

enum Operators {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '/',
}

export const useCalculator = () => {
  const [formula, setFormula] = useState('');
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');
  const lastOperation = useRef<Operators>();

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(' ').at(0);
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

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
    setPrevNumber('0');
    lastOperation.current = undefined;
    setFormula('');
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
    const result = calculateSubResult();
    setFormula(`${result}`);
    lastOperation.current = undefined;
    setPrevNumber('0');
  };

  const calculateSubResult = () => {
    const [firstValue, operation, secondValue] = formula.split(' ');

    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (isNaN(num2)) return num1;
    switch (operation) {
      case Operators.add:
        return num1 + num2;

      case Operators.subtract:
        return num1 - num2;

      case Operators.multiply:
        return num1 * num2;
      case Operators.divide:
        return num1 / num2;

      default:
        throw new Error('Operation not implemented');
    }
  };

  return {
    formula,
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
