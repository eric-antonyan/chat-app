import React, { useEffect, useRef } from 'react'

const MessagesBox = ({ messages, user }) => {
    const isEven = (num) => num % 2 === 0;

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    
    return (
        <div className='flex relative gap-[20px] flex-col p-[16px] overflow-auto' style={{height: "calc(var(--screenHeight) - 74px - 56px)"}}>
            {
                messages.map((message, i) => {
                    return isEven(i) ? <div className='justify-start flex items-end'>
                        <img className='w-[40px] sticky bottom-0 h-[40px] rounded-[50%] object-cover object-center' src={user.avatar} alt="" /><div style={{ borderTopLeftRadius: "18px", borderTopRightRadius: "18px", borderBottomRightRadius: "18px", borderBottomLeftRadius: "4px", maxWidth: "70%" }} className='bg-[#EFEFEF] text-[.9375rem] ml-[15px] p-[10px]'>{message}</div>
                    </div> : <div className='flex justify-end'>
                        <div style={{ borderRadius: "18px", maxWidth: "70%" }} className='text-[.9375rem] bg-[#002DE3] text-white float-end px-[12px] py-[7px]'>{message}</div>
                    </div>
                })
            }
            <div ref={messagesEndRef} />
        </div>
    )
}

export default MessagesBox
