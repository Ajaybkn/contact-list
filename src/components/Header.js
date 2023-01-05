import React from 'react'

import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav>
      <h1>CONTACT MANAGER</h1>
      <main>
        {/* Navigation */}
        <Link to={'/'}>Home</Link>
        <Link to={'/contacts'}>Contacts</Link>
        <Link to={'/addContact'}>Add Contact</Link>
      </main>
    </nav>
  )
}

export default Header
