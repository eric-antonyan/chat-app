import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ChatHeader = ({ user }) => {
    return (
        <motion.header style={{ position: "relative" }} className='flex px-[16px] py-[17px] justify-between items-center'>
            <div className="left">
                <h1 className='flex items-center gap-[8px]'>
                    <Link to={'/chats'}>
                        <i className="fa text-[20px] fa-arrow-left"></i>
                    </Link>
                </h1>
            </div>
            <div className="flex items-center gap-3">
                <img className='w-[40px] h-[40px] rounded-[50%] object-cover object-center' src={user.avatar} alt="" />
                <p className='text-[18px] font-medium'>{user.username}</p>
            </div>
            <div className="flex items-center gap-[14px]">
                <i className="fa text-[20px] fa-search"></i>
                <i className="fa text-[20px] fa-bars"></i>
            </div>
        </motion.header>
    )
}

export default ChatHeader
