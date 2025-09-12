import React from 'react'
import { useState } from 'react'

const App = () => {
  const[toDo, setToDo] = useState({text:""})
  const[allToDos, setAllToDos] = useState([])
  
  const handleChange = (e) => {
    // e.preventDefault()
    const task = e.target.value
    setToDo({text: task})
    // console.log(toDo);    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setAllToDos([...allToDos, {toDo, id: new Date.getTime()}])
    console.log(allToDos);    
  }

  return (
    <div>
      <form>
        <input type="text" onChange={handleChange} value={toDo.text}/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default App