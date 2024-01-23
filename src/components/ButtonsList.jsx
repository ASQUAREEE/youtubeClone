import React from "react";
import Button from "./Button";

const ButtonsList = () => {
  const list = ["All", "Gaming", "Songs", "Live", "Cricket", "Valentine","Guitar"];

  return(
    
    <div className="flex">
    
   { list.map((item,index) => {
    return (
     
        <Button key={index} name={item} />
 
    );
  })
   }

  </div>

)

};

export default ButtonsList;
