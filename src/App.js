import { useState, useEffect } from "react"

const App = () => {
  const [notes, setNotes] = useState(()=>{
    const loadLS = JSON.parse(localStorage.getItem("Notes"))
    return loadLS ? loadLS : []
  })
  const [updatedNotes, setUpdatedNotes] = useState(notes)
  const [editedId, setEditedId] = useState(null)

  const handleAddNote = (note) =>{
    const newNote = {
      ...note,
      id: new Date().getTime() + Math.random()
    }
    setNotes(prev => [...prev, newNote])
    console.log(notes);    
  }

  const handleEdit = (id) =>{
    setEditedId(id)
  }

  const handleDelete = (id) =>{
    setNotes(notes.filter(n => n.id !== id))
  }

  useEffect(()=>{
    setUpdatedNotes(notes)
    localStorage.setItem("Notes", (JSON.stringify(notes)))
  },[notes])

  const editedNote = updatedNotes.find(n => n.id === editedId)  

  return (
    <div>
      <section className="sec-1">
        <NoteForm handleAddNote={handleAddNote} editedId={editedId} editedNote={editedNote}/>
      </section>
      <section className="sec-2">

      </section>
      <section className="sec-3">
        <NoteList updatedNotes={updatedNotes} handleEdit={handleEdit} handleDelete={handleDelete}/>
      </section>
    </div>
  )
}

const NoteForm = ({ handleAddNote }) =>{
  const[oneNote, setOneNote] = useState({title:"", body:""})

  const handleChange = (e) => {
    const { id, value } = e.target

    setOneNote(prev => ({
      ...prev,
      [id]: value
    }))   
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddNote(oneNote)
  }

  return <>
  <form onSubmit={handleSubmit}>
    <label htmlFor="title">Title: </label>
    <input 
    type="text" 
    id="title"
    value={oneNote.title}
    onChange={handleChange}
    />

    <label htmlFor="body">Body: </label>
    <textarea 
    id="body"
    value={oneNote.body}
    onChange={handleChange}
    />

    <button type="submit">Add Note</button>
  </form>
  </>
}

const NoteList = ({ updatedNotes, handleEdit, handleDelete }) =>{
  return <>
    {updatedNotes.map(note => (
      <article key={note.id}>
        <h3>{note.title}</h3>
        <p>{note.body}</p>
        <button onClick={()=>handleEdit(note.id)}>Edit</button>
        <button onClick={()=>handleDelete(note.id)}>Delete</button>
      </article>
    ))}
  </>
}

export default App