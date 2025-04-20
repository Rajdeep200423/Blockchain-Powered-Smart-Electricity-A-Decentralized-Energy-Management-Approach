import React from "react";
import "./Head.css";
import Bolt from "../assets/Bolt.png"; // Import your image

const Head = () => {
  return (
    <div id="Container">
      <img src={Bolt} alt="Electro Coin Logo" className="logo" />
      <span>Electro Coin</span>
    </div>
  );
};

export default Head;