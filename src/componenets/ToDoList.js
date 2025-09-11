import OneTask from "./OneTask"
import { useState } from "react"

const ToDoList = () => {
    const[toDo, setToDo] = useState({})
    const[allToDos, setAllToDos] = useState([])

    const formChange = (e) => {
        e.preventDefault()
        const task = e.target.value
        setToDo(task)               
    }

    const formSubmit = (e) => {
        e.preventDefault()
        const newToDo = {...toDo, id: new Date().getTime()}
        setAllToDos( (allToDos) => {
            return [...allToDos, newToDo]
        })               
    }

    console.log(allToDos);

  return <div className="container">
    <div className="add-form">
        <form onSubmit={formSubmit}>
            <input type="text" name="taskToDo" placeholder="Task to do..." onChange={formChange}/>
            <input type="submit" />
        </form>        
    </div> 
    <div className="toDo-list">
        <OneTask/>
    </div>
  </div>
  
}

export default ToDoList