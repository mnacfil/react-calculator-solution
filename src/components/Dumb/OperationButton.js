import React, {memo} from 'react'

const OperationButton = ({ operation, chooseOperator }) => {
  return (
    <button 
      className='operation'
      onClick={() => chooseOperator(operation)}
      >
      {operation}
    </button>
  )
}

export default memo(OperationButton)
