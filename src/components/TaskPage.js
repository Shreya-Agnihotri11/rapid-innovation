import React, { useState } from 'react';

const TaskPage = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'React JS Setup and Routing', completed: false },
    { id: 2, text: 'Contact Us Page with Form', completed: false },
    { id: 3, text: 'Responsive Landing Page Design', completed: false },
    { id: 4, text: 'Redux and State Management Task: Theme Toggle Feature', completed: false },
    { id: 5, text: 'Styling with Styled Components', completed: false }
  ]);

  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleCompleted = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="task-page">
      <h2>Task Page</h2>
      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompleted(task.id)}
            />
            <span>{task.text}</span>
            <button style={{backgroundColor: 'green'}} onClick={() => toggleCompleted(task.id)}>Complete</button>
            <button style={{backgroundColor: 'red'}} onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskPage;