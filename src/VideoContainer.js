import { VideoContent } from "./VideoContent";
import { videos } from "./db";

export const VideoContainer = () => {
  return (
    <div className="video-container">
      {videos.map((item) => (
        <VideoContent key={item.id} item={item} />
      ))}
    </div>
  );
};
