import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { VideoProvider } from "./VideoContext";
import { ToastProvider } from "./ToastContext";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <VideoProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </VideoProvider>
    </Router>
  </StrictMode>,
  rootElement
);
