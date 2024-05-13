import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Input from '../components/Input'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const ForgotPassword = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [verifyCode, setVerifyCode] = useState("")
    const [response, setResonse] = useState([])

    const onVerify = (e) => {
        e.preventDefault()
    }
    return (
        <motion.div style={{ position: "relative" }} initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: "0" }} exit={{ x: ['0%', '100%'], opacity: 0 }} className='flex flex-col justify-center items-center logreg px-[24px]'>
            <motion.h1 initial={{ marginTop: "70px" }} animate={{ marginTop: "80px" }} exit={{ marginTop: "70px" }} className='mt-[80px] text-[#2A4ECA] text-[32px] font-semibold'>Forgot Password</motion.h1>
            <p className='font-[14px] text-[#61677D] mt-[16px] text-center'>It was popularised in the 1960s with the release of Letraset sheetscontaining Lorem Ipsum.</p>

            <form onSubmit={onVerify} action="/" encType={'multipart/formdata'} className='flex flex-col justify-center items-center gap-[16px] mt-[16px] w-[100%]'>
                <Input onChange={(e) => setVerifyCode(e.target.value)} value={verifyCode} placeholder='Enter phone number or email' type='number' />
                <p className={`text-center`} style={{ color: response.success ? "#5f0" : "#f05" }}>{response.message}</p>
                <Button isLoading={isLoading} afterText={isLoading ? 'Verify' : 'Verify'} value='Verify' />
                <p className='mt-[16px]'>Do you have account? <Link to={'/'} className="text-[#3461FD]" href='/signin'>Sign In</Link></p>
            </form>
        </motion.div>
    )
}

export default ForgotPassword
