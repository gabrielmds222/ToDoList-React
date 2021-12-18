import React from "react";
import Tarefa from "./Tarefa"

const Tarefas = ({ tasks, handleTaskClick }) => {
    return (
        <>
            {tasks.map((task) => (<Tarefa task={task} handleTaskClick={handleTaskClick}/>))}
        </>
    );
};

export default Tarefas;