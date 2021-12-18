import React from "react";

import "./Tarefa.css";

const Tarefa = ({ task, handleTaskClick }) => {
    return (
        // <div className="task-container">{task.title}</div>
        <div 
        className="task-container"
        style={task.completed ? {borderLeft: "6px solid yellow"} : {}}
        >
           <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
           </div>
        </div>
    );
};

export default Tarefa;
