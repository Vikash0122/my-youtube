import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SUGGESTION_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);
  
  useEffect(()=>{
    // make an api call after every key press
    // but if the difference between 2 api calls <200ms
    // decline the api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };


  const toggleMenuHandler = () =>{
    dispatch(toggleMenu());
  }; // dipatch an action

  return (
    <div className="grid grid-flow-col fixed bg-white w-full p-5 items-end shadow-lg">
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
      <div className="col-span-10 px-28">
        <div className="flex">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            className="w-4/5 p-2 px-5 border border-gray-400 rounded-l-full"
          />
          <div className="px-4 py-2 bg-gray-100 border border-gray-400 rounded-r-full">
            🔍
          </div>
        </div>
        {showSuggestions && (<div className="fixed bg-white py-2 px-5 w-[35rem] rounded-lg shadow-lg border border-gray-100">
          <ul>
            {suggestions.map((suggestion, i) => <li className=" py-2 m-1 hover:bg-gray-100" key={i}>🔍 {suggestion}</li>)}
          </ul>
        </div>
        )}
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
