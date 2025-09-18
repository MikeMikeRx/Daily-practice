import { useState } from "react"

const App = () => {
  return (
    <form>
      <label htmlFor="name">Name: </label>
      <input type="text" id="name"/>
      <label htmlFor="surname">Surname: </label>
      <input type="text" id="surname"/>
      <input type="number" id="phone"/>
    </form>
  )
}

export default App