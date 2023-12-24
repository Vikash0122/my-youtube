import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {
  
  const [videos, setVideos] = useState([]); //state variables to loop on the videos

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () =>{
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();

    setVideos(json.items);
  }

  return (
    <div className="m-2 flex flex-wrap">
      {videos.map((video) => (
          <VideoCard info={video} />
      ))}
    </div>
  );
};

export default VideoContainer