import React, { useState, useEffect } from "react";
import Card from "../utils/card";
import { getProducts } from "../utils/api";
import "../styles/products.css";

const Form = () => {
  const [productNames, setProductNames] = useState([]);
  const [error, setError] = useState(null);
  const [productCount, setProductCount] = useState(0);
  const [sortBy, setSortBy] = useState("date");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProducts();
        setProductNames(products);
        setProductCount(products.length);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const sortedProductNames = [...productNames].sort((a, b) => {
    switch (sortBy) {
      case "price":
        return a.price - b.price;
      case "value":
        return a.price / a.stock - b.price / b.stock;
      default:
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  return (
    <div className="main-form-container">
      <form>
        <div className="title-container">
          <div className="title">
            <p>Showing {productCount} Laptops</p>
          </div>
          <div className="sort">
            <label htmlFor="sort-select">Sort by:</label>
            <select id="sort-select" value={sortBy} onChange={handleSortChange}>
              <option value="date">Date</option>
              <option value="price">Price</option>
              <option value="value">Value</option>
            </select>
          </div>
        </div>
        <div className="content-container">
          {sortedProductNames.length > 0 && (
            <div className="cards-container">
              {sortedProductNames.map((productName, idx) => (
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
