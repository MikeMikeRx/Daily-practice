import React from 'react'
import { useState } from 'react'

const App = () => {
  const[toDo, setToDo] = useState({text:""})
  const[allTasks, setAllTasks] = useState([])

  const handleChange = (e) => {
    setToDo({text: e.target.value})   
  }

  const handleSubmit = (e) =>{
    e.preventDefault()

    const newTask = {
      text: toDo.text, 
      id: new Date().getTime(),
      done: false
    }      
    
    setAllTasks([...allTasks, newTask])
  }

  const handleToggle = (id) =>{
    const updatedDone = allTasks.map(item => item.id === id ? {...item, done: !item.done} : item)
    setAllTasks(updatedDone)      
  }


  return <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={toDo.text}/>
      <input type="submit" />
    </form>

    {allTasks.map((item) => (
      <ToDoList key={item.id} id={item.id} text={item.text} done={item.done} handleToggle={handleToggle}/>
    ))}
  </div>
  
}

const ToDoList = ({ id, text, done, handleToggle }) => {
  return <div>
    <h2>{text}</h2>
    <input type="checkbox" onChange={()=>handleToggle(id)} value={done}/>
    <button>REMOVE</button>
  </div>
}

export default App