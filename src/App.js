import { useState, useEffect } from "react"

const App = () => {
  const [tasks, setTask] = useState(()=>{
    const loadLS = JSON.parse(localStorage.getItem("Tasks"))
    return loadLS ? loadLS : []
  })
  const [updatedTasks, setUpdatedTasks] = useState(tasks)
  const [filter, setFilter] = useState("all", "active", "completed")

  const handleAddTask = (task) => {
    const newTask = {
      ...task, 
      id: new Date().getTime() + Math.random()
    }

    setTask(prev => [...prev, newTask])
  }

  useEffect(()=>{
    setUpdatedTasks(tasks)
    localStorage.setItem("Notes", (JSON.stringify(tasks)))
  },[tasks])

  return (
    <div>
      <section className="sec-1">
        <TaskForm handleAddTask={handleAddTask}/>
      </section>

      <section className="sec-2">
        <TaskList updatedTasks={updatedTasks}/>
      </section>
      </div>
  )
}

const TaskForm = ({ handleAddTask }) => {
  const [oneTask, setOneTask] = useState({title:""})

  const handleSubmit = (e) => {
    e.preventDefault()

    handleAddTask(oneTask)
  }
  
  return <div>
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      id="title" 
      placeholder="Title" 
      onChange={(e)=>setOneTask({title: e.target.value})}
      value={oneTask.title}
      />

      <button type="submit">Add Task</button>
    </form>
  </div>
}

const TaskList = ({ updatedTasks }) => {
  return <>
  {updatedTasks.map(t => (
    <li key={t.id}>
      <h1>{t.title}</h1>
      <input type="checkbox" id="completed"/>
      <button>Delete</button>
    </li>
  ))}
  </>
}

export default App