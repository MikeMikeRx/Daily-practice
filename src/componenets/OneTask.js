import React from 'react'

const OneTask = ({ text, handleDelete, id }) => {
  return <div>
    <h3>{text}</h3>
    <input type="checkbox" />
    <button onClick={() => {handleDelete(id)}}>X</button>
  </div>
  
}

export default OneTask