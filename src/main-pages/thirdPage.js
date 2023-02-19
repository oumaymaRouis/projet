import React, { Component } from "react";
import SearchBar from "../components/searchBar";
import SideBar from "../components/sideBar";
import Toolbar from "../components/toolbar";
import Footer from "../components/Footer";
import LastForm from "../components/lastForm";

class ThirdPage extends Component {
  state = {};
  render() {
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
}

export default ThirdPage;
