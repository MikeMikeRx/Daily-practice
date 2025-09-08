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
    }

    const handleResults = (id, x) => {
        let oneResult = {id, x}
        if(results = []) {
           setResults([oneResult]) 
        } else {
            setResults(prev => [...prev, oneResult])
        }
        console.log(results);        
    }

    // fix xxxxxxxxxxx


  return <div className="cl-container">
    <div className="counter-top">
    <p>Total Sum: 00</p>
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