import { useState } from "react"

const App = () => {
  const[contact, setContact] = useState({name:"", surname:"", phone:""})
  const[contactList, setContactList] = useState([])


  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name"/>
      </form>
    </div>
  )
}

export default App