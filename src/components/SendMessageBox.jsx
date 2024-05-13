import React from 'react'

const SendMessageBox = () => {
  return (
    <form style={{borderTop: "1px solid #d5d5d5"}} className='bg-[#fbfbfb] px-[16px] w-[100%] h-[56px] flex'>
      <input style={{background: "none"}} className='h-[100%] w-[100%]' placeholder='Say something...' type="text" />
      <button className='text-[#002DE3]'><i class="fa-solid -rotate-[45deg] fa-paper-plane-top"></i></button>
    </form>
  )
}

export default SendMessageBox