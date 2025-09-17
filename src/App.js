import React from 'react'
import { useState } from 'react'

const App = () => {
  return <div>
    <form>
      <label htmlFor="text">Description: </label>
      <input type="text" id="text"/>
      <input type="number" />
      <input type="submit" />
    </form>
  </div>
  
}

export default App