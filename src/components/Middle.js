import React, { Component } from "react";
import "../styles/Middle.css";
import background from "../assets/background.png";
import Slider from "react-slick";
import Price from "./Price";
class Middle extends Component {
  state = {};

  render() {
    return (
      <div className="middle-container">
        <div className="background-image-container">
          <img
            alt=""
            className="background"
            src={background}
            style={{ width: "1000px" }}
          />
        </div>
        <div className="middle-part">
          <div className="middle-writing">
            <h1>
              Making A Decision <br /> A Bit Easier!
            </h1>
          </div>
          <div className="price-container">
            <h1>What is your budget?</h1>
          </div>
          <div className="slide-container">
            <div className="slide-writing">
              <h1>500 DTN - 3850 DTN</h1>
              <Price></Price>
            </div>
          </div>

          <div className="slider-big-container">
            <Slider></Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default Middle;
