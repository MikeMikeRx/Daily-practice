import React from 'react'
import { useState } from 'react'

const App = () => {
  const[toDo, setTodo] = useState({text:""})
  const[allTasks, setAllTasks] = useState([])

  const handleChange = (e) =>{
    setTodo(e.target.value)
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault()

    
  }

  return <div>
    <form action="">
      <input type="text" onChange={handleChange}/>
      <input type="submit" />
    </form>
  </div>  
}

export default App