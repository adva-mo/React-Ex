import React, { useRef } from "react";

function App() {
  const play = () => {
    myVideo.current.play();
  };
  const pause = () => {
    myVideo.current.pause();
  };

  const myVideo = useRef();

  const src = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4 ";
  return (
    <div>
      <video controls width="100%" src={src} type="video/mp4" ref={myVideo} />
      <button onClick={play} id="play">
        play
      </button>
      <button onClick={pause} id="pause">
        pause
      </button>
    </div>
  );
}

export default App;
