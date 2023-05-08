import React, { useState, useEffect, useContext } from "react";
import Card from "../utils/card";
import { ProductsContext } from "../contexts/ProductsContext";
import "../styles/products.css";
import LoadingSpinner from "./LoadingSpinner";

const Form = ({ categoryId, minPrice, maxPrice }) => {
  const { getProducts } = useContext(ProductsContext);
  const [productNames, setProductNames] = useState([]);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState("date");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const products = await getProducts({ categoryId, minPrice, maxPrice });
        setProductNames(products);
        setError(null);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [categoryId, minPrice, maxPrice]);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const sortedProductNames =
    productNames && Array.isArray(productNames) && productNames.length > 0
      ? [...productNames].sort((a, b) => {
          switch (sortBy) {
            default:
              return a.price / a.stock - b.price / b.stock;
            case "price":
              return a.price - b.price;
          }
        })
      : [];

  return (
    <div className="main-form-container">
      <form>
        <div className="title-container">
          <div className="title">
            <p>Showing {sortedProductNames.length} Laptops</p>
          </div>
          <div className="sort">
            <label htmlFor="sort-select">Sort by:</label>
            <select id="sort-select" value={sortBy} onChange={handleSortChange}>
              <option value="value">Value</option>
              <option value="price">Price</option>
            </select>
          </div>
        </div>
        {isLoading ? (
          <LoadingSpinner />
        ) : sortedProductNames.length === 0 ? (
          <div className="message-container">
            <p>There are 0 laptops.</p>
          </div>
        ) : (
          <div className="content-container">
            <div className="cards-container">
              {sortedProductNames.map((productName, idx) => (
                <Card
                  key={idx}
                  image={productName.imagepc}
                  title={productName.name}
                  description={productName.description.slice(0, 95) + "  -..."}
                  price={productName.price}
                  societe={productName.boutique}
                  stock={productName.stock}
                ></Card>
              ))}
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
