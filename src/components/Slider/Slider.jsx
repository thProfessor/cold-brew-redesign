import React from "react";
import "./Slider.css";
import Bottle from "../../images/bottle_greedy.png";
import Kit from "../../images/kit_greedy.png";
import Packet from "../../images/packet_greedy.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
function Slider({ reverse }) {
  return (
    <div className="slider">
      <div className={`img__container ${reverse ? "reversed" : ""}`}>
        <img src={Bottle} alt="bottle" className="slider_image" />
        <img src={Kit} alt="Kit" className="slider_image" />
        <img src={Packet} alt="Packet" className="slider_image" />
        <div>
          <FaArrowAltCircleRight style={{ color: "#fff", fontSize: "1.5em" }} />
        </div>
      </div>
    </div>
  );
}

export default Slider;
