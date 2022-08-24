import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar' >
      <h1>Blog</h1>
      <div className='links'>
        <a href="/">Home</a>
        <a href="/create" >New Blog</a>
      </div>
    </div>
  )
}

export default Navbar