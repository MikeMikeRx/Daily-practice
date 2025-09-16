import React from 'react'
import { useState } from 'react'

const App = () => {
  const[toDo, setTodo] = useState({text:""})
  const[allTasks, setAllTasks] = useState([])

  const handleChange = (e) =>{
    setTodo(e.target.value)
  } 

  return <div>
    <form action="">
      <input type="text" />
      <input type="submit" />
    </form>
  </div>  
}

export default App