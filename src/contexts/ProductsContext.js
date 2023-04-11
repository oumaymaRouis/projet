import { createContext, useState } from "react";

export const ProductsContext = createContext("");

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {};

  const getProductByTitle = () => {};

  return (
    <ProductsContext.Provider
      value={{ ...products, getProducts, getProductByTitle }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
