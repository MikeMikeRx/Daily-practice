import { useState, useEffect } from "react"

const App = () => {
    const [contactList, setContactList] = useState(()=>{
      const loadLS = JSON.parse(localStorage.getItem("ContactList"))
      return loadLS ? loadLS : []
    })
    const [foundContacts, setFoundCountacs] = useState([])
    const [editedId, setEditedId] = useState(null)
    const [searchTerm, setSearchTerm] = useState("")

  const handleAddNew = (newContact) =>{
    setContactList(prev => [...prev, newContact])
  }

  const handleEdit = (editedId) =>{
    setEditedId(editedId)   
  }

  const handleUpdateList = (updatedContact) =>{
    setContactList(prev => 
      prev.map(c => c.id === editedId ? {...c, ...updatedContact } : c))
  }

  const handleSearch = (searched) =>{
    setSearchTerm(searched)
  }

  useEffect(()=>{
      const filtered = contactList.filter(a => 
      a.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.phone.includes(searchTerm) ||
      a.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFoundCountacs(searchTerm ? filtered : contactList)
  },[contactList, searchTerm])

  

  const edited = contactList.find(a => a.id === editedId)
  
  const handleDelete = (id) => {
    setContactList(prev => prev.filter(c => c.id !== id))
  }

  useEffect(()=>{
    localStorage.setItem("ContactList", (JSON.stringify(contactList)))
  },[contactList])

  return (
    <div className="container">
      <h1>Contact Manager</h1>

      <div className="main-content">
        <div className="first-part">
          <section className="AddContact-sec">
            <ContactForm 
              handleAddNew={handleAddNew} 
              edited={edited} 
              editedId={editedId} 
              handleUpdateList={handleUpdateList}
            />
          </section>
        </div>

        <div className="second-part">
          <section className="Search-sec">
            <ContactSearch 
              handleSearch={handleSearch}/>
          </section>

          <section className="List-sec">
            <ContactList 
              foundContacts={foundContacts} 
              handleEdit={handleEdit}
              handleDelete={handleDelete} 
            />
          </section>
        </div>
      </div>
    </div>
  )
}


const ContactForm = ({ handleAddNew, editedId, edited, handleUpdateList }) =>{
  const [contact, setContact] = useState({firstName:"", lastName:"", phone:"", email:""})

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setContact({...contact, [name]:value})
  }

  useEffect(()=>{
    if(editedId){
      setContact(edited)
    }
  },[editedId])

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!editedId){
      const newContact = {
        ...contact,
        id: new Date().getTime()
      }
      handleAddNew(newContact)
      setContact({firstName:"", lastName:"", phone:"", email:""}) 
    } else {
      handleUpdateList(contact)
      setContact({firstName:"", lastName:"", phone:"", email:""})
    }
  }  
  
  return ( 
    <div>
      <form className="Add-form" onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Name" 
          id="firstName" 
          name="firstName" 
          value={contact.firstName} 
          onChange={handleChange}
        />
        <input 
          type="text"
          placeholder="Surname" 
          id="lastName" 
          name="lastName" 
          value={contact.lastName} 
          onChange={handleChange}
        />
        <input 
          type="number"
          placeholder="Number" 
          id="phone" 
          name="phone" 
          value={contact.phone} 
          onChange={handleChange}
        />
        <input 
          type="email"
          placeholder="E-mail" 
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

const ContactSearch = ({ handleSearch }) =>{
  const [searched, setSearched] = useState("")
  
  useEffect(()=>{
    handleSearch(searched)
  },[searched])
  
  return (
    <div>
      <label htmlFor="search">Search for contact: </label>
      <input 
        type="text" 
        id="search" 
        value={searched} 
        onChange={(e)=>setSearched(e.target.value)}
      />
    </div>
  )
}

const ContactList = ({ foundContacts, handleEdit, handleDelete }) =>{
  
  return(
    <div className="Contact-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {foundContacts.map(contact => (
            <tr key={contact.id} className="Contact-card">
              <td><strong>{contact.firstName} {contact.lastName}</strong></td>
              <td><strong>{contact.phone}</strong></td>
              <td><strong>{contact.email}</strong></td>
              <td>
                <button onClick={()=>handleEdit(contact.id)}>Edit</button>
                <button onClick={()=>handleDelete(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>       
      </table>
    </div>
  )
}

export default App