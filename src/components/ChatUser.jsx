import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

const ChatUser = ({ user, i, users }) => {
    const messageWidth = (text) => {
        const maxWidth = 20;
        if (text.length >= maxWidth) {
            let newText = "";
            for (let j = 0; j < maxWidth; j++) {
                newText += text[j]
            }
            return newText + "..."
        } else {
            return text
        }
    }
    return (
        <Link to={'/chat/' + user.uuid} className='flex flex-col gap-[16px]'>
            <motion.div transition={{ duration: i }} className='flex gap-[12px] relative'>
                <div className='left relative'>
                    {user.status === "active" ? <div className="bg-[#2CC069] top-[-6px] right-[-6px] absolute w-[18px] h-[18px] rounded-[50%] border-[2px] border-solid border-[#fff]"></div> : ""}
                    <img className="w-[58px] rounded-[16px] object-cover object-center h-[58px]" src={user.avatar} alt="" />
                </div>
                <div className='flex flex-col'>
                    <p>{user.firstName + " " + user.lastName}</p>
                    <p className='text-[#ADB5BD]'>{messageWidth(user.messages[user.messages.length - 1])}</p>
                </div>
                <div className="not px-[8px] py-[2px] bg-[#D2D5F9] text-[#001A83] absolute top-[50%] translate-y-[-50%] rounded-[40px] right-0">
                    {user.messages.length}
                </div>
            </motion.div>
            {i !== users.length - 1 ? <div className="bg-[#EDEDED] h-[2px] w-[100%]"></div> : ""}
        </Link>
    )
}

export default ChatUser
