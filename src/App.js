import { useState } from "react"

const App = () => {
  return (
    <div>
      <section className="AddContact-sec">
        <form>
          <input type="text" id="firstName"/>
          <input type="text" id="lastName"/>
        </form>
      </section>
    </div>
  )
}

export default App