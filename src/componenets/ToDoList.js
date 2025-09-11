import OneTask from "./OneTask"
import { useState } from "react"

const ToDoList = () => {
    const[toDo, setToDo] = useState({text: ""})
    const[allToDos, setAllToDos] = useState([])

    const formChange = (e) => {
        const task = e.target.value
        setToDo({text: task})                       
    }

    const formSubmit = (e) => {
        e.preventDefault()        
        const newToDo = {...toDo, id: new Date().getTime()}
        setAllToDos( (allToDos) => {
            return [...allToDos, newToDo]
        })               
    }

    const handleDelete = (id) => {
        setAllToDos( (allToDos) => {
            return allToDos.filter(a => a !== a.id)
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
        <ul>
            {allToDos.map(item => (
              <li><OneTask key={item.id} text={item.text} handleDelete={handleDelete}/></li>
            ))}
        </ul>        
    </div>
  </div>
  
}

export default ToDoList