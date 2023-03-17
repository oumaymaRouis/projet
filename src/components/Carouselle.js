import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import macbook from "../assets/macbook.png";
import laptop from "../assets/laptop.jpg";
import Basics from "../assets/Basics.png";
import "../styles/carouselle.css";
import GamingLaptop from "../assets/GamingLaptop.jpg";
import CarousselImg from "../utils/carouselleCard";

export default function Slide({
  onCategoryClick,
  categorySelected,
  onClickSearch,
}) {
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

  return (
    <div className="Slide">
      <div className="writing-carousel">
        <h1>Search By :</h1>
      </div>
      <Carousel responsive={responsive}>
        <div onClick={() => onCategoryClick(1)} className="first-choice">
          <CarousselImg img={macbook} name={"MacBook"} />
          {categorySelected === 1 ? <div className="">done</div> : null}
        </div>
        <div onClick={() => onCategoryClick(2)} className="card-three">
          <CarousselImg img={laptop} name={"Performance"} />
          {categorySelected === 2 ? <div className="">done</div> : null}
        </div>
        <div onClick={() => onCategoryClick(3)} className="card-four">
          <CarousselImg img={Basics} name={"Basics"} />
          {categorySelected === 3 ? <div className="000">done</div> : null}
        </div>
        <div onClick={() => onCategoryClick(4)} className="card-five">
          <CarousselImg img={GamingLaptop} name={"Gaming"} />
          {categorySelected === 4 ? <div className="">done</div> : null}
        </div>
      </Carousel>
      <div className="btn-container">
        <button className="btn btn-yellow-two" onClick={onClickSearch}>
          Search
        </button>
      </div>
    </div>
  );
}
