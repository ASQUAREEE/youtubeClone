import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';

const LiveChat = () => {

  const [liveMessage, setLiveMessage] = useState("")

  const dispatch = useDispatch();

  const ChatMessages = useSelector((store)=> store.chat.messages);

  useEffect(() => {
    const i =  setInterval(() => {
        //api polling
        dispatch(
          addMessage({
            name: "Ashher Ali",
            message: "Adsjjcnjsdnvesjnoes dsc dsjcnsdj"
          })
        )
      }, 1500);


 return ()=> clearInterval(i)

  },[])

  return (
    <>
    <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
    <div>
    {ChatMessages.map((c,index)=><ChatMessage
    name={c.name}
    message={c.message}
    key={index}
    />)}
    </div>  </div>
    <form onSubmit={(e)=>{ e.preventDefault()
    dispatch(addMessage({
      name: "Mr bean",
      message: liveMessage
    }))
    setLiveMessage("")
    }
    } className='w-full p-2 ml-2 border border-black'>
    <input className='w-96 px-2 ' type="text" value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)} />
    <button className='px-2 mx-4 bg-green-100'> Send </button>
  </form>
</>
  )
}

export default LiveChat