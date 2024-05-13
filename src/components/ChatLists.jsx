import React from 'react'
import ChatUser from './ChatUser'

const ChatLists = ({ users }) => {
    return (
        <div className='mt-[20px] px-[24px]  flex flex-col gap-[16px] overflow-auto'>
            {
                users.map((user, i) => <ChatUser user={user} i={i} users={users} />)
            }
        </div>
    )
}

export default ChatLists
