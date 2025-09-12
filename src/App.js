import React from 'react'
import { useState } from 'react'

const App = () => {
  const[toDo, setToDo] = useState("")
  const[allToDos, setAllToDos] = useState([])

  
  const handleChange = (e) => {
    // e.preventDefault()
    const task = e.target.value
    setToDo(task)
    // console.log(toDo);    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newToDo = {text: toDo, id: new Date().getTime()}    
    setAllToDos( (allToDos) => {
      return [...allToDos, newToDo]
    })
    console.log(newToDo)  
    // console.log(allToDos);  
  }

  const handleDone = (id) => {
    setAllToDos(prev =>
      prev.map(task =>
        toDo.id === id ? { ...toDo, done: !toDo.done } : toDo
      )
    )
  }

  const handleDelete = (id) => {
    setAllToDos( allToDos.filter(a => a.id !== id))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={toDo.text}/>
        <input type="submit"/>
      </form>

      {allToDos.map(item => (
        <OneToDo key={item.id} id={item.id} text={item.text} handleDelete={handleDelete} handleDone={handleDone} done={item.done}/>
      ))}
    </div>
  )
}

const OneToDo = ({ id, text ,handleDelete, handleDone }) => {

  return <>
  <h3>{text}</h3>
  <input type="checkbox" checked={done} onChange={()=>handleDone(id)}/> 
  <button onClick={()=>{handleDelete(id)}}>Delete</button>
  </>
}


export default App