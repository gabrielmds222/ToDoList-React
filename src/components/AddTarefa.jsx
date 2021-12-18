import React, { useState } from "react";

import "./AddTarefa.css"
import Button from "./Button";

const AddTarefa = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
    }

    return (
        <div className="add-task-container">
            <input 
            onChange={handleInputChange} 
            value={inputData}
            type="text" 
            className="add-task-input"/>
            <div className="add-task-button-container">
            <Button onClick={handleAddTaskClick}> Adicionar </Button>
            </div>
        </div>
    );
};

export default AddTarefa;