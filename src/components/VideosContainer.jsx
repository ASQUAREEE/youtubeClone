import React, { useEffect, useState } from 'react'
import { YOUTUBE_VID_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideosContainer = () => {

const [videos, setVideos] = useState([]);


useEffect(()=> {

  getVideos();

},[]);


const getVideos = async () => {
  const Youtube  = await fetch(YOUTUBE_VID_API);
  const data = await Youtube.json();

  setVideos(data.items);
  console.log(data);
}

  return (
   
    <div className='flex flex-wrap p-5'>
    
    {videos.map((video)=> {

return(
  <Link key={video.id} to = {"/watch?v=" + video.id}> <VideoCard key={video.id} data={video} /> </Link>

)
    })
    
    
    
    }
    
    </div>
  )
}

export default VideosContainer