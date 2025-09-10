import Counter from "./Counter"
import "./CounterList.css"
import { useState } from "react"

const CounterList = () => {
    const[counters, setCounters] = useState([1,2,3])

  return <div className="counter-list-container">
    <div className="counter-list">
        {counters.map(id => (
            <Counter key={id} id={id}/> 
        ))}
    </div>
  </div>
  
}

export default CounterList