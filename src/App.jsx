import { useState } from "react";
import "./App.css";

import Comprobation from "./assets/components/Comprobation";
import MusicPlayer from "./assets/components/MusicPlayer";
import Note from "./assets/components/Note";

function App() {
  return (
    <div className="App">
      <Note />
      <MusicPlayer />
      <Comprobation />
    </div>
  )
}

export default App;
