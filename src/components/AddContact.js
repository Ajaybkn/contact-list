import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const AddContact = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const navigate = useNavigate()
  // API POST METHOD-->>
  function saveUser() {
    document.getElementById('btn').innerHTML = 'Added'
    document.getElementById('btn').style.backgroundColor = 'green'
    alert('Contact Added Succesfully')
    let data = { name, phone }
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((resp) => {
      resp.json().then((result) => {
        // navigate to redirect page to contacts-->>
        navigate('/contacts')
      })
    })
  }
  return (
    <div className="contacts">
      <form>
        <h1 className="add">Add Contact</h1>
        <input
          type="text"
          value={name}
          name="name"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <input
          type="number"
          value={phone}
          name="phone"
          placeholder="Number"
          onChange={(e) => {
            setPhone(e.target.value)
          }}
        />
        <button id="btn" type="button" onClick={saveUser}>
          Add Contact
        </button>
      </form>
    </div>
  )
}

export default AddContact
