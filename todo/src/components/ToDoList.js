import React, { useReducer, useState } from 'react';
import ToDo from './ToDo';
import { initialState, todoReducer, ADD_TASK } from '../reducers';

function ToDoList() {

  const [todoState, dispatch] = useReducer(todoReducer, initialState);
  const [newTodoText, setNewTodoText] = useState("");

  const handleCHanges = (e=>{
    setNewTodoText(e.target.value)
  })

  return (
    <div>
      <h2> To Do List: </h2>
      {todoState.tasks.map((todo)=>(
        <ToDo key={todo.id} todo={todo.item} />
      ))}
      <input type="text" placeholder="enter new task" value = {newTodoText} onChange={handleCHanges}/>  
      <button onClick = {
        (e)=>{
          e.preventDefault();
          dispatch({type: ADD_TASK, payload:newTodoText });
        }
      }> Add Task </button>
    </div>

  );
}



export default ToDoList;
