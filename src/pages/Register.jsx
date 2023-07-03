import React from 'react'

const Register = () => {
  return (
    <div className='Register'>
      <div className="formWrapper">
        <div className="blur"></div>
        <div className="blur"></div>
        <span className="logo">PrivateChat</span>
        <span className="title">Register</span>
        <form>
            <input type="text" name="" id="" placeholder='Name' />
            <input type="email" name="" id="" placeholder='Email' />
            <input type="password" name="" id="" placeholder='Password' />
            <input type="file" name="" id="file" style={{display: 'none'}} />
            <label htmlFor="file"><i class="fa-regular fa-image"></i><span>Select image</span></label>
            <button className="button">Sign Up</button>
        </form>
        <p>Already have an account? Login</p>
      </div>
    </div>
  )
}

export default Register
