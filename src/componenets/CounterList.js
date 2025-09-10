import Counter from "./Counter"
import "./CounterList.css"
import { useState } from "react"

const CounterList = () => {
    const[counters, setCounters] = useState([1,2,3,4])
    const[results, setResults] = useState({})
    const[reset, setReset] = useState(true)

    const handleAdd = () => {
        const newCounter = counters.length + 1
        setCounters(prev => [...prev,newCounter])
    }

    const handleRemove = (id) => {
        setCounters(counters.filter(a => a !== id))
    }
        
    const handleResults = (id,x) => {
        setResults(prev => ({...prev, [id]:x}))      
    }

    const handleReset = () => {
        setReset(prev => !prev)
        setCounters([1,2,3,4])
    }

    const total = Object.values(results).reduce((acc,r) => acc + r, 0)    

  return <div className="counter-list-container">
    <div className="top-bar">
        <h2>Total Sum: {total}</h2>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleReset}>Reset</button>
    </div>
    <div className="counter-list">
        {counters.map(id => (
            <Counter key={id} id={id} handleResults={handleResults} handleRemove={handleRemove} reset={reset}/> 
        ))}
    </div>
  </div>
  
}

export default CounterList