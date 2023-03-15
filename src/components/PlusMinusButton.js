import React, {memo} from 'react';

const PlusMinusButton = ({ toggleSign }) => {
    console.log("PlusMinus button");
    return (
        <button 
            className="toggle-sign gray-2" 
            onClick={toggleSign}>
            ±
        </button>
    )
}

export default memo(PlusMinusButton)
