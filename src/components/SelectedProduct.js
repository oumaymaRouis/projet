import React, { useEffect, useState } from "react";
import "../styles/SelectedProduct.css";
import SelectedCard from "../utils/selectedCard";

const SelectedProduct = ({ product }) => {
  return (
    <div className="main-form-container1">
      {product && (
        <div className="last-cards-container">
          <SelectedCard
            key={1}
            title={product.name}
            description={product.description}
            price={product.price}
            societe={product.boutique}
            stock={product.stock}
          ></SelectedCard>
        </div>
      )}
    </div>
  );
};

export default SelectedProduct;
