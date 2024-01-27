import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
    <img className='w-10 h-10' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt='user'  />
    <span className='font-bold px-2'>{name}</span>
    <span>{message}</span>
    
    </div>
  )
}

export default ChatMessage