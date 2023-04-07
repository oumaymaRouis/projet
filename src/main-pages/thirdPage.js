import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/searchBar";
import SideBar from "../components/sideBar";
import Toolbar from "../components/toolbar";
import Footer from "../components/Footer";
import SelectedProduct from "../components/SelectedProduct";
import { getProducts } from "../utils/api";

function ThirdPage() {
  let { name } = useParams();
  let [searchParams, setSearchParams] = useSearchParams();
  let params = new URL(document.location).searchParams;
  const price = params.get("price");
  const range = price ? price.split(",") : [];
  const [mainProduct, setmainProduct] = useState({});
  const fetchData = async () => {
    try {
      const products = await getProducts({
        categoryId: params.get("category"),
        minPrice: range[0],
        maxPrice: range[1],
      });

      var currentProduct = products.find((p) => p.name == params.get("title"));
      setmainProduct(currentProduct);
      console.log(currentProduct);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Toolbar></Toolbar>
      <SearchBar></SearchBar>
      <SideBar></SideBar>
      <SelectedProduct product={mainProduct}></SelectedProduct>
      <Footer></Footer>
    </>
  );
}

export default ThirdPage;
