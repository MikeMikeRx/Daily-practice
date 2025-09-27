import { useState, useEffect } from "react"

const App = () => {
  const[contact, setContact] = useState({name:"", surname:"", phone:""})
  const[contactList, setContactList] = useState(()=>{
    const loadLS = JSON.parse(localStorage.getItem("ContactList"))
    return loadLS ? loadLS : []
  })
  const[searchTerm, setSearchTerm] = useState("")
  const[editingId, setEditingId] = useState(null)

  const filtered = contactList
    .filter(a => 
      a.name.toLowerCase().includes(searchTerm) || 
      a.surname.toLowerCase().includes(searchTerm) || 
      a.phone.includes(searchTerm)
    )

  const handleChange = (e) =>{
    const name = e.target.name
    const value = e.target.value
    setContact({ ...contact, [name]: value })
  }

  const handleSubmit = (e) =>{
    e.preventDefault()

    if(editingId === null){
    const newContact = {
      ...contact,
      id: new Date().getTime()
    }
    setContactList(prev => [ ...prev, newContact ])
    setContact({name:"", surname:"", phone:""})
  } else {
    setContactList(prev => prev.map(c => c.id === editingId ? {...c, ...contact } : c))
  }
}

  const handleSearch = (e) =>{
    setSearchTerm(e.target.value.toLowerCase())
  }

  const handleEdit = (id) =>{
    setEditingId(id)
    const found = filtered.find(c => c.id === id)
    setContact({
      name: found.name,
      surname: found.surname,
      phone: found.phone
    })             
  }

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
        <li>
          {filtered.map(contact => (
            <ul key={contact.id}>
              <p>name: <strong>{contact.name} {contact.surname}</strong></p>
              <p>phone: <strong>{contact.phone}</strong></p>
              <button onClick={()=>handleEdit(contact.id)}>Edit</button>
              <button>Remove</button>
            </ul>
          ))}
        </li>
      </section>
    </div>
  )
}

export default App