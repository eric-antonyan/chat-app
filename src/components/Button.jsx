import React from 'react'

const Button = ({ value = "No text", isLoading = false, isDisabled = false, afterText = value }) => {
    return (
        <button className={`bg-[#3461FD] gap-2 flex justify-center items-center w-[100%] mt-[16px] text-[#fff] p-[18px] rounded-[14px] ${isLoading ? 'opacity-[0.8]' : ''}`} disabled={isLoading} style={{ boxShadow: "0 0 15px #3461FD50", transition: "0.5s" }}>{isLoading ? <i class="fa-solid text-[1.3rem] fa-spinner-third fa-spin"></i> : ""} {isLoading ? afterText : value}</button>
    )
}

export default Button
