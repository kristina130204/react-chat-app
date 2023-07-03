import React from 'react'

const Search = () => {
  return (
    <div className='Search'>
      <form action="" className="searchForm">
        <input type="text" placeholder='Find a user' />
      </form>
      <div className="userChat">
        <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search
