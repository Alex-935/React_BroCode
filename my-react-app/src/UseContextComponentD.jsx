/*
    useContext() = React hook that allows you to share values between multiple levels
                   of components without passing props through each level    
*/

import React, {useContext} from 'react';
import { UserContext } from './UseContextComponentA';

function UseContextComponentD() {
// Using Props: function UseContextComponentD(props) {

    const user = useContext(UserContext);

    return (
        <div className="box">
            <h1>Component D</h1>
            <h2>{`Bye ${user}`}</h2>
        </div>
    );
}
export default UseContextComponentD;