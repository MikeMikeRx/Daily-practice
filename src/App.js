import { useState, useEffect } from "react"

const App = () => {
  const [tasks, setTask] = useState([])
  const [filter, setFilter] = ("all", "active", "completed")

  return (
    <div>App</div>
  )
}

export default App