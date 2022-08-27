import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar' >
      <h1>Blog</h1>
      <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/create" >New Blog</Link>
      </div>
    </div>
  )
}

export default Navbar