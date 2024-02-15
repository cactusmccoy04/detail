import React, { useState, useRef } from "react";
import "../Stylesheets/music-player.css";

import { FaPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";

export default function MusicPlayer() {
  const audioPlayer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioPlayer.current.pause();
    } else {
      audioPlayer.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player-float-container">
      <h3 className="song-name-title">
        Yellow - <b>Cold Play</b>
      </h3>
      <aside className="album-name">
        Parachutes • <b style={{ color: "wheat" }}>2000</b>
      </aside>
      <audio
        ref={audioPlayer}
        src="https://firebasestorage.googleapis.com/v0/b/fleet-space-379301.appspot.com/o/coldPlay-Yello_song.mp3?alt=media&token=f530abf2-6605-4096-8351-7993fb4112ab"
      />
      <div onClick={togglePlay}>
        {isPlaying ? (
          <FaPauseCircle className="play-button-handle-icon" />
        ) : (
          <FaPlayCircle className="play-button-handle-icon" />
        )}
      </div>
    </div>
  );
}
