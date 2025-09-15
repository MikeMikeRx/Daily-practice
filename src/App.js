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

  const handleRemove = (id) => {
    setAllTasks(allTasks.filter(a => a.id !== id))
  }

  const total = allTasks.length

  return <div>
    <h1>Total:{total}</h1>
    <h1>Tasks to do:</h1>
    <h1>Tasks done:</h1>

    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={toDo.text}/>
      <input type="submit" />
    </form>

    {allTasks.map((item) => (
      <ToDoList key={item.id} id={item.id} text={item.text} done={item.done} handleToggle={handleToggle} handleRemove={handleRemove}/>
    ))}
  </div>
  
}

const ToDoList = ({ id, text, done, handleToggle, handleRemove }) => {
  return <div>
    <h2>{text}</h2>
    <input type="checkbox" onChange={()=>handleToggle(id)} value={done}/>
    <button onClick={()=>handleRemove(id)}>REMOVE</button>
  </div>
}

export default App