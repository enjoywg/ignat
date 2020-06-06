import React from 'react';
import classes from "./Todolist.module.css";
import {FilterValuesType} from "../../../App";

export type TaskType = {
    id: number
    n: string
    p: string
}
type PropsType = {
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    changeFilter: (value: FilterValuesType) => void
}
function Todolist(props: PropsType) {
    return (
        <div className={classes.todolist}>
            <ul>
                {
                    props.tasks.map(t => <li key={t.id}>
                        <span>{t.n} - </span>
                        <span>{t.p} </span>
                        <button onClick={ () => {props.removeTask(t.id)}}>x</button></li>)
                }
            </ul>
            <div>
                <button onClick={ () => {props.changeFilter("all")}}>All</button>
                <button onClick={ () => {props.changeFilter("hight")}}>Hight</button>
                <button onClick={ () => {props.changeFilter("middle")}}>Middle</button>
                <button onClick={ () => {props.changeFilter("low")}}>Low</button>
            </div>
        </div>
    );
}

export default Todolist;
