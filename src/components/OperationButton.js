import React from 'react'
import { useGlobalContext } from '../context'

const OperationButton = ({ operation }) => {
  const { chooseOperator } = useGlobalContext();
  return (
    <button 
      className='operation'
      onClick={() => chooseOperator(operation)}
      >
      {operation}
    </button>
  )
}

export default OperationButton
