import "./CounterList.css"
import Counter from "./Counter"
import { useState } from "react"

const CounterList = () => {
    const[counters,setCounters] = useState([1,2,3])

  return <div className="cl-container">
    <div className="counter-top">
        <h2>Total Sum: 00</h2>
        <button>Add</button>
        <button>Reset</button>
    </div>
    <div className="counter-list">
        {counters.map(id =>(
            <Counter key={id} id={id}/>
        ))}
    </div>
  </div>  
}

export default CounterList