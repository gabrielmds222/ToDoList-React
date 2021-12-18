import React from "react";
import Tarefa from "./Tarefa"

const Tarefas = ({ tasks, handleTaskClick, handleTaskDeletion }) => {
    return (
        <>
            {tasks.map((task) => (<Tarefa task={task} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>))}
        </>
    );
};

export default Tarefas;