import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid'

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

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  return (
    <>
      <div className="container">
        <AddTarefa handleTaskAddition={handleTaskAddition}/>
        <Tarefas tasks={tasks}/>
      </div>
    </>
  );
};

export default App;
