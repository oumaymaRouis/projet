import React from "react";
import MainPage from "../components/MainPage";
import Slide from "../components/Slide";
import Footer from "../components/Footer";
import Toolbar from "../components/toolbar";
function FirstPage() {
  return (
    <>
      <Toolbar></Toolbar>
      <MainPage></MainPage>
      <Slide></Slide>
      <Footer></Footer>
    </>
  );
}

export default FirstPage;
