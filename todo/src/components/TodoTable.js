import React from "react";

function TodoTable(props) {
    return(
        <table>
                <tbody>
                    <tr>
                        <th>Description</th>
                        <th>Date</th>
                    </tr>
                    {
                    props.todos.map((todo, index) => 
                    <tr key={index}>
                        <td>{todo.desc}</td>
                        <td>{todo.date}</td>
                        <td><input type='button' onClick={() => props.deleteTodo(index)} value='Delete'></input></td>
                    </tr>
                    )
                    }
                </tbody>
            </table>
    );
}
//

export default TodoTable;