import React from 'react'
import { useState } from 'react'

const App = () => {
  const[expense, setExpense] = useState({description:"", amount:""})
  const[allExpenses, setAllExpenses] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    const newExpense = {
      ...expense,
      id: new Date().getTime()
    }

    setAllExpenses([...allExpenses, newExpense])    
  }

  return <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Description: </label>
      <input type="text" id="text" onChange={(e)=>setExpense({...expense, description: e.target.value})} value={expense.description}/>
      <label htmlFor="number">Amount: </label>
      <input type="number" id="number" onChange={(e)=>setExpense({...expense, amount: e.target.value})} value={expense.amount}/>
      <input type="submit" />
    </form>

    <h2>Total sum: XX</h2>
    <button>Delete All</button>

    <ListedExpense allExpenses={allExpenses}/>
  </div>  
}

const ListedExpense = ({allExpenses}) =>{
  return (
    <ul>
      {allExpenses.map(item =>{
        return (<li key={item.id}>
          <h3>Description: {item.description}</h3>
          <p>Amount: {item.amount}</p>
          <button>Delete</button>
        </li>)
      })}

    </ul>
  )
}

export default App