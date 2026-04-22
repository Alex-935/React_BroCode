/*
React Hook = Special function that allows functional components to use react
             features without writing class components (React v16.8)
             (useState, useEffect, useContext, useReducer, useCallback, and more...)

useState() = A react hook that allows the creation of a stateful variable 
             AND a setter function to update its value in the Virtual DOM
             [name, setName]

updater function = A function passed as an arguement to setState() usually
                   ex. setYear(arrow function)
                   Allow for safe updates based on the previous state.
                   Used with multiple state updates and asynchronous functions
                   Good practice to use updater functions
*/

import React, {useState} from "react";

function MyComponentUpdater(){

    // useState returns an array with a variable and a setter
    // using array destructuring to destructure the variable and name setter
    //setState triggers a rerender of the virtual dom when the setter updates a value
    const [count, setCount] = useState(0);

    function increment() {
        /*
        this will only update once as react bundles react together for performance reasons

        Takes the pending state, not current state to calculate next state
        React puts you updater function in a queue (waiting in line)
        During the next render, it will call them in the same order.

        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        */
       // by convention, we either put prev infront of the state variable, or use its first letter
        setCount(prevCount => prevCount + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }
    function decrement() {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }
    function reset() {
        setCount(0)      
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default MyComponentUpdater;