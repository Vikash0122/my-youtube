import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = { ...info };
  const { title, channelTitle, thumbnails } = { ...snippet };
  return (
    <div className="m-2 my-4 w-64 shadow-lg">
      <img src={thumbnails.medium.url} alt="video-img" className="rounded-xl" />
      <ul className="p-2">
        <li className="font-semibold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;