import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {useSelector,useDispatch} from "react-redux"
import {addTodo, completeTodo, deleteTodo} from './actions/todoAction';


function App() {
  const [task, setTask] = useState("")
  const [filter, setFilter]= useState("all")
  const todos=useSelector(state=>state.todoReducer)
  const dispatch=useDispatch()
  return (
    <div className="App">
      
        <input typ="text" placenholder="add task..."onchange={(e)=>setTask(e.target.value)}/>
         <button onClick={()=>dispatch(addTodo(task))}>add task</button>
         <button onClick={()=>setFilter("all")}>all</button>
         <button onClick={()=>setFilter("don")}>done</button>
         <button onClick={()=>setFilter("undone")}>undoen</button>
        { filter==="all" ? todos.map(el=><div>
          <h2>{el.title}</h2>
          <button onClick={()=>dispatch(deleteTodo(el.id))}>delete</button>
          <button onClick={()=>dispatch(completeTodo(el.id))}>{el.complete? "done":"undoen"}</button>
         </div>) : filter==="done" ? todos.filter(el=>el.complete===true)
         .map(el=><div>
          <h2>{el.title}</h2>
          <button onClick={()=>dispatch(deleteTodo(el.id))}>delete</button>
          <button onClick={()=>dispatch(completeTodo(el.id))}>{el.complete? "done":"undoen"}</button>
         </div>) : filter==="done" ? todos.filter(el=>el.complete===false)
         .map(el=><div>
          <h2>{el.title}</h2>
         <button onClick={()=>dispatch(deleteTodo(el.id))}>delete</button>
         <button onClick={()=>dispatch(completeTodo(el.id))}>{el.complete? "done":"undoen"}</button>
          </div>)  
   
 
      </div>)
    
  } 


export default App;
