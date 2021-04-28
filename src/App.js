import "./styles.css";
import Header from "./header";
import { NavigationBar } from "./NavigationBar";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <NavigationBar />
      </div>
    </div>
  );
}
