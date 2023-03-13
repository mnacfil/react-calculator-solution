import React from 'react'
import { useGlobalContext } from '../context'

const DigitButton = ({ digit, zero }) => {
  const {displayNumber} = useGlobalContext();
  return (
    <button 
      className={zero && 'zero'}
      onClick={() => displayNumber(digit)}
      >
        {digit}
    </button>
  )
}

export default DigitButton
