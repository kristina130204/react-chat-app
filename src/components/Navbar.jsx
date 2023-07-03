import React from 'react'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <span className="logo">PrivateChat</span>
      <div className="user">
        <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
        <span>John</span>
        <button className="button">Logout</button>
      </div>
    </div>
  )
}

export default Navbar
