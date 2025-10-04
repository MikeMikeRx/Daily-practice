import { useState, useEffect } from "react"

const App = () => {
  const [notes, setNotes] = useState(()=>{
    const loadLS = JSON.parse(localStorage.getItem("Notes"))
    return loadLS ? loadLS : []
  })

  useEffect(()=>{
    localStorage.setItem("Notes", (JSON.stringify(notes)))
  })

  return (
    <div>App</div>
  )
}

export default App