import React, {memo} from 'react'

const DigitButton = ({ digit, zero, displayNumber }) => {;
  console.log("digit component");
  return (
    <button 
      className={zero && 'zero'}
      onClick={() => displayNumber(digit)}
      >
        {digit}
    </button>
  )
}

export default memo(DigitButton)
