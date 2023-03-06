import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Card from "../utils/card";
import API from "../services/api";
import axios from "axios";
import "../styles/lastForm.css";
import logo from "../assets/Logo.png";
import logo1 from "../assets/Logo1.png";
import logo2 from "../assets/Logo2.png";
import logo3 from "../assets/Logo3.png";
import logo4 from "../assets/Logo4.png";
import logo5 from "../assets/Logo5.png";
import logo7 from "../assets/Logo7.png";
import logo8 from "../assets/Logo8.png";
import logo9 from "../assets/Logo9.png";

const options = [
  { label: "Best Value", value: "option1" },
  { label: "Price", value: "option2" },
  { label: "Date of Release", value: "option3" },
];

const Form = () => {
  const [productNames, setProductNames] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const url =
      "https://fffb-197-240-25-234.eu.ngrok.io/predict2?choice=1&budget_min=3100&budget_max=4000";

    const requestOptions = {
      headers: {
        "ngrok-skip-browser-warning": "69420",
      },
    };

    axios
      .get(url, requestOptions)
      .then((response) => {
        var formatedArray = [];
        for (let key in response.data) {
          formatedArray.push({
            name: key,
            price: response.data[key][0],
            score: response.data[key][1],
            productURL: response.data[key][2],
            imagepc: response.data[key][3],
            stock: response.data[key][4],
            boutique: response.data[key][5],
            description: response.data[key][6],
          });
        }

        setProductNames(formatedArray);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const [isSortOpen, setIsSortOpen] = useState(false);
  const toggleSortDropdown = () => {
    setIsSortOpen(!isSortOpen);
  };

  return (
    <div className="main-form-container">
      <form>
        <div className="title-container">
          <div className="title">
            <p>Showing 125 Laptops</p>
          </div>
          <div className="sort">
            <button className="sort-button" onClick={toggleSortDropdown}>
              Sort by:
              <FontAwesomeIcon icon={faChevronDown} />
            </button>

            {isSortOpen && (
              <div className="dropdown-options">
                {options.map((option) => (
                  <label key={option.value}>{option.label}</label>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="content-container">
          {productNames.length > 0 && (
            <div>
              {productNames.map((productName, idx) => (
                <Card
                  key={idx}
                  image={productName.imagepc}
                  title={productName.name}
                  description={productName.description}
                  societe={productName.boutique}
                  stock={productName.stock}
                ></Card>
              ))}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
