import { useState, useEffect } from "react"

const App = () => {
  const [tasks, setTask] = useState([])
  const [filter, setFilter] = ("all", "active", "completed")

  return (
    <div>
      <section className="sec-1">

      </section>

      <section className="sec-2">

      </section>
      </div>
  )
}

const TaskForm = () => {
  return <div>
    <form>
      <input type="text" id="title" placeholder="Title"/>

      <button type="submit">Add Task</button>
    </form>
  </div>
}

export default App