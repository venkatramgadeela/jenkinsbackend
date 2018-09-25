import React from "react";
import Homecar from "../../assets/background-model3-blue.jpg";
import "./index.css";

const BackgroundImage = () => (
  <div className="homeimage" style={{ backgroundImage: `url(${Homecar})` }} />
);

export default BackgroundImage;
