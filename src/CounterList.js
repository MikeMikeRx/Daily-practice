import "./CounterList.css"
import Counter from "./Counter"
import { useState } from "react"

const CounterList = () => {
    const[counters,setCounters] = useState([1,2,3])
    const[results,setResults] = useState([])

    const handleAdd = () => {
        const lastOne = counters.length
        setCounters(prev => [...prev, lastOne + 1])
    }

    const handleResults = (id,x) =>{
        if(results = []){
            setResults([{id,x}])
        }        
        console.log(results);        
    }



  return <div className="cl-container">
    <div className="counter-top">
        <h2>Total Sum: 00</h2>
        <button onClick={handleAdd}>Add</button>
        <button>Reset</button>
    </div>
    <div className="counter-list">
        {counters.map(id =>(
            <Counter key={id} id={id} handleResults={results}/>
        ))}
    </div>
  </div>  
}

export default CounterList