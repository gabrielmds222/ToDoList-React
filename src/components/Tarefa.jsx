import React from "react";
import {CgClose, CgCheckO} from 'react-icons/cg';
import {FiEdit} from 'react-icons/fi'
import "./Tarefa.css";

const Tarefa = ({ task, handleTaskClick, handleTaskDeletion }) => {
    return (
        // <div className="task-container">{task.title}</div>
        <div 
        className="task-container"
        style={task.completed ? {borderLeft: "6px solid yellow"} : {}}
        >
           <div className="task-title">
                {task.title}
           </div>

           <div className="buttons-container">
               
               <button className="check-task-button"  onClick={() => handleTaskClick(task.id)}> 
                    <CgCheckO/> 
               </button>

               <button className="edit-task-button"> 
                    <FiEdit/> 
               </button>

               <button className="remove-task-button" onClick={() => handleTaskDeletion(task.id)}>
                    <CgClose/> 
               </button>
           </div>

        </div>
    );
};

export default Tarefa;
