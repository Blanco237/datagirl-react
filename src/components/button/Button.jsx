import React from "react";
import classes from './button.module.css'

function Button (props) {
    console.log(props);

    function alertTitle() {
        alert(props.title)
    }
    
 return (
    <button onClick={alertTitle} className={classes.btn} >{props.title}</button>
 )
}


export default Button