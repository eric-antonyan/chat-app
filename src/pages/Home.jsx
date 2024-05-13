import React from 'react'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div style={{position: "relative"}} initial={{left: "200%"}} animate={{left: "0%"}} exit={{left: "-100%"}} className='flex flex-col gap-3 justify-center items-center'>
      Hello World
      <a className='text-cyan-500' href="/chat">chat</a>
    </motion.div>
  )
}

export default Home