import React, { useState } from 'react';


export default function TodoList() {

    const [todo, setTodo] = useState({desc: '', date:''});
    const [todos, setTodos] = useState([]);
  
    const addTodo = (event) => {
      event.preventDefault();
      setTodos([...todos, todo])
    }
  
    const inputChenged = (event) => {
      setTodo({...todo, [event.target.name]: event.target.value});
    }

    const deleteTodo = (rowIndex) => {
        setTodos(todos.filter((todo, index) => index !== rowIndex))
    }

    return(
        <div>
            <form onSubmit={addTodo}>
                <input type='date' name='date' value={todo.date} onChange={inputChenged}/>
                <input type='text' name='desc' value={todo.desc} onChange={inputChenged}/>
                <input type='submit' value='Add' />
            </form>
            <table>
                <tbody>
                    <tr>
                        <th>Description</th>
                        <th>Date</th>
                    </tr>
                    {
                    todos.map((todo, index) => 
                    <tr key={index}>
                        <td>{todo.desc}</td>
                        <td>{todo.date}</td>
                        <td><input type='button' onClick={() => deleteTodo(index)} value='Delete'></input></td>
                    </tr>
                    )
                    }
                </tbody>
            </table>
        </div>
    )
}


