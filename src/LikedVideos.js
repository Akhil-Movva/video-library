import { NavigationBar } from "./NavigationBar";
import { useVideo } from "./VideoContext";

export const LikedVideos = () => {
  const {
    state: { likedVideos }
  } = useVideo();
  return (
    <div className="container">
      <NavigationBar />
      <div>
        {likedVideos.map((item) => (
          <h3>{item.title}</h3>
        ))}
      </div>
    </div>
  );
};
