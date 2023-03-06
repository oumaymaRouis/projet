import React, { useEffect, useState } from "react";
import "../styles/form.css";
import LastCard from "../utils/lastCard";
import { getProducts } from "../utils/api";

const LastForm = () => {
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
            <LastCard
              key={idx}
              title={productName.name}
              description={productName.description}
              price={productName.price}
              societe={productName.boutique}
              stock={productName.stock}
            ></LastCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default LastForm;
