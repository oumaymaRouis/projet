import React, { Component } from "react";
import "../styles/mainPage.css";
import background from "../assets/background.png";
import Slide from "./Carouselle";
import BudgetSlider from "./BudgetSlider";
import { createSearchParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Middle() {
  const [value, setValue] = React.useState([0, 10000]);
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  const navigate = useNavigate();

  const handlePriceChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCatecoryChange = (id) => {
    setSelectedCategory(id);
  };

  const handleSearch = () => {
    if (selectedCategory === null) {
      toast.error("Please select a category");
      return;
    } else {
      navigate({
        pathname: "/secondPage",
        search: createSearchParams({
          price: value.toString(),
          category: selectedCategory,
        }).toString(),
      });
    }
  };

  return (
    <div className="middle-container">
      <Slide
        onCategoryClick={handleCatecoryChange}
        categorySelected={selectedCategory}
        onClickSearch={handleSearch}
      />
      <div className="background-image-container">
        <img
          alt=""
          className="background"
          src={background}
          style={{ width: "1000px" }}
        />
      </div>
      <div className="circle-container"></div>
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
            <BudgetSlider value={value} onPriceChange={handlePriceChange} />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Middle;
