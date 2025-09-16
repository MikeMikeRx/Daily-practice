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

  return <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={toDo.text}/>
      <input type="submit" />
    </form>

    {allTasks.map((item) => (
      <ListTasks key={item.id} id={item.id} text={item.text} done={item.done} handleToggle={handleToggle}/>
    ))}
  </div>  
}

const ListTasks = ({id, text, done, handleToggle}) =>{
  return <div>
    <h2>TEXT</h2>
    <input type="checkbox" />
    <button>Remove</button>
  </div>
}

export default App