import React from 'react'
import TodoItem from './todoItem';
import './todolist.css';
const TodoList = ({todos}) => {
  return (

  <ul className="list">
    {todos.map(todo=>{
      return(
        <TodoItem
         key={todo.id}
         todo={todo}
         />);
       })
   }
  </ul>

 )}

export default TodoList
