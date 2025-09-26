import { useState } from "react"

const App = () => {
  const[contact, setContact] = useState({name:"", surname:"", phone:""})
  const[contactList, setContactList] = useState([])

  const handleChange = (e) =>{
    const name = e.target.name
    const value = e.target.value
    setContact({ ...contact, [name]: value })
  }

  const handleSubmit = (e) =>{
    e.preventDefault()

    const newContact = {
      ...contact,
      id: new Date().getTime()
    }

    setContactList([ ...contactList, newContact ])

    console.log(contactList);    
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input 
          type="text" 
          id="name"
          name="name"
          onChange={handleChange}
          value={contact.name}
        />
        <label htmlFor="surname">Surname: </label>
        <input 
          type="text" 
          id="surname"
          name="surname"
          onChange={handleChange}
          value={contact.surname}
        />
        <label htmlFor="phone">Phone: </label>
        <input 
          type="number" 
          id="phone"
          name="phone"
          onChange={handleChange}
          value={contact.phone}
        />
        <input 
          type="submit" 
          value="Add contact"
        />
      </form>
    </div>
  )
}

export default App