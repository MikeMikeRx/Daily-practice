import React from 'react'
import { useState } from 'react'

const App = () => {
  const[toDo, setTodo] = useState({text:""})

  return <div>
    <form action="">
      <input type="text" />
      <input type="submit" />
    </form>
  </div>  
}

export default App