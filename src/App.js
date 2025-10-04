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
    <div>
      <section className="sec-1">

      </section>
      <section className="sec-2">

      </section>
      <section className="sec-3">
        
      </section>
    </div>
  )
}

export default App