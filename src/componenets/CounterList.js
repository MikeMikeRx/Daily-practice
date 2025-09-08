import "./CounterList.css"
import Counter from "./Counter"
import { useState, useEffect } from "react"

const CounterList = () => {
    const[counters, setCounters] = useState([1])
    const[results, setResults] = useState([])

    const handleAdd = () => {
        const lastOne = counters.length
        setCounters(prev => [...prev, lastOne + 1])       
    }

    const handleRemove = (id) => {
        setCounters(counters.filter(a => a !== id))
        setResults((prev) => prev.filter(r => r.id !== id))
    }

    const handleResults = (id, x) => {
        let oneResult = {id, x}
        setResults((prev => {
            const filtered = prev.filter((r) => r.id !== id)
            return [...filtered, oneResult]
        }))        
    }

    const total = results.reduce((acc, r) => acc + r.x, 0)


  return <div className="cl-container">
    <div className="counter-top">
    <p>Total Sum: {total}</p>
    <button onClick={handleAdd}>Add</button>
    <button>Reset</button>
    </div>
    
    <div className="counter-list">
        {counters.map(id => (
            <Counter key={id} id={id} handleRemove={handleRemove} handleResults={handleResults}/>
        ))}
    </div>
  </div>
  
}

export default CounterList