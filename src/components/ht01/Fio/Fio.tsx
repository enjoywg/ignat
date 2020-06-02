import React from 'react';
import classes from "./Fio.module.css";

type FioType = {
    name: string
}

function Fio (props: FioType) {
    return (
        <div>
            <div className={classes.name}>
                {props.name}
            </div>
        </div>
    );
}

export default Fio;
