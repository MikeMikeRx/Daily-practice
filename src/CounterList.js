import "./CounterList.css"
import Counter from "./Counter"
import { useState } from "react"

const CounterList = () => {
    const[counters, setCounters] = useState([1,2,3])
    const[results, setResults] = useState({})
    const[reset, setReset] = useState(true)

    const handleAdd = () => {
        const lastOne = counters.length
        setCounters(prev => [...prev, lastOne + 1])
    }

    const handleRemove = (id) => {
        setCounters(counters.filter((a) => a !== id))
        // console.log(id);
        
    }

    const handleResults = (id,x) => {
        setResults(prev => ({ ...prev, [id]: x}))
        localStorage.setItem((JSON.stringify(id)),(JSON.stringify(x)))                                      
    }

    const handleReset = () => {
        setReset(prev => !prev)
        setResults({})
        setCounters([1,2,3])        
    }

    const total = Object.values(results).reduce((acc, r) => acc + r,0)
    
  return <div className="cl-container">
    <div className="counter-top">
        <h2>Total Sum: {total}</h2>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleReset}>Reset</button>
    </div>
    <div className="counter-list">
        {counters.map(id =>(
            <Counter key={id} id={id} handleResults={handleResults} handleRemove={handleRemove} reset={reset}/>
        ))}
    </div>
  </div>  
}

export default CounterList