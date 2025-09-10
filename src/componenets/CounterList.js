import Counter from "./Counter"
import "./CounterList.css"
import { useState } from "react"

const CounterList = () => {
  return <div className="counter-list">
    <Counter/>
    </div>
  
}

export default CounterList