import { useState } from 'react';
import Button from './Button';

const Calculator = () => {
  const buttonInfo = [
    '7',
    '8',
    '9',
    'C',
    '4',
    '5',
    '6',
    '/',
    '1',
    '2',
    '3',
    '*',
    '±',
    '0',
    '.',
    '-',
    '=',
    '+'
  ];
  const [displayValue, setDisplayValue] = useState('0');

  const handleButtonClick = (value: string) => {
    if (displayValue === '0') {
      setDisplayValue(value);
    } else {
      if ('Error'.indexOf(displayValue) !== -1) {
        setDisplayValue(value);
        return;
      }
      setDisplayValue((prevValue) =>
        value !== '±'
          ? prevValue + value
          : (prevValue + value).length === 0
          ? prevValue
          : (parseFloat(prevValue) * -1).toString()
      );
    }
  };

  const handleCalculate = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  const handleClear = () => {
    setDisplayValue('0');
  };

  return (
    <div
      className="w-1/4 h-3/5 flex flex-col justify-center text-cyan-50 font-mono text-3xl font-bold antialiased rounded-lg shadow-lg"
      onKeyDown={(e) => console.log(`You pressed a key ${e.key}`)}
    >
      <div
        className="bg-cyan-900 rounded-t-lg
                  text-right p-6 font-bold
                  selection:bg-cyan-600"
      >
        {displayValue}
      </div>
      <div className="grow bg-cyan-900 border-8 border-cyan-900 rounded-b-lg grid grid-cols-4 gap-2 select-none">
        {buttonInfo.map((value) => (
          <Button
            key={value}
            value={value}
            onButtonClick={
              value !== '='
                ? value === 'C'
                  ? handleClear
                  : handleButtonClick
                : handleCalculate
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
