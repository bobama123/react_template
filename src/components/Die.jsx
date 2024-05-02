import React from "react";
import { useState } from "react";


const Die = () => {
    const [number, setNumber] = useState(0);

    const randomNumberRange = (min, max) => {
        const minCeiled = Math.ceil(min)
        const maxFloored = Math.floor(max)
        return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }
    const handleClick = () => {
        setNumber(randomNumberRange(1, 6));
        };
    
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={handleClick}>Die role</button>
        </div>
    );

}

export default Die;
