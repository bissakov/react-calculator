interface ButtonProps {
  value: string;
  classNames?: string | null;
  isNumber: boolean;
  onButtonClick: (value: string) => void;
}

function Button({ value, classNames, isNumber, onButtonClick }: ButtonProps) {
  return (
    <div
      onClick={() => {
        if (isNumber) onButtonClick(value);
      }}
      className={`text-cyan-50 font-bold antialiased
                  ${isNumber ? 'bg-cyan-600' : 'bg-cyan-700'}  
                  rounded-md p-8 text-4xl flex items-center justify-center cursor-pointer
                  transition ease-in-out delay-50 hover:bg-cyan-800 duration-200
                  transition ease-in-out delay-50 active:bg-cyan-200 duration-200
                  ${classNames}`}
    >
      {value}
    </div>
  );
}

export default Button;
