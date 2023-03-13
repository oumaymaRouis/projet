import React from "react";
import SearchBar from "../components/searchBar";
import SideBar from "../components/sideBar";
import Toolbar from "../components/toolbar";
import Footer from "../components/Footer";
import SelectedProduct from "../components/SelectedProduct";

function ThirdPage() {
  return (
    <>
      <Toolbar></Toolbar>
      <SearchBar></SearchBar>
      <SideBar></SideBar>
      <SelectedProduct></SelectedProduct>
      <Footer></Footer>
    </>
  );
}

export default ThirdPage;
