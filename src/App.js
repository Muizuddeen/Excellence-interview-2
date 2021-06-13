import React,{ useState, useEffect } from "react";
import Header from "./Components/Header/header";
import TodoForm from "./Components/TodoForm/todoform";
import TodoList from "./Components/TodoList/todolist";
import {v4 as uuidv4} from "uuid";

const initialValue = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState(initialValue);

  useEffect(() => {
      console.log("called useEffect");
      localStorage.setItem("todos", JSON.stringify(todos));
    },[todos]
  );
  const handleChange = (e) =>{
    setValue(e.target.value);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(value !== ""){
    const singleValue = {id: uuidv4(), value};
    setTodos([...todos, singleValue ])
  }
  setValue("");
}


  return (
    <div className="App">
  <Header/>
  <TodoForm
  value ={value}
  handleChange={handleChange}
  handleSubmit={handleSubmit}/>

  <TodoList todos={todos}/>
    </div>
  );
};

export default App;
