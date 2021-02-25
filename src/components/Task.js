import React from "react";

function Task( {text, category, currentTasks, setCurrentTasks, setFilteredTasks} ) {

  function removeItem(taskText) {
    const newTasks = currentTasks.filter((task) => task.text !== taskText)
    setCurrentTasks(newTasks)
    setFilteredTasks(newTasks)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={() => removeItem(text)} className="delete">X</button>
    </div>
  );
}

export default Task;
