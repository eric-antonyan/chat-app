import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import Input from '../components/Input'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { api } from '../models/config.model'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

const Authentication = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponse] = useState({})

    const [emailOrPhoneNumber, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const redirect = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setResponse({});
        const data = { emailOrPhoneNumber, password };
        try {
            const res = await axios.post(api + "login", data);
            setResponse(res.data);
            setIsLoading(false);
            setTimeout(() => {
                if (response && response.data) {
                    Cookies.set('auth', response.data.uuid, {expires: 7});
                    redirect('/chats')
                }
            }, 800);
        } catch (error) {
            console.error('Error occurred:', error);
            setIsLoading(false);
        }
    };    

    return (
        <motion.div style={{ position: "relative" }} initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: "0" }} exit={{ x: ['0%', '100%'], opacity: 0 }} className='flex flex-col justify-center items-center logreg px-[24px]'>
            <motion.h1 initial={{ marginTop: "70px" }} animate={{ marginTop: "80px" }} exit={{ marginTop: "70px" }} className='mt-[80px] text-[#2A4ECA] text-[32px] font-semibold'>Sign In</motion.h1>
            <p className='font-[14px] text-[#61677D] mt-[16px] text-center'>It was popularised in the 1960s with the release of Letraset sheetscontaining Lorem Ipsum.</p>

            <form onSubmit={onSubmit} action="/" encType={'multipart/formdata'} className='flex flex-col justify-center items-center gap-[16px] mt-[16px] w-[100%]'>
                <Input onChange={(e) => setEmail(e.target.value)} value={emailOrPhoneNumber} placeholder='Enter phone number or email' />
                <Input onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Password' type='password' />
                <p className='text-end w-[100%]'><Link className='text-[#2A4ECA]' to="/forgotpassword">Forgot password?</Link></p>
                <p className={`text-center`} style={{ color: response.success ? "#5f0" : "#f05" }}>{response.message}</p>
                <Button isLoading={isLoading} afterText={isLoading ? 'Sign In' : 'Sign In'} value='Sign In' />
                <p className='mt-[16px]'>Do you have account? <Link to={'/'} className="text-[#3461FD]" href='/signin'>Sign Up</Link></p>
            </form>
            <Link to="/chats">chat</Link>
        </motion.div>
    )
}

export default Authentication