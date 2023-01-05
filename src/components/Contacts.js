import React, { useEffect, useState } from 'react'
// react icons pack-->>
import { FaTrashAlt, FaEdit } from 'react-icons/fa'
// functional component-->>
const Contacts = () => {
  // states-->>
  const [users, setUsers] = useState([])
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [userId, setuserId] = useState(null)

  useEffect(() => {
    getData()
  }, [])
  //API GET METHOD-->>
  const getData = async () => {
    fetch('https://jsonplaceholder.typicode.com/users').then((result) => {
      result.json().then((res) => {
        // setting state-->>
        setUsers(res)
        setName(res[0].name)
        setPhone(res[0].phone)
        setuserId(res[0].id)
      })
    })
  }
  // API DELETE METHOD-->>
  function deleteUser(id) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
    }).then((result) => {
      result.json().then((resp) => {
        getData()
      })
    })
    alert('Deleted Successfully')
  }
  function selectUser(id) {
    // alert(users[id - 1])
    setName(users[id - 1].name)
    setPhone(users[id - 1].phone)
    setuserId(users[id - 1].id)
  }
  // API PUT METHOD-->>
  function updateUser() {
    let item = { name, phone, userId }
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    }).then((result) => {
      result.json().then((resp) => {
        getData()
      })
    })
    alert('User Updated Successfully')
  }
  return (
    <div>
      <div className="input">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button className="updt" onClick={updateUser}>
          Update
        </button>
      </div>
      <table border="1" width="80%">
        <tr className="headings">
          <td>Name</td>
          <td>Phone</td>
          <td>Operations</td>
        </tr>
        {users.map((item) => {
          return (
            <tr>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td className="btn ">
                <button className="dlt" onClick={() => deleteUser(item.id)}>
                  {<FaTrashAlt />}
                </button>
                <button className="edit" onClick={() => selectUser(item.id)}>
                  {<FaEdit />}
                </button>
              </td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default Contacts
