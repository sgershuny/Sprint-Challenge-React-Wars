import React from 'react';
// Write your Character component here

const Character = props =>{
    return (
        <div className = "characterContainer">
            <h1>{props.name}</h1>
        </div>
    )
}

export default Character;