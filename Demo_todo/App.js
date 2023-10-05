import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './styles.css'; // Import the CSS file

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  // Function to add a new task to the tasks state
  const addTask = text => {
    // Generate a unique ID for the new task (You can use libraries like uuid)
    const taskId = tasks.length + 1;

    // Create the new task object
    const newTask = {
      id: taskId,
      text: text,
      completed: false,
    };

    // Update the tasks state by adding the new task
    setTasks([...tasks, newTask]);
  };

  // Function to toggle task completion status
  const toggleComplete = taskId => {
    // Update the tasks state by toggling the completion status of the specified task
    setTasks(prevTasks => {
      return prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
    });
  };

  // Function to delete a task
  const deleteTask = taskId => {
    // Update the tasks state by removing the specified task
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="app-container"> {/* Apply CSS class to the container */}
      <h1>Todo List</h1>
      <TodoForm onAddTask={addTask} />
      <TodoList tasks={tasks} filter={filter} onToggleComplete={toggleComplete} onDelete={deleteTask} />
    </div>
  );
}

export default App;
