import React from 'react';

function TodoItem({ task, onToggleComplete, onDelete }) {
  const handleToggle = () => {
    onToggleComplete(task.id);
  };

  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <div className="todo-item"> {/* Apply CSS class to the todo item */}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TodoItem;
