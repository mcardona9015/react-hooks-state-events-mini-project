import React from "react";
import Task from "./Task";


function TaskList( { categories, tasks } ) {
  const allTasks = tasks.map( (task) => {
    return <Task key={task.text} text={task.text} category={task.category}/>
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
