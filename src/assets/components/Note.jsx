import React from "react";
import "../Stylesheets/note-section.css";

export default function Note() {
  return (
    <div className="note-ultimate-seccion-container">
      <h1 className="title-note">
        Un mes mas siendo feliz con mi princesa <br />
        👑
      </h1>
      <img
        className="achivement-image"
        src="https://i.ibb.co/LdnCRY4/achivement.png"
        alt=""
      />
      <p className="cited-text">
        felicidades por llegar hasta aquí, toma una <b>vida extra</b>, <br />{" "}
        <p className="iloveyou-text">te amo mucho</p>
      </p>
    </div>
  );
}
