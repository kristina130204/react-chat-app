import React from 'react'

const Login = () => {
  return (
    <div className='Register'>
      <div className="formWrapper">
        <div className="blur"></div>
        <div className="blur"></div>
        <span className="logo">PrivateChat</span>
        <span className="title">Login</span>
        <form>
            <input type="email" name="" id="" placeholder='Email' />
            <input type="password" name="" id="" placeholder='Password' />
            <button className="button">Sign In</button>
        </form>
        <p>Don't have an account? Create one</p>
      </div>
    </div>
  )
}

export default Login
