import DisplayArea from './components/DisplayArea';
import ButtonsArea from './components/ButtonsArea';
import { useState } from 'react';

function Calculator() {
  const [currentButton, setCurrentButton] = useState('');

  return (
    <div className="w-1/4 h-4/5 flex flex-col justify-center">
      <DisplayArea value={currentButton} />
      <ButtonsArea
        onButtonClick={(value: string) => {
          setCurrentButton(value);
        }}
      />
    </div>
  );
}

function App() {
  return (
    <div className="h-screen flex place-items-center justify-center bg-cyan-100 font-mono">
      <Calculator />
    </div>
  );
}

export default App;
