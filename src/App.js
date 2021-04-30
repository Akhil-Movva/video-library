import "./styles.css";
import Header from "./header";
import { NavigationBar } from "./NavigationBar";
import { videos } from "./db";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <NavigationBar />
        <div className="video-container">
          {videos.map((item) => (
            <div className="content">
              <img
                className="img-responsive"
                src={item.thumbnail}
                alt="video"
              />
              <div>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
