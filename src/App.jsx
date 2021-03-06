import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

import Tarefas from "./components/Tarefas";
import AddTarefa from "./components/AddTarefa";
import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails";

import './App.css';

const App = () => {
  // let message = 'tá rodando'
  const [tasks, setTasks] = useState([
    // {
    //   id: "1",
    //   title: "Tomar café",
    //   completed: true,
    // },
    // {
    //   id: "2",
    //   title: "Estudar",
    //   completed: false,
    // },
    // {
    //   id: "3",
    //   title: "Tomar banho",
    //   completed: false,
    // },
  ]);

  useEffect(() => {
    const fetchTasks = async () => {
			const { data } = await axios.get(
				"https://jsonplaceholder.cypress.io/todos?_limit=10"
			);

      setTasks(data);
		};

    fetchTasks();
  }, []);

  // Essa função vai alterar o valor das tarefas de true para false e vice-versa
  const handleTaskClick = (taskId) => {
		const newTasks = tasks.map((task) => {
			if (task.id === taskId) return { ...task, completed: !task.completed };

			return task;
		});

		setTasks(newTasks);
	};

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

  // Função para deletar as tarefas da lista
  const handleTaskDeletion = (taskId) => {
		const newTasks = tasks.filter((task) => task.id !== taskId);

		setTasks(newTasks);
	};

  return (
    <div className="container">
    <Header/>
    
          <AddTarefa handleTaskAddition={handleTaskAddition}/>
          <Tarefas 
          tasks={tasks} 
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}/>
    </div>
  );
};

export default App;
