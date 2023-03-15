import React, { memo } from 'react';

const ConverttoDecimalButton = ({ convertoDecimal, current }) => {
    console.log("ConverttoDecimalButton button");
    return (
        <button 
            className="toggle-sign gray-2" 
            onClick={() => convertoDecimal(current)}>
            %
        </button>
    )
}

export default memo(ConverttoDecimalButton)
