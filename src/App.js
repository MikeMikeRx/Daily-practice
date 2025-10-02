import { useState, useEffect } from "react"

const App = () => {
  const [notes, setNotes] = useState(()=>{
    const loadLs = JSON.parse(localStorage.getItem("Notes"))
    return loadLs ? loadLs : []  
  })
  const [updatedNotes, setUpdatedNotes] = useState([])
  const [editingId, setEditingId] = useState(null)

  const handleAddNote = (note) =>{
    const newNote = {
      ...note,
      id: Date.now() + Math.random()
    } 
    setNotes(prev => [ ...prev, newNote ])    
  }

  const handleEdit = (id) =>{
    setEditingId(id)    
  }

  const handleDelete = (id) =>{
    setNotes(prev => prev.filter(n => n.id !== id))
  }

  const edited = notes.find(n => n.id === editingId)

  useEffect(()=>{
    setUpdatedNotes(notes)
 
    localStorage.setItem("Notes", (JSON.stringify(notes)))
  },[notes])

  return (
    <div>
      <section className="form-sec">
        <NoteForm handleAddNote={handleAddNote} editingId={editingId} edited={edited}/>
      </section>

      <section className="list-sec">
        <NoteList updatedNotes={updatedNotes} handleDelete={handleDelete} handleEdit={handleEdit}/>
      </section>
    </div>
  )
}

const NoteForm = ({ handleAddNote, editingId }) => {
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
    <form onSubmit={handleSubmit} className="note-form">
      <label htmlFor="title">Title: </label>
      <input type="text" id="title" name="title" value={oneNote.title} onChange={handleChange}/>
      <label htmlFor="body">Body: </label>
      <textarea type="text" id="body" name="body" value={oneNote.body} onChange={handleChange}/>
      <button type="submit"> Add Note</button>
    </form>
  )
}

const NoteList = ({ updatedNotes, handleDelete, handleEdit }) =>{
  return <>
    {updatedNotes.map((note) =>(
      <article key={note.id} className="note-cart">
        <h2>{note.title}</h2>
        <p>{note.body}</p>
        <button onClick={()=>handleEdit(note.id)}>Edit</button>
        <button onClick={()=>handleDelete(note.id)}>Delete</button>
      </article>
    ))}
  </>  
  
}

export default App