import { 
  DigitButton, 
  OperationButton, 
  ClearButton, 
  PlusMinusButton, 
  ConverttoDecimalButton, 
  EqualButton,
  DisplayOutput 
} from './components';
import { useGlobalContext } from './context';

function App() {
  const { 
    current,
    forMattedValue,
    displayNumber,
    chooseOperator, 
    clear, 
    evaluate, 
    convertoDecimal, 
    toggleSign, 
  } = useGlobalContext();

  return (
    <main className="calculator">
      <DisplayOutput current={current} forMattedValue={forMattedValue}/>
      <ClearButton clear={clear}/>
      <PlusMinusButton toggleSign={toggleSign}/>
      <ConverttoDecimalButton convertoDecimal={convertoDecimal} current={current}/>
      <OperationButton operation="÷" chooseOperator={chooseOperator}/>
      <DigitButton digit="7" displayNumber={displayNumber}/>
      <DigitButton digit="8" displayNumber={displayNumber}/>
      <DigitButton digit="9" displayNumber={displayNumber}/>
      <OperationButton operation="x" chooseOperator={chooseOperator}/>
      <DigitButton digit="4" displayNumber={displayNumber}/>
      <DigitButton digit="5" displayNumber={displayNumber}/>
      <DigitButton digit="6" displayNumber={displayNumber}/>
      <OperationButton operation="-" chooseOperator={chooseOperator}/>
      <DigitButton digit="1" displayNumber={displayNumber}/>
      <DigitButton digit="2" displayNumber={displayNumber}/>
      <DigitButton digit="3" displayNumber={displayNumber}/>
      <OperationButton operation="+" chooseOperator={chooseOperator}/>
      <DigitButton digit="0" zero displayNumber={displayNumber}/>
      <DigitButton digit="." displayNumber={displayNumber}/>
      <EqualButton evaluate={evaluate}/>
    </main>
  );
}

export default App;
