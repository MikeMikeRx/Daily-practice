import { useState, useEffect } from "react"

const App = () => {
    const [contactList, setContactList] = useState(()=>{
      const loadLS = JSON.parse(localStorage.getItem("ContactList"))
      return loadLS ? loadLS : []
    })
    const [foundContacts, setFoundCountacs] = useState([])
    const [editedId, setEditedId] = useState("")

  const handleAddNew = (newContact) =>{
    setContactList(prev => [...prev, newContact])
  }

  const handleEdit = (editedId) =>{
    setEditedId(editedId)   
  }

  const handleSearch = (searched) =>{
    const filtered = contactList.filter(a => 
      a.firstName.toLowerCase().includes(searched.toLowerCase()) ||
      a.lastName.toLowerCase().includes(searched.toLowerCase()) ||
      a.phone.includes(searched) ||
      a.email.toLowerCase().includes(searched.toLowerCase())
    )
    setFoundCountacs(searched ? filtered : contactList)
  }

  const edited = contactList.find(a => a.id === editedId) 

  useEffect(()=>{
    localStorage.setItem("ContactList", (JSON.stringify(contactList)))
  },[contactList])

  return (
    <div>
      <section className="AddContact-section">    
        <form onSubmit={handleSubmit}>
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
      </section>

      <section className="Search-secttion">
          <label htmlFor="search">Search for contact: </label>
          <input type="text" id="search" onChange={handleSearch}/>
      </section>

      <section className="ListConctact-section">
        <ul>
          {filtered.map(contact => (
            <li key={contact.id}>
              <p>name: <strong>{contact.name} {contact.surname}</strong></p>
              <p>phone: <strong>{contact.phone}</strong></p>
              <button onClick={()=>handleEdit(contact.id)}>Edit</button>
              <button onClick={()=>handleRemove(contact.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default App