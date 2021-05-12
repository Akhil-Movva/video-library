import { NavigationBar } from "./NavigationBar";
import { WatchLaterContent } from "./watchLaterContent";
import { useVideo } from "./VideoContext";

export const WatchLater = () => {
  const {
    state: { watchLater }
  } = useVideo();

  return (
    <div className="container">
      <NavigationBar />
      <div style={{ width: "100%" }}>
        <div style={{ fontSize: "1.5rem", margin: "1rem 0" }}>Watch later</div>
        <div className="watch-later-container">
          {watchLater.map((item) => (
            <WatchLaterContent item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
