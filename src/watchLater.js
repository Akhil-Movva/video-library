import { NavigationBar } from "./NavigationBar";
import { WatchLaterContent } from "./watchLaterContent";
import { useVideo } from "./VideoContext";
import { useToast } from "./ToastContext";

export const WatchLater = () => {
  const {
    state: { watchLater }
  } = useVideo();

  const {
    toastState: { watchLaterToastVisibility, watchLaterToastText }
  } = useToast();

  return (
    <div className="container">
      <NavigationBar />
      <div style={{ width: "100%" }}>
        <div style={{ fontSize: "1.5rem", margin: "1rem 0" }}>Watch later</div>
        <div className="watch-later-container">
          {watchLater.map((item) => (
            <WatchLaterContent key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div style={{ visibility: watchLaterToastVisibility }} className="toast">
        <div className="toast__body">{watchLaterToastText}</div>
      </div>
    </div>
  );
};
