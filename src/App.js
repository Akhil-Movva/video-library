import "./styles.css";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import { VideoPlayer } from "./VideoPlayer";
import { NoMatch } from "./NoMatch";
import { Container } from "./Container";
import { WatchLater } from "./WatchLater";
import { LikedVideos } from "./LikedVideos";
import { History } from "./History";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/video/:videoId" element={<VideoPlayer />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/likedVideos" element={<LikedVideos />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}
