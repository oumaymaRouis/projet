import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import souris from "../assets/souris.png";
import laptop from "../assets/laptop.jpg";
import pcPortablee from "../assets/pcPortablee.png";
import pc1 from "../assets/pc1.png";

import "../styles/Slide.css";
import Home from "../assets/Home.jpg";

export default function Slide() {
  const navigate = useNavigate();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handleSearch = () => {
    navigate("/secondpage");
  };

  return (
    <div className="Slide">
      <div className="writing-carousel">
        <h1>Search By :</h1>
      </div>
      <Carousel responsive={responsive}>
        <div className="card-two">
          <img className="souris" src={souris} style={{ width: "200px" }} />
        </div>
        <div className="card-three">
          <img className="laptop" src={laptop} style={{ width: "200px" }} />
        </div>
        <div className="card-four">
          <img
            className="pcPortablee"
            src={pcPortablee}
            style={{ width: "200px" }}
          />
        </div>
        <div className="card-five">
          <img className="Home" src={Home} style={{ width: "200px" }} />
        </div>
        <div className="card-six">
          <img className="pc1" src={pc1} style={{ width: "200px" }} />
        </div>
      </Carousel>
      <div className="btn-container">
        <button className="btn btn-yellow-two" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}
