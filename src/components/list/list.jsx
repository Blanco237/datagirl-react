import React from "react";
import Button from "../button/Button";
import classes from './list.module.css'
import globals from '../../components/components.module.css'

function List(props) {

    return (
        <ul className={`${classes.body} ${globals['flex-column']}`}>
            {props.items.map((item) => {
                return (<li>{item}</li>)
            })}
            <button>Some button</button>
            <Button title="Some other button" />
        </ul>
    )
}

export default List;