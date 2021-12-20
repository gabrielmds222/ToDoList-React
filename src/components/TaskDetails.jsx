import React from "react";

import Button from "./Button";

// import "./TaskDetails.css";

const TaskDetails = () => {

	return (
		<>
			<div className="back-button-container">
				<Button>Voltar</Button>
			</div>
			<div className="task-details-container">
				<h2></h2>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
					minima eius magnam culpa sequi explicabo.
				</p>
			</div>
		</>
	);
};

export default TaskDetails;