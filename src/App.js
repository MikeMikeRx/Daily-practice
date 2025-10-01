import { useState, useEffect } from "react"

const App = () => {
  const [notes, setNotes] = useState(()=>{
    const loadLs = JSON.parse(localStorage.getItem("notes"))
    return loadLs ? loadLs : []  
  })

  const handleAddNote = (note) =>{
    const newNote = {
      ...note,
      id: Date.now() + Math.random()
    } 
    setNotes(prev => [ ...prev, newNote ])
  }

  useEffect(()=>{
    localStorage.setItem("Notes", (JSON.stringify(notes)))
  })

  return (
    <div>
      <NoteForm handleAddNote={handleAddNote}/>
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
      <input type="text" id="title" name="title" value={oneNote.title} onChange={handleChange}/>
      <label htmlFor="body">Body: </label>
      <input type="text" id="body" name="body" value={oneNote.body} onChange={handleChange}/>
      <button type="submit"> Add Note</button>
    </form>
  )
}

export default App