import React, { useState } from "react";
import Tarefas from "./components/Tarefas";
import './App.css';

const App = () => {
  // let message = 'tá rodando'
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Tomar café",
      completed: true,
    },
    {
      id: "2",
      title: "Estudar",
      completed: false,
    },
  ]);

  return (
    <>
      <div className="container">
        <Tarefas tasks={tasks}/>
      </div>
    </>
  );
};

export default App;
