import React from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Footer";
import Products from "../components/Products";
import SideBar from "../components/sideBar";
import Toolbar from "../components/toolbar";

function SecondPage() {
  let [searchParams, setSearchParams] = useSearchParams();
  let params = new URL(document.location).searchParams;
  const price = params.get("price");
  const range = price ? price.split(",") : [];

  const onChangeCat = (category) => {
    const newParams = { category, price };
    setSearchParams(newParams);
  };

  return (
    <>
      <Toolbar showHome={true}></Toolbar>

      <SideBar
        showMultiSelect={true}
        onChangeCat={onChangeCat}
        categoryId={params.get("category")}
      ></SideBar>
      <Products
        categoryId={params.get("category")}
        minPrice={range[0]}
        maxPrice={range[1]}
      />
      <Footer></Footer>
    </>
  );
}

export default SecondPage;
