import { useState, useEffect } from "react"

const App = () => {
  const[contact, setContact] = useState({name:"", surname:"", phone:""})
  const[contactList, setContactList] = useState(()=>{
    const loadLS = JSON.parse(localStorage.getItem("ContactList"))
    return loadLS ? loadLS : []
  })
  const[searched, setSearched] = useState("")
  const[filteredList, setFilteredList] = useState([])
  const[editingContact, setEditingContact] = useState(null)

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
    setContact({name:"", surname:"", phone:""})  
  }

  // Searched term / Filtered list 
  useEffect(()=>{
      if(!searched){
    setFilteredList(contactList)
    } else {
      setFilteredList(contactList.filter(a => a.name.toLowerCase().includes(searched) || a.surname.toLowerCase().includes(searched) || a.phone.includes(searched)))
  }
  },[searched])

  const handleEdit = (contact) => {
    setEditingContact(contact.id)
    setContact({
      name: contact.name,
      surname: contact.surname,
      phone: contact.phone
    })
  }

  const handleDelete = (id) => {
    const filtered = contactList.filter(a => a.id !== id)
    setContactList(filtered)
  }

  useEffect(()=>{
    const saveToLS = localStorage.setItem("ContactList", (JSON.stringify(contactList)))
  },[contactList])

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

      <label htmlFor="search">Search: </label>
      <input type="text" id="search" onChange={(e)=>setSearched((e.target.value).toLowerCase())}/>

      <ul className="contact-list">
        {filteredList.map(item => (
          <li key={item.id}>
            <h3>{item.name} {item.surname}</h3>
            <h4>Phone: {item.phone}</h4>
            <button onClick={()=>handleEdit(item)}>Edit</button>
            <button onClick={()=>handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default App