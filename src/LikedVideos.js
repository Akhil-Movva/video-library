import { NavigationBar } from "./NavigationBar";
import { useVideo } from "./VideoContext";
import { LikedVideoContent } from "./LikedVideoContent";

export const LikedVideos = () => {
  const {
    state: { likedVideos }
  } = useVideo();
  return (
    <div className="container">
      <NavigationBar />
      <div style={{ width: "100%" }}>
        <div style={{ fontSize: "1.5rem", margin: "1rem 0" }}>Liked videos</div>
        <div className="liked-videos-container">
          {likedVideos.map((item) => (
            <LikedVideoContent key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
