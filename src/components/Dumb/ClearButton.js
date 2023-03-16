import React, {memo} from 'react';
const ClearButton = ({ clear }) => {
    console.log("clear button");
    return (
        <button 
            className="gray-2" 
            onClick={clear}>
            C
        </button>
    )
}

export default memo(ClearButton)
