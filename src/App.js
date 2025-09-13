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

  const handleRemove = (id) => {
    setAllToDos((allToDos) => {
      return (allToDos.filter(a => a.id !== id) )
    })
  }

  return <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange}/>
      <input type="submit" />
    </form>

    {allToDos.map((item => (
      <ToDo key={item.id} id={item.id} text={item.text} handleRemove={handleRemove}/>
    )))}

  </div>
  
}

const ToDo = ({ id, text }) => {
  return <div>
    <h3>{text}</h3>
    <input type="checkbox" />
    <button>Remove</button>
  </div>
}

export default App