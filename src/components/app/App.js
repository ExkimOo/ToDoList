// import './App.css';
// import Header from '../header';
import Task from '../task';
import { useState } from 'react';

function App() {

  const [inputText, setInputText] = useState('');
  const [tasks, setTask] = useState([
    'Learn React'
  ]);
  
  function handleChange(event) {
      setInputText(event.target.value);
  }
  
  return (
    <div className="App">
      <header>
            <div>
                <h1>
                    To Do List
                </h1>
            </div>
            <div>
                <input
                    type='text' 
                    placeholder='Type...'
                    value={inputText}
                    onChange={handleChange}/>
                <button onClick={() => {
                  // console.log([...tasks, inputText]);
                  setTask([...tasks, inputText]);
                }}>
                    Add
                </button>
            </div>
        </header>
      <ul>
        {tasks.map((task) => (
          <Task 
          message={task} 
          id={0} 
          checked={0} />))}
        
      </ul>
    </div>
  );
}



export default App;
