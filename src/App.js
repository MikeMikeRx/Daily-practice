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
  },[notes])

  return (
    <div>
      <section className="form-sec">
        <NoteForm handleAddNote={handleAddNote}/>
      </section>

      <section className="list-sec">
        <NoteList notes={notes}/>
      </section>
    </div>
  )
}

const NoteForm = ({ handleAddNote }) => {
  const [oneNote, setOneNote] = useState({title:"", body:""})

  const handleChange = (e) =>{
    const name = e.target.name
    const value = e.target.value
    setOneNote({...oneNote, [name]:value})    
  }

  const handleSubmit = (e) =>{
    e.preventDefault()

    handleAddNote(oneNote)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title: </label>
      <input type="text" id="title" name="title" value={oneNote.title} onChange={handleChange}/>
      <label htmlFor="body">Body: </label>
      <input type="text" id="body" name="body" value={oneNote.body} onChange={handleChange}/>
      <button type="submit"> Add Note</button>
    </form>
  )
}

const NoteList = ({ notes }) =>{
  return <div>
    {notes.map((note) => {
      <article key={note.id} className="note-cart">
        <h2>{note.title}</h2>
        <p>{note.body}</p>
      </article>
    })}
  </div>  
  
}

export default App