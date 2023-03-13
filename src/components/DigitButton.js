import React from 'react'

const DigitButton = ({ digit, zero }) => {
  return (
    <button className={zero && 'zero'}>
        {digit}
    </button>
  )
}

export default DigitButton
