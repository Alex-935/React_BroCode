import styles from './MyButton.module.css'

// CSS with modules 

// inline styles
/*
const styles = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
}*/


function MyButton() {

    return(
        // module 
        <button className={styles.button}>Click Me</button>
        // inline styles
        //<button className={styles}>Click Me</button>
    );
}

export default MyButton;