import "./CounterList.css"
import Counter from "./Counter"
import { useEffect, useState } from "react"

const CounterList = () => {
  const[oneResult,setOneResult] = useState({})
  const[array,setArray] = useState([])
  const[total,setTotal] = useState(0)

  const handleResult = (id, x) => {
    setOneResult({id: x})   
    setArray(prev => ({
      ...prev, [id]: x
    }))
    setTotal(array.map(one))
  }



  return (
    <div className="counter-list">
      <Counter id={1} handleResult={handleResult}/>
      <Counter id={2} handleResult={handleResult}/>
      <Counter id={3} handleResult={handleResult}/>
      <div className="counter-bot">
        <p>Total: {}</p>
        <button>Reset</button>
      </div>
    </div>
  )
}

export default CounterList