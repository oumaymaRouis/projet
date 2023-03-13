import React, { useEffect, useState } from "react";
import "../styles/SelectedProduct.css";
import SelectedCard from "../utils/selectedCard";
import { getProducts } from "../utils/api";

const SelectedProduct = () => {
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

  return (
    <div className="main-form-container1">
      {productNames.length > 0 && (
        <div className="last-cards-container">
          {productNames.map((productName, idx) => (
            <SelectedCard
              key={idx}
              title={productName.name}
              description={productName.description}
              price={productName.price}
              societe={productName.boutique}
              stock={productName.stock}
            ></SelectedCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectedProduct;
