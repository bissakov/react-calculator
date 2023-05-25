import Button from './Button';

interface ButtonsAreaProps {
  onButtonClick: (value: string) => void;
}

function ButtonsArea({ onButtonClick }: ButtonsAreaProps) {
  const buttonInfo = [
    { value: '%', classNames: null, isNumber: false },
    { value: 'CE', classNames: null, isNumber: false },
    { value: 'C', classNames: null, isNumber: false },
    { value: '⌫', classNames: null, isNumber: false },
    { value: 'x²', classNames: null, isNumber: false },
    { value: 'x²', classNames: null, isNumber: false },
    { value: '√x', classNames: null, isNumber: false },
    { value: '÷', classNames: null, isNumber: false },
    { value: '7', classNames: null, isNumber: true },
    { value: '8', classNames: null, isNumber: true },
    { value: '9', classNames: null, isNumber: true },
    { value: '×', classNames: null, isNumber: false },
    { value: '4', classNames: null, isNumber: true },
    { value: '5', classNames: null, isNumber: true },
    { value: '6', classNames: null, isNumber: true },
    { value: '-', classNames: null, isNumber: false },
    { value: '1', classNames: null, isNumber: true },
    { value: '2', classNames: null, isNumber: true },
    { value: '3', classNames: null, isNumber: true },
    { value: '+', classNames: null, isNumber: false },
    { value: '±', classNames: null, isNumber: true },
    { value: '0', classNames: null, isNumber: true },
    { value: '.', classNames: null, isNumber: true },
    { value: '=', classNames: null, isNumber: false }
  ];

  return (
    <div className="bg-cyan-900 border-8 border-cyan-900 rounded-b-lg grid grid-cols-4 gap-2 select-none">
      {buttonInfo.map((button, index) => (
        <Button
          key={index}
          value={button.value}
          classNames={button.classNames}
          isNumber={button.isNumber}
          onButtonClick={(value: string) => {
            onButtonClick(value);
          }}
        />
      ))}
    </div>
  );
}

export default ButtonsArea;
