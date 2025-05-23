import { Fragment, useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const videos = await fetch(YOUTUBE_VIDEOS_API);
      const data = await videos.json();
      // console.log(data);
      setVideos(data?.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-start items-center flex-wrap">
      {videos.map((video) => {
        return (
          <Link to={"/watch?v=" + video?.id} key={video?.id}>
            <VideoCard data={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
