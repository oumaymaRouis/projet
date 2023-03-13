import React from "react";
import Footer from "../components/Footer";
import Products from "../components/Products";
import SearchBar from "../components/searchBar";
import SideBar from "../components/sideBar";
import Toolbar from "../components/toolbar";

function SecondPage() {
  return (
    <>
      <Toolbar></Toolbar>
      <SearchBar></SearchBar>
      <SideBar></SideBar>
      <Products></Products>
      <Footer></Footer>
    </>
  );
}

export default SecondPage;
