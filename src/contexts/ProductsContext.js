import { createContext, useState } from "react";
import axios from "axios";

export const ProductsContext = createContext(null);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const API_URL = "https://bac8-197-244-136-213.ngrok-free.app";

  const getProducts = async ({ categoryId, minPrice, maxPrice }) => {
    try {
      const url = `${API_URL}/predict2?choice=${categoryId}&budget_min=${minPrice}&budget_max=${maxPrice}`;
      const requestOptions = {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
      };
      const response = await axios.get(url, requestOptions);
      const formatedArray = [];

      for (let key in response.data) {
        formatedArray.push({
          name: key,
          price: response.data[key][0],
          score: response.data[key][1],
          productURL: response.data[key][2],
          imagepc: response.data[key][3],
          pcMarque: response.data[key][4],
          processeur: response.data[key][5],
          ecran: response.data[key][6],
          resolution: response.data[key][7],
          memoireRam: response.data[key][8],
          disqueDur: response.data[key][9],
          carteGraphique: response.data[key][10],
          stock: response.data[key][11],
          boutique: response.data[key][12],
          description: response.data[key][13],
        });
      }
      return formatedArray;
    } catch (error) {
      console.error(error);
    }
  };

  const getProductByTitle = async (title) => {
    try {
      const url = `${API_URL}/Getpc?title=${title}`;
      const requestOptions = {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
      };
      const response = await axios.get(url, requestOptions);
      const formatedProduct = [];

      for (let key in response.data) {
        formatedProduct.push({
          name: key,
          price: response.data[key][0],
          score: response.data[key][1],
          productURL: response.data[key][2],
          imagepc: response.data[key][3],
          pcMarque: response.data[key][4],
          processeur: response.data[key][5],
          ecran: response.data[key][6],
          resolution: response.data[key][7],
          memoireRam: response.data[key][8],
          disqueDur: response.data[key][9],
          carteGraphique: response.data[key][10],
          stock: response.data[key][11],
          boutique: response.data[key][12],
          description: response.data[key][13],
        });
      }

      return formatedProduct[0];
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <ProductsContext.Provider
      value={{ ...products, getProducts, getProductByTitle }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
