import { useState } from "react"

const App = () => {
  const[contact, setContact] = useState({name:"", surname:"", phone:""})
  const[contactList, setContactList] = useState([])

  const handleChage = (e) => {
      const name = e.target.name
      const value = e.target.value
      setContact({...contact, [name]: value})         
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newContact = {
      ...contact,
      id: new Date().getTime()
    }

    setContactList(prev=>[...prev, newContact])  
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={contact.name} 
          onChange={handleChage}
        />
        <label htmlFor="surname">Surname: </label>
        <input 
          type="text" 
          id="surname" 
          name="surname" 
          value={contact.surname} 
          onChange={handleChage}
        />
        <label htmlFor="phone">Phone number: </label>
        <input 
          type="number" 
          id="phone" name="phone" 
          value={contact.phone} 
          onChange={handleChage}
        />
        <input type="submit" value="Add Contact"/>
      </form>

      <ul className="contact-list">
        {contactList.map(item => (
          <li key={item.id}>
            <h3>{item.name} {item.surname}</h3>
            <h4>Phone: {item.phone}</h4>
            <button>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default App