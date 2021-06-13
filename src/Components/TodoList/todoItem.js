import React from 'react'
import './todolist.css';
const TodoItem = ({todo}) => {
  const {value} = todo;
  return (
    <li className="item">
    <div className="info">{value}</div>
    </li>
   )
 }

  export default TodoItem
