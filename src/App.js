import React from 'react'
import { useState } from 'react'

const App = () => {
  const[toDo, setToDo] = useState({text:""})
  const[allTasks, setAllTasks] = useState([])

  const handleChange = (e) =>{
    setToDo({text: e.target.value})    
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault()

    const newTask = {
      ...toDo, 
      id: new Date().getTime(), 
      done: false}

    setAllTasks([...allTasks, newTask])      
  }

  const handleToggle = (id) =>{
    setAllTasks(prev => prev.map(item => (item.id === id ? {...item, done: !item.done} : item)))        
  }

  const handleRemove = (id) =>{
    setAllTasks(prev => prev.filter(item => item.id !== id))
  }

  const total = allTasks.length
  const done = allTasks.filter(a => a.done === true).length     

  return <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={toDo.text}/>
      <input type="submit" />
    </form>

    {allTasks.map((item) => (
      <ListTasks key={item.id} id={item.id} text={item.text} done={item.done} handleToggle={handleToggle} handleRemove={handleRemove}/>
    ))}
  </div>  
}

const ListTasks = ({id, text, done, handleToggle, handleRemove}) =>{
  return <div key={id}>
    <h2>{text}</h2>
    <input type="checkbox" onChange={()=>handleToggle(id)} value={done}/>
    <button onClick={()=>handleRemove(id)}>Remove</button>
  </div>
}

export default App