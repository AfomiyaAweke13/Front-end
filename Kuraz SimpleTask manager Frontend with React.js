import React, { useState } from 'react';

function TaskManager() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Task Manager', completed: true },
  ]);
  const [newTask, setNewTask] = useState('');
  const addTask = () => {
    const trimmed = newTask.trim();
    if (!trimmed) return;

    setTasks([
      ...tasks,
      { id: Date.now(), text: trimmed, completed: false },
    ]);
    setNewTask('');
  };

  // Toggle completed status
  const toggleCompleted = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', fontFamily: 'Arial' }}>
      <h2>Task Manager</h2>

      <div style={{ display: 'flex', marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Add new task"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addTask()}
          style={{ flexGrow: 1, padding: '0.5rem' }}
        />
        <button
          onClick={addTask}
          style={{ padding: '0.5rem 1rem', marginLeft: '0.5rem' }}
        >
          Add
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map(task => (
          <li
            key={task.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '0.5rem',
              padding: '0.5rem',
              borderRadius: '4px',
              backgroundColor: task.completed ? '#e0e0e0' : 'transparent',
              color: task.completed ? 'gray' : 'black',
              textDecoration: task.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
          >
            <span
              style={{ flexGrow: 1 }}
              onClick={() => toggleCompleted(task.id)}
              title="Click to toggle complete"
            >
              {task.text}
            </span>

            <button
              onClick={() => deleteTask(task.id)}
              style={{
                marginLeft: '0.5rem',
                background: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '3px',
                padding: '0.2rem 0.5rem',
                cursor: 'pointer',
              }}
              title="Delete task"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
