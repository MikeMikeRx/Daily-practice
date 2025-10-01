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
    <div>
      <NoteForm/>
    </div>
  )
}

const NoteForm = () => {
  const [oneNote, setOneNote] = useState({title:"", body:""})

  const handleChange = (e) =>{
    const name = e.target.name
    const value = e.target.value
    setOneNote({...oneNote, [name]:value})
  }

  return (
    <form>
      <label htmlFor="title">Title: </label>
      <input type="text" id="title"/>
      <label htmlFor="body">Body: </label>
      <input type="text" id="body"/>
      <button type="submit"> Add Note</button>
    </form>
  )
}

export default App