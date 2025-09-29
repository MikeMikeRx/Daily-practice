import { useState } from "react"

const App = () => {
  return (
    <div>
      <section className="AddContact-sec">
        <form>
          <label htmlFor="firstName">Name: </label>
          <input type="text" id="firstName"/>
          <label htmlFor="lastName">Surname: </label>
          <input type="text" id="lastName"/>
        </form>
      </section>
    </div>
  )
}

export default App