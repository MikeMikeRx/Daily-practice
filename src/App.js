import { useState, useEffect } from "react"

const App = () => {
    const [contactList, setContactList] = useState(()=>{
    const loadLS = JSON.parse(localStorage.getItem("ContactList"))
    return loadLS ? loadLS : []
  })

  const handleAddNew = (newContact) =>{
    setContactList(prev => [...prev, newContact])
  }

    useEffect(()=>{
    localStorage.setItem("ContactList", (JSON.stringify(contactList)))
  },[contactList])

  return (
    <div>
      <section className="AddContact-sec">
        <ContactForm />
      </section>

      <section className="List-sec">
        <ul>
          {contactList.map(contact => (
            <li key={contact.id}>
              <p>Name: <strong>{contact.firstName} {contact.lastName}</strong></p>
              <p>Phone : <strong>{contact.phone}</strong></p>
              <p>E-mail: <strong>{contact.email}</strong></p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

const ContactForm = () =>{
  const [contact, setContact] = useState({firstName:"", lastName:"", phone:"", email:""})

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setContact({...contact, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newContact = {
      ...contact,
      id: new Date().getTime()
    }
    setContact({firstName:"", lastName:"", phone:"", email:""})   
  }

  return ( 
    <div>
      <form className="Add-form" onSubmit={handleSubmit}>
        <label htmlFor="firstName">Name: </label>
        <input 
          type="text" 
          id="firstName" 
          name="firstName" 
          value={contact.firstName} 
          onChange={handleChange}
        />
        <label htmlFor="lastName">Surname: </label>
        <input 
          type="text" 
          id="lastName" 
          name="lastName" 
          value={contact.lastName} 
          onChange={handleChange}
        />
        <label htmlFor="phone">Phone number: </label>
        <input 
          type="number" 
          id="phone" 
          name="phone" 
          value={contact.phone} 
          onChange={handleChange}
        />
        <label htmlFor="email">E-mail: </label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={contact.email} 
          onChange={handleChange}
        />
        <input type="submit" id="submit"/>
      </form>
  </div>
)
}

export default App