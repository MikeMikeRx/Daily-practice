import "./CounterList.css"
import Counter from "./Counter"
import { useEffect, useState } from "react"

const CounterList = () => {
  const[values,setValues] = useState({})
  const[total,setTotal] = useState(0)

  const handleResult = (id, x) => {  
    setValues(prev => {
      const updated = { ...prev, [id]: x}
    
      const sum = Object.values(updated).reduce((acc, val) => acc + val, 0)
      setTotal(sum)
      return updated        
    })    
  }

  return (
    <div className="counter-list">
      <Counter id={1} handleResult={handleResult}/>
      <Counter id={2} handleResult={handleResult}/>
      <Counter id={3} handleResult={handleResult}/>
      <div className="counter-bot">
        <p>Total: {total}</p>
        <button onClick={()=> {setValues({}); setTotal(0)}}>Reset</button>
      </div>
    </div>
  )
}

export default CounterList