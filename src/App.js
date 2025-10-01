import { useState, useEffect } from "react"

const App = () => {
  const [notes, setNotes] = useState(()=>{
    const loadLs = JSON.parse(localStorage.getItem("notes"))
    return loadLs ? loadLs : []  
  })

  useEffect(()=>{
    localStorage.setItem("Notes", (JSON.stringify(notes)))
  })

  return (
    <div>App</div>
  )
}

const NoteForm = () => {
  return (
    <form>
      <label htmlFor="title">Title: </label>
      <input type="text" id="title"/>
      <label htmlFor="body">Body: </label>
      <input type="text" id="body"/>
    </form>
  )
}

export default App