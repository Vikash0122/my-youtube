import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch(); // hook
  const toggleMenuHandler = () =>{
    dispatch(toggleMenu());
  }; // dipatch an action
  return (
    <div className="grid grid-flow-col m-2 p-5 items-end shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={()=>toggleMenuHandler()}
          className="h-6 mr-6 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/3917/3917215.png"
          alt="menu"
        />
        <img
          className="h-6 cursor-pointer mb-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt="logo"
        />
      </div>
      <div className="flex col-span-10 px-10 justify-center w-full h-10">
        <input
          type="text"
          className="w-1/2 p-2 border border-gray-400 rounded-l-full"
        />
        <div className="px-4 py-2 bg-gray-100 border border-gray-400 rounded-r-full">
          <button>🔍</button>
        </div>
      </div>
      <div className="col-span-1">
        <img
          className="h-9"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
