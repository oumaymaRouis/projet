import React, { Component } from "react";
import Footer from "../components/Footer";
import Form from "../components/form";
import SearchBar from "../components/searchBar";
import SideBar from "../components/sideBar";
import Toolbar from "../components/toolbar";

class SecondPage extends Component {
  state = {};
  render() {
    return (
      <>
        <Toolbar></Toolbar>
        <SearchBar></SearchBar>
        <SideBar></SideBar>
        <Form></Form>
        <Footer></Footer>
      </>
    );
  }
}

export default SecondPage;
