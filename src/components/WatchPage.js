import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {

    const [searchParam] =useSearchParams();

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(closeMenu());
    }, [])
  return (
    <div className="mt-24 m-5">
      <iframe
        width="640"
        height="360"
        src={"https://www.youtube.com/embed/" + searchParam.get("v")}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        frameBorder="0"
      ></iframe>
    </div>
  )
}

export default WatchPage