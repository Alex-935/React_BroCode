/*
useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
              This component re-renders
              This component mounts (create and append a component to the DOM)
              The state of a value changes

    useEffect(function, [dependencies])

    1. useEffect(() => {})             - runs every re-render  
    2. useEffect(() => {}, [])         - runs only on mount
    3. useEffect(() => {}, [value])    - runs on mount + when value changes

    Uses:
    1. Event Listeners
    2. DOM manipulation
    3. Subscriptions (real-time updates)
    4. Fetching data from an API
    5. Clean up when a component unmounts
*/

import React, {useState, useEffect} from 'react';

function UseEffect() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    // uisng useEffect keeps your code more organised, also allows limiting on how often to run
    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count, color]);

    /*
    useEffect(() => {
        document.title = `Count: ${count} ${color}`;

        // if there are no dependencies, you can run a clean up code
        // to remove or free up features like eventListeners
        // happens before next render or after mount
        return(
            // some cleanup code
        );
    });*/

    function addCount() {
        setCount(c => c + 1);
    }
    function subtractCount() {
        setCount(c => c - 1);
    }
    function changeColour() {
        setColor(c => c === "green" ? "red" : "green");
    }

    return (
        <>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button>
            <br/>
            <button onClick={changeColour}>Change Colour</button>
        </>
    );
}
export default UseEffect;