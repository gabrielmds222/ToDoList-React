import React from "react";

import "./Tarefa.css";

const Tarefa = ({ task, handleTaskClick, handleTaskDeletion }) => {
    return (
        // <div className="task-container">{task.title}</div>
        <div 
        className="task-container"
        style={task.completed ? {borderLeft: "6px solid yellow"} : {}}
        >
           <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
           </div>

           <div className="buttons-container">
               <button className="remove-task-button" onClick={() => handleTaskDeletion(task.id)}> X </button>
           </div>

        </div>
    );
};

export default Tarefa;
