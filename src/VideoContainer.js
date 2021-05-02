import { videos } from "./db";
import { Link } from "react-router-dom";

export const VideoContainer = () => {
  return (
    <div className="video-container">
      {videos.map((item) => (
        <div key={item.id} className="content">
          <Link className="content__link" to={`/video/${item.id}`}>
            <img className="img-responsive" src={item.thumbnail} alt="video" />
            <div className="content__title">{item.title}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};
