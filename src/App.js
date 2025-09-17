import React from 'react'
import { useState } from 'react'

const App = () => {
  const[expense, setExpense] = useState({description:"", amount:""})
  const[allExpenses, setAllExpenses] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

  }

  return <div>
    <form>
      <label htmlFor="text">Description: </label>
      <input type="text" id="text" onChange={(e)=>setExpense({...expense, description: e.target.value})}/>
      <label htmlFor="number">Amount: </label>
      <input type="number" id="number" onChange={(e)=>setExpense({...expense, amount: e.target.value})}/>
      <input type="submit" />
    </form>
  </div>  
}

export default App