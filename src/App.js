import { useState, useEffect } from "react"

const App = () => {
  const [tasks, setTask] = useState([])
  const [filter, setFilter] = ("all", "active", "completed")

  return (
    <div>App</div>
  )
}

const TaskForm = () => {
  return <div>
    <form>
      <input type="text" id="title" placeholder="Title"/>
      <input type="checkbox" id="completed"/>

      <button type="submit">Add Task</button>
    </form>
  </div>
}

export default App