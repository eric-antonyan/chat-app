import React from 'react'

const Input = ({placeholder = '', value = '', type = 'text', onChange}) => {
  return (
    <input onChange={onChange} value={value} className='w-[100%] px-[24px] py-[18px] rounded-[14px]' type={type} placeholder={placeholder} />
  )
}

export default Input
