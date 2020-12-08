import React from 'react';
// Write your Character component here

const Character = props =>{
    return (
        <div className = "character">
            <div className ="titleCharacter">
                <h1>{props.name}</h1>
                <h2>{props.birthYear}</h2>

            </div>
            <div className = "stats">
                <h3>Height:</h3> <h3>{props.height}</h3>
                <h3>Mass:</h3> <h3>{props.mass}</h3>
            </div>
        </div>
    )
}

export default Character;