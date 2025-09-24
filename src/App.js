import { useState } from "react"

const App = () => {
  const[contact, setContact] = useState({name:"", surname:"", phone:""})
  const[contactList, setContactList] = useState([])


  return (
    <div>App</div>
  )
}

export default App