import "./Counter.css"
import { useState, useEffect } from "react"

const Counter = ({ id, reset, handleResults, handleRemove }) => {
    const[sum, setSum] = useState(0)

    const handleIncrease = () => {
        setSum(prev => prev + 1)
    }

    const handleDecrease = () => {
        if(sum <= 0){
            setSum(0)
        } else setSum(prev => prev -1)        
    }

    useEffect(() => {
        handleResults(id, sum)
    },[sum])

    useEffect(() => {
        setSum(0)
    },[reset])

  return <div className="counter-container">
    <h4> *{id}*</h4>
    <h3>Result: {sum}</h3>
    <div className="plus-minus">
        <button onClick={handleIncrease}>Plus</button>
        <button onClick={handleDecrease}>Minus</button>
    </div>
    <button onClick={()=>{handleRemove(id)}}>Remove</button>
  </div>
  
}

export default Counter