import React, { useContext, useEffect, useState } from "react";
import SearchBar from "../components/searchBar";
import SideBar from "../components/sideBar";
import Toolbar from "../components/toolbar";
import Footer from "../components/Footer";
import SelectedProduct from "../components/SelectedProduct";
import { useLocation } from "react-router-dom";
import { ProductsContext } from "../contexts/ProductsContext";

function ThirdPage() {
  let location = useLocation();
  let params = new URL(document.location).searchParams;
  const price = params.get("price");
  const range = price ? price.split(",") : [];
  const [mainProduct, setmainProduct] = useState({});
  const [Products, SetProducts] = useState([]);
  const { getProducts } = useContext(ProductsContext);

  function selectProducts(array, selectedScore) {
    let sortedArray = array.sort(function (a, b) {
      return (
        Math.abs(a.score - selectedScore) - Math.abs(b.score - selectedScore)
      );
    });
    let mainProducts = sortedArray.slice(0, 5);
    return mainProducts;
  }

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://9c37-197-238-250-90.ngrok-free.app/Getpc?title=${params.get(
          "title"
        )}`
      );
      console.log(response, "hello");
      const data = await response.json();
      const currentProduct = data.find((p) => p.name === params.get("title"));
      const products = await getProducts({
        categoryId: params.get("category"),
        minPrice: range[0],
        maxPrice: range[1],
      });
      const sortedProduct = selectProducts(products, currentProduct.score);
      SetProducts(sortedProduct);
      setmainProduct(currentProduct);
      console.log(currentProduct);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [location.search]);

  return (
    <>
      <Toolbar></Toolbar>
      <SearchBar></SearchBar>
      <SideBar></SideBar>
      <SelectedProduct
        categoryId={params.get("category")}
        products={Products}
        product={mainProduct}
      ></SelectedProduct>
      <Footer></Footer>
    </>
  );
}

export default ThirdPage;
