/*
    useContext() = React hook that allows you to share values between multiple levels
                   of components without passing props through each level    
*/

import React, {useState, useContext} from 'react';
import UseContextComponentC from "./UseContextComponentC.jsx";

function UseContextComponentB() {
// Using Props: function UseContextComponentB(props) {

    return (
        <div className="box">
            <h1>Component B</h1>
            <UseContextComponentC />
        </div>
        // Using props: <UseContextComponentC user={props.user}/>
    );
}
export default UseContextComponentB;