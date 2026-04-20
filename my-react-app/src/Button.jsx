
function Button (){

    /*
    const handleClick2 = (name) => {
        console.log(`${name}, stop clicking me`);
    }
    return(
        <button onClick={() => handleClick2("Bro")}>Click Me</button>
    );*/


    /*
    let count = 0;

    const handleClick = (name) => {
        if (count < 3) {
            count ++;
            console.log(`${name}, you clicked me ${count} times.`);
        }
        else{
            console.log("Stop clicking me");
        }
    };

    return(<button onClick={() => handleClick("Bro")}>Click Me</button>)
    */

    // We are passed the event by default for onClick
    //const handleClick = (e) => console.log(e);
    const handleClick = (e) => e.target.textContent = "Ouch";

    // When we have a paramater, we need to wrap it in an arrow function
    return(<button onDoubleClick={(e) => handleClick(e)}>Click Me</button>);
};

export default Button;