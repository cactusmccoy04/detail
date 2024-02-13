import React from "react";
import "../Stylesheets/comprobation-section.css";

export default function Comprobation() {
  const hideThisSection = () => {
    document
      .querySelector(".gif-touch-comprobation")
      .classList.add("go-out-class");

      document.querySelector(".note-ultimate-seccion-container").classList.add("showHiddenFinalSection");


  };

  return (
    <div className="first-section-comprobation-container">
      <img
        src="https://i.ibb.co/Nt8wPqQ/touch-image-two-month-gif.gif"
        alt="two-gif-image"
        className="gif-touch-comprobation"
        onClick={hideThisSection}
      />
    </div>
  );
}
