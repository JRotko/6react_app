import React, { useState } from 'react';
import './App.css';
import Todotable from './components/Todolist'

function App() {
  const [todo, setTodo] = useState({desc: '', date:''});
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo])
  }

    const inputChenged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  return (
    <div className="App">
      <form onSubmit={addTodo}>
      <input type='date' name='date' value={todo.date} onChange={inputChenged}/>
        <input type='text' name='desc' value={todo.desc} onChange={inputChenged}/>
        <input type='submit' value='Add' />
      </form>
      <Todotable todos={todos} />
    </div>
  );
}

export default App;
