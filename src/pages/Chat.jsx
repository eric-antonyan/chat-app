import React from 'react'
import { motion } from 'framer-motion'
import ChatHeader from '../components/ChatHeader'
import { useParams } from 'react-router-dom'
import { users } from './Chats'
import MessagesBox from '../components/MessagesBox'
import SendMessageBox from '../components/SendMessageBox'

const Chat = () => {
  const { uuid } = useParams();
  const user = users.find(item => item.uuid === uuid);
  const messages = user.messages;
  return (
    <motion.div className='w-[100%]' style={{ position: "fixed" }} initial={{ left: "200%", opacity: 0 }} animate={{ left: "0%", opacity: 1 }} exit={{ left: "-100%", opacity: 0 }}>
      <ChatHeader user={user} />
      <MessagesBox messages={messages} user={user} />
      <SendMessageBox />
    </motion.div>
  )
}

export default Chat
