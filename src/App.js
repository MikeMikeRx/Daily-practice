import React from 'react'
import { useState } from 'react'

const App = () => {
  const[toDo, setToDo] = useState({text:""})
  const[allTasks, setAllTasks] = useState([])

  const handleChange = (e) => {
    setToDo(e.target.value)
    console.log(toDo);    
  }


  return <div>
    <form>
      <input type="text" />
      <input type="submit" />
    </form>
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