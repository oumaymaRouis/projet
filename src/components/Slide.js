import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import macbook from "../assets/macbook.png";
import laptop from "../assets/laptop.jpg";
import Basics from "../assets/Basics.png";
import "../styles/Slide.css";
import GamingLaptop from "../assets/GamingLaptop.jpg";

export default function Slide() {
  const navigate = useNavigate();

  const responsive = {
    gaming: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    performance: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    basic: {
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
        <div className="first-choice">
          <img
            className="macbook"
            alt=""
            src={macbook}
            style={{ width: "250px", height: "140px" }}
          />
          <div className="text-block">
            <h2>MacBook</h2>
          </div>
        </div>

        <div className="card-three">
          <img
            className="laptop"
            alt=""
            src={laptop}
            style={{ width: "250px", height: "140px" }}
          />
          <div className="text-block">
            <h2>Performance</h2>
          </div>
        </div>
        <div className="card-four">
          <img
            className="Basics"
            alt=""
            src={Basics}
            style={{ width: "250px", height: "140px" }}
          />
          <div className="text-block">
            <h2>Basic</h2>
          </div>
        </div>
        <div className="card-five">
          <img
            className="GamingLaptop"
            alt=""
            src={GamingLaptop}
            style={{ width: "250px", height: "140px" }}
          />
          <div className="text-block">
            <h2>Gaming</h2>
          </div>
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
