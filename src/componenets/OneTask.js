import React from 'react'

const OneTask = ({ text, handleDelete, key }) => {
  return <div>
    <h3>{text}</h3>
    <input type="checkbox" />
    <button onClick={() => {handleDelete(key)}}>X</button>
  </div>
  
}

export default OneTask