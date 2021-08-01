import { useState } from 'react';
import './App.css'

function App() {

  let [inputText, setInputText] = useState('');
  let [tasks, setTasks] = useState([
    {name: 'Learn React', state: false},
    {name: 'With me', state: false},
    {name: 'Properly', state: false},
  ]);
  console.log(tasks);

  function toggleTask(index) {
    console.log('Here');
    setTasks((prev) => [...prev.slice(0, index), {name: prev[index].name, state: !prev[index].state}, ...prev.slice(index+1)]);
  }

  function deleteTask(index, e) {
    e.stopPropagation();
    setTasks((prev) => [...prev.slice(0, index), ...prev.slice(index+1)]);
  }
  
  function handleChange(e) {
      setInputText(e.target.value);
  }
  
  return (
    <div className="app">
      <header>
        <h1>
          To Do List
        </h1> 
        <div>
          <input
              type='text' 
              placeholder='Type...'
              value={inputText}
              onChange={handleChange}/>
          <button onClick={() => {
            if (inputText) {
              setTasks([...tasks, {name: inputText, state: false}]);
              // setStates([...states, false]);
            }
          }}>
              Add
          </button>
        </div>
      </header>
      <ul> 
          {tasks.map((task, index) => {
          return(
            <li 
              key={index}
              className={tasks[index].state === true ? 'checked' : 'unchecked'} 
              onClick={() => toggleTask(index)}>  
                {task.name}
                <span className="close" onClick={(e) => deleteTask(index, e)}>×</span>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
