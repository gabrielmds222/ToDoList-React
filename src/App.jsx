import React, { useState } from "react";

import Tarefas from "./components/Tarefas";
import AddTarefa from "./components/AddTarefa";

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
    {
      id: "3",
      title: "Tomar banho",
      completed: false,
    },
  ]);

  return (
    <>
      <div className="container">
        <AddTarefa />
        <Tarefas tasks={tasks}/>
      </div>
    </>
  );
};

export default App;
