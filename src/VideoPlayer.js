import { videos } from "./db";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

export const VideoPlayer = () => {
  const { videoId } = useParams();
  const video = videos.find((item) => item.id === Number(videoId));
  return (
    <div className="video-player">
      <ReactPlayer
        width="52rem"
        height="30rem"
        playing={true}
        controls
        url={video.url}
      />
      <div className="video-player__title">{video.title}</div>
    </div>
  );
};
