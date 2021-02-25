import React from "react";

function NewTaskForm({ categories }) {
  const categoryOptions = categories.map(category => {
    return <option value={category}> {category} </option>
  })

  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
