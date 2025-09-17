import React from 'react'
import { useState } from 'react'

const App = () => {
  return <div>
    <form>
      <label htmlFor="text">Description: </label>
      <input type="text" id="text"/>
      <label htmlFor="number">Amount: </label>
      <input type="number" id="number"/>
      <input type="submit" />
    </form>
  </div>
  
}

export default App