import { useState, useEffect } from "react"

const App = () => {
  const[contact, setContact] = useState({name:"", surname:"", phone:""})
  const[contactList, setContactList] = useState(()=>{
    const loadLS = JSON.parse(localStorage.getItem("ContactList"))
    return loadLS ? loadLS : []
  })
  const[searchTerm, setSearchTerm] = useState("")
  const[filteredList, setFilteredList] = useState(contactList)
  const[editingId, setEditingId] = useState("")

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
    setContactList(prev => [ ...prev, newContact ])
    setContact({name:"", surname:"", phone:""})
  }

  const handleSearch = (e) =>{
    e.preventDefault()

    const filtered = contactList
    .filter(a => 
      a.name.toLowerCase().includes(searchTerm) || 
      a.surname.toLowerCase().includes(searchTerm) || 
      a.phone.includes(searchTerm)
    )
    setFilteredList(
      searchTerm ? filtered : contactList
    )
    setSearchTerm("")
  }

  const handleEdit = (id) =>{
    setEditingId(id)
    const found = filteredList.find(c => c.id === id)
    console.log(found);              
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
        <form onSubmit={handleSearch}>
          <label htmlFor="search">Search for contact: </label>
          <input type="text" id="search" onChange={(e)=>setSearchTerm(e.target.value.toLowerCase())}/>
          <button type="submit">Search</button>
        </form>
      </section>

      <section className="ListConctact-section">
        <li>
          {filteredList.map(contact => (
            <ul key={contact.id}>
              <p>name: <strong>{contact.name} {contact.surname}</strong></p>
              <p>phone: <strong>{contact.phone}</strong></p>
              <button onClick={()=>handleEdit(contact.id)}>Edit</button>
            </ul>
          ))}
        </li>
      </section>
    </div>
  )
}

export default App