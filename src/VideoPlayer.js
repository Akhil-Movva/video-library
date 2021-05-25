import { useVideo } from "./VideoContext";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

export const VideoPlayer = () => {
  const { videoId } = useParams();
  const {
    state: { videoList },
    dispatch
  } = useVideo();
  const video = videoList.find((item) => item.id === Number(videoId));
  return (
    <div className="video-player">
      <ReactPlayer
        width="52rem"
        height="30rem"
        playing={true}
        controls
        url={video.url}
      />
      <div className="video-player__details">
        <div className="video-player__details__title">{video.title}</div>

        <button
          onClick={() => {
            dispatch({ type: "TOGGLE_LIKE_VIDEO", payload: video });
          }}
          className="video-player__details__button"
        >
          <i
            style={{ color: video.isLiked ? "blue" : "black" }}
            className="fas fa-thumbs-up fa-lg"
          ></i>
        </button>
        <hr style={{ margin: "0.5rem 0", width: "52rem" }} />
      </div>
    </div>
  );
};
