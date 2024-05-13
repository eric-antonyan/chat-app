import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import Input from '../components/Input'
import { Link, useNavigate } from 'react-router-dom'
import "../models/config.model"
import { api } from '../models/config.model'
import axios from 'axios'

const Create = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [response, setResponse] = useState({})
    const navigate = useNavigate()
    const onSubmit = async (e) => {
        e.preventDefault()
        setResponse([])
        setIsLoading(true)
        const data = {
            uuid: crypto.randomUUID(),
            name,
            email,
            phoneNumber,
            password,
            username
        }

        const res = await axios.post(api + "create", data)
        if (res.data.success) {
            navigate('/signin')
        }
        setResponse(res.data)
        setIsLoading(false)
    }
    return (
        <motion.div style={{ position: "relative" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='flex flex-col justify-center items-center logreg px-[24px]'>
            <motion.h1 initial={{ marginTop: "70px", opacity: 0 }} animate={{ marginTop: "80px", opacity: 1 }} exit={{ marginTop: "70px", opacity: 0 }} className='mt-[80px] text-[#2A4ECA] text-[32px] font-semibold'>Sign Up</motion.h1>
            <p className='font-[14px] text-[#61677D] mt-[16px] text-center'>It was popularised in the 1960s with the release of Letraset sheetscontaining Lorem Ipsum.</p>

            <form onSubmit={onSubmit} action="/" encType={'multipart/formdata'} className='flex flex-col justify-center items-center gap-[16px] mt-[16px] w-[100%]'>
                <Input placeholder='Name' onChange={(e) => setName(e.target.value)} value={name} />
                <Input placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} />
                <Input placeholder='Phone number without (+)' onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} type='number' />
                <Input placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} type='password' />
                <Input placeholder='Username' onChange={(e) => setUsername(e.target.value)} value={username} />
                <p className={`text-center`} style={{ color: response.success ? "#5f0" : "#f05" }}>{response.message}</p>
                <Button isLoading={isLoading} afterText={isLoading ? 'Creating' : 'Create Account'} value='Create Account' />
                <p className='mt-[16px]'>Do you have account? <Link to={'/signin'} className="text-[#3461FD]" href='/signin'>Sign In</Link></p>
            </form>
        </motion.div>
    )
}

export default Create
