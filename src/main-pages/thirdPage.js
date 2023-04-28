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
  const { getProducts, getProductByTitle } = useContext(ProductsContext);

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
      const products = await getProducts({
        categoryId: params.get("category"),
        minPrice: range[0],
        maxPrice: range[1],
      });
      var currentProduct = await getProductByTitle(params.get("title"));
      var sortedProduct = selectProducts(products, currentProduct.score);
      SetProducts(sortedProduct);
      setmainProduct(currentProduct);
      console.log(currentProduct);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [params.get("title"), params.get("category")]);

  return (
    <>
      <Toolbar showHome={true}></Toolbar>
      <SearchBar></SearchBar>

      <SideBar showMultiSelect={false} />

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
