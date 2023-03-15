import React from 'react'

const EqualButton = ({ evaluate }) => {
    console.log("evaluate button");
    return (
        <button className='equal' onClick={evaluate}>
            =
        </button>
    )
}

export default EqualButton
