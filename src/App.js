import { DigitButton, OperationButton } from './components';
import { useGlobalContext } from './context';

function App() {
  const { current, clear } = useGlobalContext();
  return (
    <main className="calculator">
      <div className="output">
        <div className="value">{current}</div>
      </div>
      <button className="gray-2" onClick={clear}>C</button>
      <button className="gray-2">+-</button>
      <button className="gray-2">%</button>
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
      <button className='equal'>=</button>
    </main>
  );
}

export default App;
