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
    const edited = contactList.find(a => a.id === editedId)  
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

  useEffect(()=>{
    localStorage.setItem("ContactList", (JSON.stringify(contactList)))
  },[contactList])

  return (
    <div>
      <section className="AddContact-sec">
        <ContactForm handleAddNew={handleAddNew}/>
      </section>

      <section className="Search-sec">
        <ContactSearch handleSearch={handleSearch}/>
      </section>

      <section className="List-sec">
        <ContactList foundContacts={foundContacts} handleEdit={handleEdit}/>
      </section>
    </div>
  )
}


const ContactForm = ({ handleAddNew }) =>{
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
    handleAddNew(newContact)
    setContact({firstName:"", lastName:"", phone:"", email:""})   
  }


    // setContact({
    //   firstName: edited.firstName,
    //   lastName: edited.lastName,
    //   phone: edited.phone,
    //   email: edited.email
    // })   
  

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

const ContactSearch = ({ handleSearch }) =>{
  const [searched, setSearched] = useState("")
  
  useEffect(()=>{
    handleSearch(searched)
  },[searched])
  
  return (
    <div>
      <label htmlFor="search">Search for contact: </label>
      <input type="text" id="search" value={searched} onChange={(e)=>setSearched(e.target.value)}/>
    </div>
  )
}

const ContactList = ({ foundContacts, handleEdit }) =>{
  
  return(
    <ul>
      {foundContacts.map(contact => (
        <li key={contact.id}>
          <p>Name: <strong>{contact.firstName} {contact.lastName}</strong></p>
          <p>Phone : <strong>{contact.phone}</strong></p>
          <p>E-mail: <strong>{contact.email}</strong></p>
          <button onClick={()=>handleEdit(contact.id)}>Edit</button>
        </li>
      ))}
    </ul>
  )
}

export default App