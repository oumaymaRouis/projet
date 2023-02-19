import React, { Component } from "react";
import Middle from "../components/Middle";
import Top from "../components/Top";
import Slide from "../components/Slide";
import Footer from "../components/Footer";
class FirstPage extends Component {
  state = {};
  render() {
    return (
      <>
        <Top></Top>
        <Middle></Middle>
        <Slide></Slide>
        <Footer></Footer>
      </>
    );
  }
}

export default FirstPage;
