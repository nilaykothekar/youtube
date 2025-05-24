import { Fragment } from "react";

const VideoCard = ({ data }) => {
  //console.log(data);
  const { snippet, statistics } = data;
  return (
    <Fragment>
      <main className="w-[250px] h-[300px] m-2 p-2 shadow-lg rounded-md hover:scale-95 cursor-pointer duration-200">
        <img
          src={snippet.thumbnails.medium.url}
          alt="thumbnail"
          className="w-full rounded-md"
        />
        <h3 className="text-md font-semibold p-2">{snippet.title}</h3>
        <p className="px-2 text-sm text-gray-500">{snippet.channelTitle}</p>
        <p className="px-2 text-sm text-gray-500">
          {Math.ceil(statistics.viewCount / 1000)}K views
        </p>
      </main>
    </Fragment>
  );
};

export default VideoCard;
