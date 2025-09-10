import Counter from "./Counter"
import "./CounterList.css"
import { useState } from "react"

const CounterList = () => {
    const[counters, setCounters] = useState([1,2,3,4])
    const[results, setResults] = useState({})

    const handleResults = (id,x) => {
        setResults(prev => ({...prev, [id]:x}))
    }

  return <div className="counter-list-container">
    <div className="top-bar">
        <h2>Total Sum: XX</h2>
        <button>Add</button>
        <button>Reset</button>
    </div>
    <div className="counter-list">
        {counters.map(id => (
            <Counter key={id} id={id}/> 
        ))}
    </div>
  </div>
  
}

export default CounterList