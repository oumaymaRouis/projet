import React, { useState, useEffect } from "react";
import SelectedCard from "../utils/selectedCard";
import LoadingSpinner from "./LoadingSpinner";

const SelectedProduct = ({ product, products }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [product, products]);

  return (
    <div className="main-form-container1">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="last-cards-container">
          <SelectedCard
            products={products}
            key={1}
            title={product.title}
            ecran={product.ecran}
            resolution={product.resolution}
            pcMarque={product.pcMarque}
            description={product.description}
            price={product.price}
            societe={product.societe}
            stock={product.stock}
            carteGraphique={product.carteGraphique}
            disqueDur={product.disqueDur}
            memoireRam={product.memoireRam}
            processeur={product.processeur}
            image={product.image}
            productURL={product.productURL}
          ></SelectedCard>
        </div>
      )}
    </div>
  );
};

export default SelectedProduct;
