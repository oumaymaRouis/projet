import React from "react";
import RightCard from "../utils/sideCard";

function Suggestion({ products }) {
  return (
    <div className="right-form-container">
      {products.map((product, index) => (
        <RightCard
          key={index}
          image={product.imagepc}
          title={product.name.slice(18, 50) + "  -..."}
          price={product.price}
          societe={product.boutique}
        ></RightCard>
      ))}
    </div>
  );
}

export default Suggestion;
