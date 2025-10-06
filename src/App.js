import { useState, useEffect } from "react"

const App = () => {
  const [tasks, setTask] = useState([])
  const [filter, setFilter] = ("all", "active", "completed")

  const handleSubmit = (task) => {
    const newTask = {
      ...task, 
      id: new Date().getTime() + Math.random
    }

    setTask(prev => [...prev, newTask])
  }

  return (
    <div>
      <section className="sec-1">
        <TaskForm handleSubmit={handleSubmit}/>
      </section>

      <section className="sec-2">

      </section>
      </div>
  )
}

const TaskForm = ({ handleSubmit }) => {
  return <div>
    <form>
      <input type="text" id="title" placeholder="Title"/>

      <button type="submit">Add Task</button>
    </form>
  </div>
}

export default App