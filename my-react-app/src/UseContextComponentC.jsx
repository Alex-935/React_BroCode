/*
    useContext() = React hook that allows you to share values between multiple levels
                   of components without passing props through each level    
*/

import React, {useContext} from 'react';
import { UserContext } from './UseContextComponentA';
import UseContextComponentD from './UseContextComponentD';

function UseContextComponentC() {
// Using Props: function UseContextComponentC(props) {

    const user = useContext(UserContext);

    return (
        <div className="box">
            <h1>Component C</h1>
            <h2>{`Hello Again ${user}`}</h2>
            <UseContextComponentD />
        </div>
        // Using props: <UseContextComponentD user={props.user}/>
    );
}
export default UseContextComponentC;