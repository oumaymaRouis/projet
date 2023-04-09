import React from "react";
import SelectedCard from "../utils/selectedCard";

const SelectedProduct = ({ product, products }) => {
  return (
    <div className="main-form-container1">
      {product && (
        <div className="last-cards-container">
          <SelectedCard
            products={products}
            key={1}
            title={product.name}
            ecran={product.ecran}
            resolution={product.resolution}
            pcMarque={product.pcMarque}
            description={product.description}
            price={product.price}
            societe={product.boutique}
            stock={product.stock}
            carteGraphique={product.carteGraphique}
            disqueDur={product.disqueDur}
            memoireRam={product.memoireRam}
            processeur={product.processeur}
            imagepc={product.imagepc}
            productURL={product.productURL}
          ></SelectedCard>
        </div>
      )}
    </div>
  );
};

export default SelectedProduct;
