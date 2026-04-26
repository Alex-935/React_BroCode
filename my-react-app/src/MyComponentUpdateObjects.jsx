
import React, {useState} from 'react';

function MyComponentUpdateObjects() {

    const [car, setCar] = useState({year:2024, make:"Ford", model:"Mustang"});

    function handleYearChange(event) {
        // spreader makes a new object with all previous values
        // otherwise would overrite the object just to have a year
        // we surround the {} with () to tell the arrow function its an object and not a multi-line
        setCar(c => ({...c, year: event.target.value}));
    }
    function handleMakeChange(event) {
        setCar(c => ({...c, make: event.target.value}));
    }
    function handleModelChange(event) {
        setCar(c => ({... c, model: event.target.value}));
    }

    return (
        <div>
            <p>Your favourite car is: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChange}/><br/>
            <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
            <input type="text" value={car.model} onChange={handleModelChange}/><br/>
        </div>
    );
}
export default MyComponentUpdateObjects;