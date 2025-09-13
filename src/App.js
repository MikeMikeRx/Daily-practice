import { use, useState } from "react"

const App = () => {
  const[toDo, setToDo] = useState({text:""})
  const[allToDos, setAllToDos] = useState([])

  const handleChange = (e) => {
    setToDo({text: e.target.value}) 
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setAllToDos([...allToDos,{...toDo, id: new Date().getTime()}])    
  }

  return <div>
    <form>
      <input type="text" />
      <input type="submit" />
    </form>

  </div>
  
}

const ToDo = () => {
  return <div>
    <h3>TEXT</h3>
    <input type="checkbox" />
    <button>Remove</button>
  </div>
}

export default App