import { useState, useEffect } from "react"

const App = () => {
  const [notes, setNotes] = useState(()=>{
    const loadLS = JSON.parse(localStorage.getItem("Notes"))
    return loadLS ? loadLS : []
  })

  return (
    <div>App</div>
  )
}

export default App