import "./Counter.css"
import { useState, useEffect } from "react"

const Counter = ({ id, handleRemove, handleResults }) => {
    const[sum,setSum] = useState(0)

    const handleIncrease = () => {
        setSum(prev => prev + 1)
    }

    const handleDecrease = () => {
        if (sum <= 0) {
            setSum(0)
        } else {
            setSum(prev => prev - 1)
        }
    }

    useEffect(() => {
        handleResults(id, sum)
    },[sum])

  return <div className="counter-container">
    <p>Result: {sum}</p>
    <button onClick={handleIncrease} >Plus</button>
    <button onClick={handleDecrease} >Minus</button>
    <button onClick={()=>{handleRemove(id)}}>Remove</button>
    </div>  
}

export default Counter