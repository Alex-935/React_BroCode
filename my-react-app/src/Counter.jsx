import React, {useState} from "react";

function Counter() {

    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(counter+1);
    }
    const resetCounter = () => {
        setCounter(0);
    }
    const decrementCounter = () => {
        setCounter(counter-1);
    }

    return(
        <div className="counter-container">
            <p className="counter-display">Value: {counter}</p>
            <button className="counter-button" onClick={incrementCounter}>Increment</button>
            <button className="counter-button" onClick={resetCounter}>Reset</button>
            <button className="counter-button" onClick={decrementCounter}>Decrement</button>
        </div>
    );
}
export default Counter;