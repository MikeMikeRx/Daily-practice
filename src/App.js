import { useState } from "react"

const App = () => {
  const[contact, setContact] = useState({name:"", surname:"", phone:""})
  const[contactList, setContactList] = useState([])

  const handleChage = (e) => {
      const name = e.target.name
      const value = e.target.value
      setContact({...contact, [name]: value})         
  }

  return (
    <form>
      <label htmlFor="name">Name: </label>
      <input type="text" id="name"/>
      <label htmlFor="surname">Surname: </label>
      <input type="text" id="surname"/>
      <label htmlFor="phone">Phone number: </label>
      <input type="number" id="phone"/>
      <input type="submit" value="Add Contact"/>
    </form>
  )
}

export default App