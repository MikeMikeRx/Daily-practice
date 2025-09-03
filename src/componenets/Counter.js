import "./Counter.css"
import { useState, useEffect } from "react"

const Counter = ({ id, handleResult, reset }) => {
  const[sum,setSum] = useState(0)

  const handleIncrease = () => setSum(prev => prev + 1)

  const handleDecrease = () =>{
    if(!sum) {
      setSum(0)
    } else {
      setSum(prev => prev -1)
    }
  }

  useEffect(()=>{
    handleResult(id, sum)        
  },[sum])

  useEffect(() => {
    setSum(0)
  },[reset])

  return <div className="counter-box">
    <p>{sum}</p>
    <button onClick={handleIncrease}>Increase</button>
    <button onClick={handleDecrease}>Decrease</button>
    <button>Remove</button>
      {/* next step */}
  </div>
  
}

export default Counter