import {useState} from 'react';

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const buildNumber = (numberString: string) => {
    setNumber(number + numberString);
  };
  return {
    number,
    buildNumber,
  };
};

export default useCalculator;
