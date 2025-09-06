import "./Counter.css"
import { useState, useEffect } from "react"

const Counter = ({ id, handleResult, handleRemove, reset }) => {
  const[sum,setSum] = useState(()=>{
    return JSON.parse(localStorage.getItem(`${id}`)) || 0
  })

  // XXXXXX

  const handleIncrease = () => setSum(prev => prev + 1)

  const handleDecrease = () =>{
    if(!sum) {
      setSum(0)
    } else {
      setSum(prev => prev -1)
    }
  }

  useEffect(() => {
    handleResult(id, sum)
    localStorage.setItem(JSON.stringify(id), JSON.stringify(sum))
  },[sum])

  useEffect(() => {
    setSum(0)
  },[reset])

  return <div className="counter-box">
    <p>{sum}</p>
    <button onClick={handleIncrease}>Increase</button>
    <button onClick={handleDecrease}>Decrease</button>
    <button onClick={()=>{handleRemove(id)}}>Remove</button>
  </div>
  
}

export default Counter