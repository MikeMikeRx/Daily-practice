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
    const newToDo = {toDo, id: new Date().getTime()}    
    setAllToDos( (allToDos) => {
      return [...allToDos, newToDo]
    })
    console.log(newToDo)  
    console.log(allToDos);  
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={toDo.text}/>
        <input type="submit"/>
      </form>

      {allToDos.map(item => (
        <OneToDo key={item.id} text={item.text}/>
      ))}
    </div>
  )
}

const OneToDo = () => {
  return <>
  <h3></h3>
  <input type="checkbox"/>
  <button>Delete</button>
  </>
}


export default App