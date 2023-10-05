import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, filter, onToggleComplete, onDelete }) {
  const filteredTasks = filter === 'completed'
    ? tasks.filter(task => task.completed)
    : filter === 'active'
    ? tasks.filter(task => !task.completed)
    : tasks;

  return (
    <div>
      {filteredTasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TodoList;
