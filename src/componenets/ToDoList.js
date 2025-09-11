import OneTask from "./OneTask"
import { useState } from "react"

const ToDoList = () => {
    const[toDo, setToDo] = useState({})
    const[allToDos, setAllToDos] = useState([])

  return <div className="container">
    <div className="add-form">
        <form>
            <input type="text" name="taskToDo" placeholder="Task to do..."/>
            <input type="submit" />
        </form>        
    </div> 
    <div className="toDo-list">
        <OneTask/>
    </div>
  </div>
  
}

export default ToDoList