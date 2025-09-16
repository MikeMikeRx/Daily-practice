import React from 'react'
import { useState } from 'react'

const App = () => {
  const[toDo, setToDo] = useState({text:""})
  const[allTasks, setAllTasks] = useState([])

  const handleChange = (e) =>{
    setToDo({text: e.target.value})    
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault()

    const newTask = {
      ...toDo, 
      id: new Date().getTime(), 
      done: false}

    setAllTasks([...allTasks, newTask])      
  }

  return <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={toDo.text}/>
      <input type="submit" />
    </form>
  </div>  
}

const ListTasks = () =>{
  return 
}

export default App