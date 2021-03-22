import React from "react";
import "./Holder.css";
function Holder({ image, reverse }) {
  return (
    <div className={`holder ${reverse ? "reverse" : ""}`}>
      <img src={image} alt="bottle" className="holder__image" />
    </div>
  );
}

export default Holder;
