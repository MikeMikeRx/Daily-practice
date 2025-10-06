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
      completed: false, 
      id: new Date().getTime() + Math.random()
    }

    setTask(prev => [...prev, newTask])
  }

  const handleToggle = (id) => {
    setTask(prev => prev.map(t => (t.id === id ? {...t, completed: !t.completed} : t)))
  }

  const handleDelete = (id) => {
    setTask(prev => prev.filter(t => t.id !== id))
  }

  const handleFilter = (state) => {
    setFilter(state)
  }

  useEffect(()=>{
   if (filter === "active"){
      setUpdatedTasks(tasks.filter(t => !t.completed))
    } else if (filter === "completed"){
      setUpdatedTasks(tasks.filter(t => t.completed))
    } else {
      setUpdatedTasks(tasks)
    }
  },[tasks, filter])

  useEffect(()=>{
    setUpdatedTasks(tasks)
    localStorage.setItem("Tasks", (JSON.stringify(tasks)))
  },[tasks])

  return (
    <div>
      <section className="sec-1">
        <TaskForm handleAddTask={handleAddTask}/>
      </section>

      <section className="sec-2">
        <TaskFilter handleFilter={handleFilter}/>
      </section>

      <section className="sec-3">
        <TaskList updatedTasks={updatedTasks} handleToggle={handleToggle} handleDelete={handleDelete}/>
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

const TaskFilter = ({ handleFilter }) => {
  return <div>
    <button onClick={()=>handleFilter("all")}>All</button>
    <button onClick={()=>handleFilter("active")}>Active</button>
    <button onClick={()=>handleFilter("completed")}>Completed</button>
  </div>
}

const TaskList = ({ updatedTasks, handleToggle, handleDelete }) => {
  return <>
  {updatedTasks.map(t => (
    <li key={t.id}>
      <h1>{t.title}</h1>
      <input type="checkbox" id="completed" onChange={()=>handleToggle(t.id)}/>
      <button onClick={()=>handleDelete(t.id)}>Delete</button>
    </li>
  ))}
  </>
}

export default App