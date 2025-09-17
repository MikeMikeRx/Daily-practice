import React from 'react'
import { useState } from 'react'

const App = () => {
  const[expense, setExpense] = useState({description:"", amount:""})
  const[allExpenses, setAllExpenses] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    const newExpense = {
      ...expense,
      amount: parseInt(expense.amount),
      id: new Date().getTime()
    }    

    setAllExpenses([...allExpenses, newExpense])    
  }

  const handleRemove = (id) =>{
    setAllExpenses(allExpenses.filter(a => a.id !== id))
  }

  const results = allExpenses.map(item => {
    return item.amount
  })

  const totalSum = results.reduce((acc, r) => acc + r, 0)

  

  return <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Description: </label>
      <input type="text" id="text" onChange={(e)=>setExpense({...expense, description: e.target.value})} value={expense.description}/>
      <label htmlFor="number">Amount: </label>
      <input type="number" id="number" onChange={(e)=>setExpense({...expense, amount: e.target.value})} value={expense.amount}/>
      <input type="submit" />
    </form>

    <h2>Total sum: {totalSum}</h2>
    <button>Delete All</button>

    <ListedExpense allExpenses={allExpenses} handleRemove={handleRemove}/>
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