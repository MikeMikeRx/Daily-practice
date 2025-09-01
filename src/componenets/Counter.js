import "./Counter.css"
import { useState, useEffect } from "react"

const Counter = ({id, handleResult}) => {
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

  return <div className="counter-box">
    <p>{sum}</p>
    <button onClick={handleIncrease}>Increase</button>
    <button onClick={handleDecrease}>Decrease</button>  
  </div>
  
}

export default Counter