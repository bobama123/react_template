import React from "react";
import { useState } from "react";
import CounterDisplay from "./CounterDisplay"
import CountButton from "./CountButton"


const CounterImproved = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <CounterDisplay count={count} />
            <CountButton setCount={setCount} count={count} />
        </div>
    );
};

export default CounterImproved;