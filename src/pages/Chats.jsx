import React from 'react'
import { motion } from 'framer-motion'
import ChatMenuHeader from '../components/ChatMenuHeader'
import ChatSearchBar from '../components/ChatSearchBar'
import ChatLists from '../components/ChatLists'
import { useParams } from 'react-router-dom'
import BottomBar from '../components/BottomBar'

export const users = [
  {
    firstName: "Liana",
    lastName: "Antonyan",
    avatar: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
    status: "active",
    uuid: "1e38f0cf-7c7e-4f9e-ae77-30126e6e33d1",
    username: "liana_antonyan",
    messages: [
      "Hello",
      "How are you?"
    ]
  },
  {
    firstName: "Diana",
    lastName: "Antonyan",
    avatar: "https://img.freepik.com/free-photo/cheerful-dark-skinned-woman-smiling-broadly-rejoicing-her-victory-competition-among-young-writers-standing-isolated-against-grey-wall-people-success-youth-happiness-concept_273609-1246.jpg",
    status: "deactive",
    uuid: "5a0a4bd2-8b02-4fbf-a58c-493c69cb1891",
    username: "diana_antonyan",
    messages: [
      "Hello",
      "I'am fine, tou too?"
    ]
  },
  {
    firstName: "Emily",
    lastName: "Rodriguez",
    avatar: "https://img.freepik.com/premium-photo/image-young-woman-20s-wearing-yellow-raincoat-holding-mobile-phone-smiling_171337-51781.jpg?size=626&ext=jpg&ga=GA1.1.219867356.1714292903&semt=sph",
    uuid: "e2b4e1bc-3e94-4c0e-a6dc-f3c3f3d5d6e7",
    username: "emily_rodriguez",
    messages: [
      "Hello Eric",
      "My name is Emily",
      "How are you?",
      "I am web designer",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    ]
  }
]

const Chat = () => {
  return (
    <motion.div className='relative' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, left: "-100%" }}>
      <ChatMenuHeader />
      <div style={{height: "calc(100vh - 56.8px - 56px)"}}>
        <ChatSearchBar />
        <ChatLists users={users} />
      </div>
      <BottomBar />
    </motion.div>
  )
}

export default Chat
