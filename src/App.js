import { useState } from "react"

const App = () => {
  const [contact, setContact] = useState({firstName:"", lastName:"", phone:"", email:""})
  const [contactList, setContactList] = useState([])

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setContact({...contact, [name]:value})
  }

  return (
    <div>
      <section className="AddContact-sec">
        <form className="Add-form">
          <label htmlFor="firstName">Name: </label>
          <input type="text" id="firstName" name="firstName" value={contact.firstName} onChange={handleChange}/>
          <label htmlFor="lastName">Surname: </label>
          <input type="text" id="lastName" name="lastName" value={contact.lastName} onChange={handleChange}/>
          <label htmlFor="phone">Phone number: </label>
          <input type="number" id="phone" name="phone" value={contact.phone} onChange={handleChange}/>
          <label htmlFor="email">E-mail: </label>
          <input type="email" id="email" name="email" value={contact.email} onChange={handleChange}/>
          <input type="submit" id="submit"/>
        </form>
      </section>
    </div>
  )
}

export default App