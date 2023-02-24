import React, { Component } from "react";
import Middle from "../components/Middle";
import Slide from "../components/Slide";
import Footer from "../components/Footer";
import Toolbar from "../components/toolbar";
class FirstPage extends Component {
  state = {};
  render() {
    return (
      <>
        <Toolbar></Toolbar>
        <Middle></Middle>
        <Slide></Slide>
        <Footer></Footer>
      </>
    );
  }
}

export default FirstPage;
