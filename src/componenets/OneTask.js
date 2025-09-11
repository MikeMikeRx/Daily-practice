import React from 'react'

const OneTask = ({ text, handleDelete }) => {
  return <div>
    <h3>{text}</h3>
    <input type="checkbox" />
    <button>X</button>
  </div>
  
}

export default OneTask