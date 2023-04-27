import React from "react";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Footer";
import Products from "../components/Products";
import SearchBar from "../components/searchBar";
import SideBar from "../components/sideBar";
import Toolbar from "../components/toolbar";
import "./secondPage.css";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <Toolbar></Toolbar>
      <div class="btn-container">
        <div class="homebutton">
          <a href="/">
            <FontAwesomeIcon icon={faHouse} />
            Home
          </a>
        </div>
      </div>

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
