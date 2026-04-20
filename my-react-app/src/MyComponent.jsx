/*
React Hook = Special function that allows functional components to use react
             features without writing class components (React v16.8)
             (useState, useEffect, useContext, useReducer, useCallback, and more...)

useState() = A react hook that allows the creation of a stateful variable 
             AND a setter function to update its value in the Virtual DOM
             [name, setName]
*/

import React, {useState} from "react";

function MyComponent(){

    // useState returns an array with a variable and a setter
    // using array destructuring to destructure the variable and name setter
    //setState triggers a rerender of the virtual dom when the setter updates a value
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false); 

    const updateName = () => {
        setName("Bro");
    }

    const incrementAge = () => {
        setAge(age+1)
    }
    const decrementAge = () => {
        setAge(age-1)
    }
    const resetAge = () => {
        setAge(0)
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed)
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment</button>
            <button onClick={resetAge}>Reset</button>
            <button onClick={decrementAge}>Decrement</button>

            <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Change Employment Status</button>
        </div>
    );
}

export default MyComponent;