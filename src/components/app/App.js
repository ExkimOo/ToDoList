import { useState } from 'react';
import './App.css'
import '../task.css'

function App() {

  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState([
    'Learn React',
    'Hello there',
    '123'
  ]);
  const [states, setStates] = useState(['unchecked', 'unchecked', 'unchecked']);

  function toggleTask(index) {
      console.log(states);
      states(index) === 'unchecked' ? setStates(...states.slice(0, index), 'checked', ...states.slice(index+1)) : 
      setStates(...states.slice(0, index), 'unchecked', ...states.slice(index+1));
  }

  function deleteTask(index) {
    // console.log(...tasks.slice(0, index), ...tasks(index+1));
        // setTasks(...tasks.slice(0, index), ...tasks(index+1));
        // setStates(...states.slice(0, index), ...states(index+1));
  }
  
  function handleChange(event) {
      setInputText(event.target.value);
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
                  setTasks([...tasks, inputText]);
                  setStates([...states, 'unchecked']);
                }}>
                    Add
                </button>
            </div>
        </header>
      <ul>
             
        
        {/* {console.log(states)} */}
        {tasks.map((task, index) => {
          return(
            <li className='unchecked' onClick={toggleTask.bind(index)}>
              {task}
              <span className="close" onClick={deleteTask.bind(index)}>×</span>
            </li>
          )
        })}
      


        
        
        
      </ul>
    </div>
  );
}

export default App;
