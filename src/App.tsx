import React from 'react';
import './App.css';
import Fio from "./components/ht01/Fio/Fio";
import TelegramMessage from "./components/ht01/TelegramMessage/TelegramMessage";


function App() {
  return (
    <div className="App">
        <div>
            <Fio name="Сидоров Иван Петрович"/>
        </div>
        <div>
            <TelegramMessage name="nick" text="text" ava="img.jpg" timeHours={12} timeMinutes={11}/>
        </div>
    </div>
  );
}

export default App;
