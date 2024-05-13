import React from 'react'


const ChatMenuHeader = () => {
  return (
    <div className={'py-[14px] px-[24px] z-10 sticky top-0 flex justify-between items-center bg-[#fff] w-[100%]'}>
      <div className="flex gap-3 items-center text-[18px]">
        <i className="fa fa-bars"></i>
        <h1 className='text-[1.2rem] font-regular'>Chats</h1>
      </div>
      <i className="fa fa-plus"></i>
    </div>
  )
}

export default ChatMenuHeader
