import "./styles.css";
import Header from "./header";
import { Routes, Route } from "react-router-dom";
import { VideoPlayer } from "./VideoPlayer";
import { NoMatch } from "./NoMatch";
import { Container } from "./Container";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/video/:videoId" element={<VideoPlayer />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}
