import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbarcss'>
      <Link to="/allnotes">AllNotes</Link>
    <Link to="/">Create Notes</Link>
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
      
    </div>
  )
}

export default Navbar
