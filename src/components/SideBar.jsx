import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SideBar = () => {


    const menuIsOpen = useSelector((store)=> {return store.app.menuIsOpen})


    //early return
    if(!menuIsOpen){
       return null; 
    }

  return (
    <div className='p-6 shadow-lg w-48'>
    

<ul>
    <li><Link to={"/"}>Home</Link></li>
    <li>Shorts</li>
    <li>Videos</li>
    <li>Live</li>
</ul>
    <h1 className='font-bold'>Subscription</h1>
<ul>
    <li>Music</li>
    <li>Sports</li>
    <li>Gaming</li>
    <li>Movie</li>
</ul>

    <h1 className='font-bold pt-5 '>Watch Later</h1>
<ul>
    <li>Music</li>
    <li>Sports</li>
    <li>Gaming</li>
    <li>Movie</li>
</ul>
    
    </div>
  )
}

export default SideBar