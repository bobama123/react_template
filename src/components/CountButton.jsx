import React from "react";


const CountButton = (props) => {
    const incrementCounter = () => {
        props.setCount(props.count + 1);
    };

    const decrementCounter = () => {
        props.setCount(props.count - 1)
    };


    return (
        <div>
            <button onClick={incrementCounter}>Increment the counter</button>
            <button onClick={decrementCounter}>Decrement the counter</button>
        </div>
    );

};


export default CountButton;