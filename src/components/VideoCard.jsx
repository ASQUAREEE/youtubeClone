import React from 'react'

const VideoCard = (props) => {

const info = props.data;

const {snippet, statistics} = info;

const {channelTitle, title, thumbnails} = snippet;




  return (
    
    <div className='p-2 w-64 shadow-lg'>
    <img className='rounded-lg cursor-pointer' alt = 'thumbnail' src = {thumbnails.medium.url} />
    <ul>

    <li className='font-bold py-5 '>
    {title}
    </li>
    <li>
    {channelTitle}
    </li>
    <li>
    {statistics.viewCount}
    </li>


    </ul>
    
    
    </div>
  )
}

 

export default VideoCard