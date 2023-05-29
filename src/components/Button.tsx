interface ButtonProps {
  value: string;
  onButtonClick: (value: string) => void;
}

const Button = ({ value, onButtonClick }: ButtonProps) => {
  return (
    <button
      className={`outline outline-2 outline-cyan-950 rounded-md py-2 p-8 flex items-center justify-center cursor-pointer
                  transition ease-in-out delay-50 hover:bg-cyan-500 active:bg-cyan-100 duration-200 ${
                    !isNaN(parseFloat(value)) || ['.', '±'].includes(value)
                      ? 'bg-cyan-600'
                      : 'bg-cyan-700'
                  } ${value === '=' ? 'col-span-3' : ''} `}
      onClick={() => onButtonClick(value)}
    >
      {value}
    </button>
  );
};

export default Button;
