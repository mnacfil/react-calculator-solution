import React, {memo} from 'react'

const DisplayOutput = ({ current, forMattedValue }) => {
    console.log("Displaying output");
    return (
        <div className="output">
            <div className="value">
                {forMattedValue ? forMattedValue : current}
            </div>
        </div>
    )
}

export default memo(DisplayOutput)
