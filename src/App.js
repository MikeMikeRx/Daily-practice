import React from 'react'
import { useState } from 'react'

const App = () => {
  const[ToDo, setToDo] = useState({text:""})
  
  return (
    <div>
      <input type="text" />
      <input type="submit" />
    </div>
  )
}

export default App