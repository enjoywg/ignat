import React, {useState} from 'react';
import './App.css';
import Fio from "./components/ht01/Fio/Fio";
import TelegramMessage from "./components/ht01/TelegramMessage/TelegramMessage";
import Todolist, {TaskType} from "./components/ht02/Todolist/Todolist";

export type FilterValuesType = "hight" | "middle" | "low" | "all"

function App() {
    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, n: "Работа", p: "hight"},
        {id: 2, n: "Аниме", p: "low"},
        {id: 3, n: "Игры", p: "middle"},
        {id: 4, n: "React", p: "hight"},
        {id: 5, n: "HTML", p: "low"}
    ])

    let [filter, setFilter] = useState<FilterValuesType>("all")

    let tasksForTodolist = tasks

    if (filter === "hight") {
        tasksForTodolist = tasks.filter(t => t.p === "hight")
    }
    if (filter === "middle") {
        tasksForTodolist = tasks.filter(t => t.p === "middle")
    }
    if (filter === "low") {
        tasksForTodolist = tasks.filter(t => t.p === "low")
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value)
    }

    function removeTask (id: number) {
        let filteredTasks = tasks.filter(t => t.id != id)
        setTasks(filteredTasks)
    }

    let text = "Hi. How are you? Hi. How are you? Hi. How are you? Hi. How are you? Hi. How are you? xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxfdsvfdvbgfkjfgknbnkjgfkjgfnbk"
    return (
        <div className="App">
            <div>
                <Fio name="Сидоров Иван Петрович"/>
            </div>
            <div>
                <TelegramMessage name="Piter" text={text}
                                 ava="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg"
                                 timeHours={12} timeMinutes={11}/>
            </div>
            <div>
                <Todolist tasks={tasksForTodolist} changeFilter={changeFilter} removeTask={removeTask}/>
            </div>
        </div>
    );
}

export default App;
