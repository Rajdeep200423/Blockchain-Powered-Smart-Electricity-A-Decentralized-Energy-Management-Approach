import React from "react";
import "./Features.css";

// Import images
import Decentralised from "../assets/Decentralised.png";
import Autonomy from "../assets/Autonomy.png";
import SmartContract from "../assets/SmartContract.png";
import Security from "../assets/Security.png";

const Features = () => {
  return (
    <div className="container">
      <div className="item">
        <img src={Decentralised} alt="Feature 1" />
      </div>
      <div className="item">
        <img src={Autonomy} alt="Feature 2" />
      </div>
      <div className="item">
        <img src={SmartContract} alt="Feature 3" />
      </div>
      <div className="item">
        <img src={Security} alt="Feature 4" />
      </div>
    </div>
  );
};

export default Features;