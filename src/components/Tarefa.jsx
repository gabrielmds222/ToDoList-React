import React from "react";

import "./Tarefa.css";

const Tarefa = ({ task }) => {
    return (
        <div className="task-container">{task.title}</div>
    );
};

export default Tarefa;
