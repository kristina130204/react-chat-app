import React from 'react'

const Input = () => {
  return (
    <div className='Input'>
      <input type="text" placeholder='Type a message...' />
      <div className="send">
        <input type="file" name="" id="file" style={{display:'none'}} />
        <label htmlFor="file"><i class="fa-regular fa-image"></i></label>
        <button className="button">Send</button>
      </div>
    </div>
  )
}

export default Input
