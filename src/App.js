import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Contacts from './components/Contacts'
import AddContact from './components/AddContact'
import React, { Component } from 'react'
import './styles/App.css'
import './styles/home.css'
import './styles/AddContact.css'
import './styles/header.css'
import './styles/contacts.css'

function App() {
  return (
    // Routing-->>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-list" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/addcontact" element={<AddContact />} />
      </Routes>
    </Router>
  )
}

export default App
