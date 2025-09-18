import { useState } from "react"

const App = () => {
  return (
    <form>
      <label htmlFor="name">Name: </label>
      <input type="text" id="name"/>
      <input type="text" id="surname"/>
    </form>
  )
}

export default App