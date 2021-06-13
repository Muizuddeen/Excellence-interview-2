import React from 'react';
import './todoform.css';
const TodoForm = ({value, handleChange, handleSubmit}) => {
  return (
    <div className="todoform">
    <form className="form" onSubmit ={handleSubmit}>

   <input type="text"
    placeholder = "Add to do...."
    onChange= {handleChange}
    value={value}
    />
   <input type ="submit"
    value="Button"
    className ="button"/>

     </form>
     </div>
  )
}



export default TodoForm;
