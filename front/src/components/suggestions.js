import React from "react";
import RightCard from "../utils/sideCard";

function Suggestion({ products, currentProduct }) {
  console.log(currentProduct);
  return (
    <div className="right-form-container">
      {products.map((product, index) => (
        <RightCard
          key={index}
          image={product.imagepc}
          title={product.name}
          price={product.price}
          societe={product.boutique}
          isCurrent={currentProduct}
        ></RightCard>
      ))}
    </div>
  );
}

export default Suggestion;
