import React from 'react';
import classes from "./TelegramMessage.module.css";

type TelegramMessageType = {
    name: string
    text: string
    timeHours: number
    timeMinutes: number
    ava: string
}

function TelegramMessage(props: TelegramMessageType) {
    return (
        <div className={classes.message}>
            <div className={classes.ava}>
                <img src={props.ava} />
            </div>
            <div className={classes.textBox}>
                <div className={classes.name}>
                    {props.name}
                </div>
                <div className={classes.text}>
                    {props.text}
                </div>
                <div className={classes.time}>
                    {props.timeHours}:{props.timeMinutes}
                </div>
            </div>
        </div>
    );
}

export default TelegramMessage;
