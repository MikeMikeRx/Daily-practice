import "./Counter.css"
import { useState } from "react"

const Counter = () => {
    const[sum, setSum] = useState(0)

    const handleIncrease = () => {
        setSum(prev => prev + 1)
    }

    const handleDecrease = () => {
        if(sum <= 0){
            setSum(0)
        } else setSum(prev => prev -1)        
    }

  return <div className="counter-container">
    <h3>Id:X</h3>
    <h3>Result:{sum}</h3>
    <button onClick={handleIncrease}>Plus</button>
    <button onClick={handleDecrease}>Minus</button>
    <button>Remove</button>
  </div>
  
}

export default Counter