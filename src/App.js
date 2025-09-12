import React from 'react'
import { useState } from 'react'

const App = () => {
  const[toDo, setToDo] = useState({text:""})
  const[allToDos, setAllToDos] = useState([])
  
  return (
    <div>
      <input type="text" />
      <input type="submit" />
    </div>
  )
}

export default App