import React from "react";
import SearchBar from "../components/searchBar";
import SideBar from "../components/sideBar";
import Toolbar from "../components/toolbar";
import Footer from "../components/Footer";
import LastForm from "../components/lastForm";

function ThirdPage() {
  return (
    <>
      <Toolbar></Toolbar>
      <SearchBar></SearchBar>
      <SideBar></SideBar>
      <LastForm></LastForm>
      <Footer></Footer>
    </>
  );
}

export default ThirdPage;
