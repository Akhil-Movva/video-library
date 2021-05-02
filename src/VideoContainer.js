import { videos } from "./db";

export const VideoContainer = () => {
  return (
    <div className="video-container">
      {videos.map((item) => (
        <div className="content">
          <img className="img-responsive" src={item.thumbnail} alt="video" />
          <div>{item.title}</div>
        </div>
      ))}
    </div>
  );
};
