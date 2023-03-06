import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Card from "../utils/card";
import { getProducts } from "../utils/api";
import "../styles/lastForm.css";

const options = [
  { label: "Best Value", value: "option1" },
  { label: "Price", value: "option2" },
  { label: "Date of Release", value: "option3" },
];

const Form = () => {
  const [productNames, setProductNames] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProducts();
        setProductNames(products);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
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
            <div className="cards-container">
              {productNames.map((productName, idx) => (
                <Card
                  key={idx}
                  image={productName.imagepc}
                  title={productName.name}
                  description={productName.description.slice(0, 100) + "  -..."}
                  price={productName.price}
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
