import React from "react";
import RightCard from "../utils/sideCard";

function Suggestion({ products }) {
  return (
    <form>
      <div className="right-form-container">
        {products.map((products) => (
          <RightCard
            image={products.imagepc}
            title={products.name.slice(18, 50) + "  -..."}
            price={products.price}
            societe={products.boutique}
          ></RightCard>
        ))}
      </div>
    </form>
  );
}

export default Suggestion;
