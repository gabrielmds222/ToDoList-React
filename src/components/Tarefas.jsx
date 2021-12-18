import React from "react";
import Tarefa from "./Tarefa"

const Tarefas = ({ tasks }) => {
    return (
        <>
            {tasks.map((task) => (<Tarefa task={task} />))}
        </>
    );
};

export default Tarefas;