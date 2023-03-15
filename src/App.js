import { DigitButton, OperationButton } from './components';
import { useGlobalContext } from './context';

function App() {
  const { current, clear, evaluate, convertoDecimal, toggleSign, formatCurrentValue } = useGlobalContext();
  return (
    <main className="calculator">
      <div className="output">
        <div className="value">{formatCurrentValue(current)}</div>
      </div>
      <button className="gray-2" onClick={clear}>C</button>
      <button className="toggle-sign gray-2" onClick={toggleSign}>
        <span>+</span>
        <span>-</span>
      </button>
      <button className="gray-2" onClick={() => convertoDecimal(current)}>%</button>
      <OperationButton operation="÷"/>
      <DigitButton digit="7"/>
      <DigitButton digit="8"/>
      <DigitButton digit="9"/>
      <OperationButton operation="x"/>
      <DigitButton digit="4"/>
      <DigitButton digit="5"/>
      <DigitButton digit="6"/>
      <OperationButton operation="-"/>
      <DigitButton digit="1"/>
      <DigitButton digit="2"/>
      <DigitButton digit="3"/>
      <OperationButton operation="+"/>
      <DigitButton digit="0" zero/>
      <DigitButton digit="."/>
      <button className='equal' onClick={evaluate}>=</button>
    </main>
  );
}

export default App;
