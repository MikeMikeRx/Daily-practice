import React from 'react'
import { useState, useEffect } from 'react'

const App = () => {
  const[expense, setExpense] = useState({description:"", amount:""})
  const[allExpenses, setAllExpenses] = useState(()=>{
    const loadLS = JSON.parse(localStorage.getItem("Expenses"))
    return loadLS ? loadLS : []
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    const fullDate = new Date().toLocaleDateString(`no-no`)

    const newExpense = {
      ...expense,
      amount: parseInt(expense.amount),
      id: new Date().getTime(),
      date: fullDate
    }    

    setAllExpenses([...allExpenses, newExpense])
    
    setExpense({description:"", amount:""})
  }

  const handleRemove = (id) =>{
    setAllExpenses(allExpenses.filter(a => a.id !== id))
  }

  const handleDeleteAll = () =>{
    setAllExpenses([])
  }

  useEffect(()=>{
    localStorage.setItem("Expenses", (JSON.stringify(allExpenses)))
  },[allExpenses])

  const results = allExpenses.map(item => {
    return item.amount
  })

  const totalSum = results.reduce((acc, r) => acc + r, 0)
  
  return <div className='container'>
    <form onSubmit={handleSubmit} className='form'>
      <label htmlFor="text">Description: </label>
      <input type="text" id="text" onChange={(e)=>setExpense({...expense, description: e.target.value})} value={expense.description}/>
      <label htmlFor="number">Amount: </label>
      <input type="number" id="number" onChange={(e)=>setExpense({...expense, amount: e.target.value})} value={expense.amount}/>
      <input type="submit" />
    </form>

    <h2>Total Expenses: {totalSum.toLocaleString('de-De')}$</h2>
    <button onClick={handleDeleteAll}>Delete All</button>
    <div className="listed-comp">
      <ListedExpense allExpenses={allExpenses} handleRemove={handleRemove}/>
    </div>
  </div>  
}

const ListedExpense = ({ allExpenses, handleRemove }) =>{
  return (
    <ul className='comp-container'>
      {allExpenses.map(item =>{
        return (<li key={item.id}>
          <h3>{item.description}</h3>
          <p>Date: {item.date}</p>
          <p>Amount: {item.amount.toLocaleString('de-De')},-</p>
          <button onClick={()=>handleRemove(item.id)}>Delete</button>
        </li>)
      })}

    </ul>
  )
}

export default App