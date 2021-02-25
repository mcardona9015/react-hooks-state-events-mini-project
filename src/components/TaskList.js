import React, { useState } from "react";
import Task from "./Task";


function TaskList( { currentTasks, setCurrentTasks, filteredTasks, setFilteredTasks } ) {
  

  const allTasks = filteredTasks.map( (task) => {
    return <Task setFilteredTasks={setFilteredTasks} setCurrentTasks={setCurrentTasks}currentTasks={currentTasks} key={task.text} text={task.text} category={task.category}/>
  })
  
  return (
    <div className="tasks">
      <ul>
        {allTasks}
      </ul>
    </div>
  );
}

export default TaskList;
