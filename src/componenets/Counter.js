import "./Counter.css"
import { useState, useEffect } from "react"

const Counter = ({ id, handleResult, handleRemove, reset }) => {
  const[sum,setSum] = useState(0)

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
    const number = sum
    const idX = id
    const sumJSON = JSON.stringify(number)
    const idJSON = JSON.stringify(idX)
    const sumToSave = localStorage.setItem(`${idJSON}`,`${sumJSON}`)
    console.log(idJSON);
    
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