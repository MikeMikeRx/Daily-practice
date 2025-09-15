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
      id: new Date().getTime()
    }

    setAllTasks([...allTasks, newTask])
  }


  return <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={toDo.text}/>
      <input type="submit" />
    </form>

    {allTasks.map((item) => (
      <ToDoList key={item.id} id={item.id} text={item.text}/>
    ))}
  </div>
  
}

const ToDoList = () => {
  return <div>
    <h2>TEXT</h2>
    <input type="checkbox" />
    <button>REMOVE</button>
  </div>
}

export default App