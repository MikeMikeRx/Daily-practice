import "./CounterList.css"
import Counter from "./Counter"
import { useEffect, useState } from "react"

const CounterList = () => {
  const[values,setValues] = useState({})
  const[total,setTotal] = useState(0)
  const[array,setArray] = useState([1,2,3])
  const[reset,setReset] = useState(true)

  const handleResult = (id, x) => {  
    setValues(prev => {
      const updated = { ...prev, [id]: x}
    
      const sum = Object.values(updated).reduce((acc, val) => acc + val, 0)
      setTotal(sum)
      return updated              
    })       
  }

  const handleReset = () => {
      setReset(prev => !prev)
      setValues({})
      setTotal(0)
  }

  const handleAdd = () => {
    setArray(prev => {
      const last = prev[prev.length -1]
      return [...prev,last + 1]
    })
  }

  const handleRemove = (id) => {
    const filteredArray = array.filter(a => {
      return a !== id
    })
    setArray(filteredArray)
  }


  return (
    <div className="counter-list">
      {array.map(id => (
        <Counter key={id} id={id} handleResult={handleResult} handleRemove={handleRemove} reset={reset}/>
      ))}
      <div className="info-bar">
        <button onClick={handleAdd}>Add</button>
        <p>Total: {total}</p>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default CounterList