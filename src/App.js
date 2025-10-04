import { useState, useEffect } from "react"

const App = () => {
  const [notes, setNotes] = useState(()=>{
    const loadLS = JSON.parse(localStorage.getItem("Notes"))
    return loadLS ? loadLS : []
  })

  const handleAddNote = (note) =>{
    const newNote = {
      ...note,
      id: new Date().getTime() + Math.random()
    }
    setNotes(prev => [...prev, newNote])
    console.log(notes);    
  }

  useEffect(()=>{
    localStorage.setItem("Notes", (JSON.stringify(notes)))
  })

  return (
    <div>
      <section className="sec-1">
        <NoteForm handleAddNote={handleAddNote}/>
      </section>
      <section className="sec-2">

      </section>
      <section className="sec-3">

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
  <form>
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

export default App