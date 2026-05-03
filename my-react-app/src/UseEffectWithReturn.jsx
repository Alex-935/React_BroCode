
import React, {useState, useEffect} from 'react';

function UseEffectWithReturn() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {

        window.addEventListener("resize", handleResize);
        console.log("Event listener added");

        // normally an event listener would be generated on every single resize
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event listener removed");
        }
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (
        <>
            <P>Window Width: {width}px</P>
            <p>Window Height: {height}px</p>
        </>
    );
}
export default UseEffectWithReturn;