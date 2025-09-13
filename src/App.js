import { useState } from "react"

const App = () => {
  const[toDo, setToDo] = useState({text:""})


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