import React, { useState } from 'react';
import './App.css'

function App() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function handleAddTask() {
    if (input !== '') {
      if (editIndex !== null) {
        const updatedTasks = tasks.map((task, index) =>
          index === editIndex ? input : task
        );
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks([...tasks, input]);
      }
      setInput('');
    }
  }

  function handleEditTask(index) {
    setInput(tasks[index]);
    setEditIndex(index);
  }

  function handleDeleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  return (
    <>
      <h2>Input Task</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Enter name of task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>

      <button onClick={handleAddTask}>{editIndex !== null ? 'Update' : 'Add'}</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index} className='list'>
            {'\u2022  ' + task + '  '} 
            <button className='options' onClick={() => handleEditTask(index)}>✎</button>
            <button className='options' onClick={() => handleDeleteTask(index)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
