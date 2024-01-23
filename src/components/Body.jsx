import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex">
      <SideBar />

      <Outlet />   {/* kaun sa kab render hoga , matlab jb video pr click kiye tb body mai kya hona chahiye */}


    </div>
  );
};

export default Body;
