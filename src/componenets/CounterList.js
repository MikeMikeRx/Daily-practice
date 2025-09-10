import Counter from "./Counter"
import "./CounterList.css"
import { useState } from "react"

const CounterList = () => {
    const[counters, setCounters] = useState([1,2,3])

  return <div className="counter-list">
    <Counter/>
    </div>
  
}

export default CounterList