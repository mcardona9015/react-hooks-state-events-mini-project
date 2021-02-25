import React, { useState } from "react";

function CategoryFilter({ categories, currentTasks, setCurrentTasks, filteredTasks, setFilteredTasks }) {
  const [selected, setSelected] = useState("All")

  const categoryButtons = categories.map(category => {
    return <button 
    className={selected === category ? 'selected' : ''} 
    onClick={() => handleClick(category)}>{category}
    </button>
  })

  function handleClick(category) {
    setSelected(category)
    const newTasks = category === "All" ? currentTasks : currentTasks.filter(task => task.category === category)
    setFilteredTasks(newTasks)
  }


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
