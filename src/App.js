import { useState } from "react";
import ReactPlayer from "react-player";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        {showVideo ? <Video /> : <Logo />}

        <button
          className={showVideo ? "button-alt-color" : ""}
          onClick={() => setShowVideo(!showVideo)}
        >
          {showVideo ? "CLOSE" : "OPEN"}
        </button>
      </header>
    </div>
  );
}

function Logo() {
  return <img src={logo} className="App-logo" alt="logo" />;
}

function Video() {
  const url = "https://www.youtube.com/watch?v=VR9LEqq6kYc";
  return (
    <div className="player-wrapper">
      <ReactPlayer url={url} width="100%" height="100%" />
    </div>
  );
}

export default App;
