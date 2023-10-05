import React, { useState } from 'react';

function TodoForm({ onAddTask }) {
  const [newTask, setNewTask] = useState('');

  const handleChange = event => {
    setNewTask(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    
    // Check if the newTask is not empty before adding it
    if (newTask.trim() === '') {
      return;
    }

    onAddTask(newTask);
    setNewTask('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={handleChange}
        className="todo-input"
      />
      <button type="submit" className="add-button">Add</button>
    </form>
  );
}

export default TodoForm;
