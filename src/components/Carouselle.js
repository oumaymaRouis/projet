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

  const selectedCategory = (categoryId) =>
    categoryId === categorySelected ? "selected" : "";

  return (
    <div className="Slide">
      <div className="writing-carousel">
        <h1>Search By :</h1>
      </div>
      <Carousel responsive={responsive}>
        <div
          onClick={() => onCategoryClick(1)}
          className={`first-choice ${selectedCategory(1)}`}
        >
          <CarousselImg img={macbook} name={"MacBook"} />
        </div>
        <div
          onClick={() => onCategoryClick(2)}
          className={`card-three ${selectedCategory(2)}`}
        >
          <CarousselImg img={laptop} name={"Performance"} />
        </div>
        <div
          onClick={() => onCategoryClick(3)}
          className={`card-four ${selectedCategory(3)}`}
        >
          <CarousselImg img={Basics} name={"Basics"} />
        </div>
        <div
          onClick={() => onCategoryClick(4)}
          className={`card-five ${selectedCategory(4)}`}
        >
          <CarousselImg img={GamingLaptop} name={"Gaming"} />
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
