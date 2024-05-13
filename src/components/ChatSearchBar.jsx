import React from 'react'

const ChatSearchBar = () => {
  return (
    <div className='p-[8px] px-[24px] rounded-[10px] flex justify-between bg-[#F7F7FC] outline-none'>
      <input className='bg-[#F7F7FC]' placeholder='Search user by phone or username' type="text" />
      <button><i className="fa fa-search"></i></button>
    </div>
  )
}

export default ChatSearchBar
