import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Header = () => {
  const dispatch = useDispatch();

 const toggleMenuHandler = () => {

 dispatch(toggleMenu());
  

 };


 const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        {" "}
        {/* grid divided in 12 , so 1 portion it contain  */}
        <img
          onClick={() => {
            toggleMenuHandler();
          }}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/non_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="Youtube Logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          />
        </a>
      </div>

      <div className="flex col-span-10 justify-center">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e)=>{
            setSearchQuery(e.target.value);
          }}
        />
        <button className=" border border-gray-400 p-2 rounded-r-full py-2 px-5 bg-gray-200">
          Search
        </button>
      </div>

      <div className="flex col-span-1">
        <img
          className="h-8"
          alt="userIcon"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        />
      </div>
    </div>
  );
}

export default Header