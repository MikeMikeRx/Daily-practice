import { useState, useEffect } from "react"

const App = () => {
  const [notes, setNotes] = useState(()=>{
    const loadLs = JSON.parse(localStorage.getItem("notes"))
    return loadLs ? loadLs : []  
  })

  return (
    <div>App</div>
  )
}

export default App