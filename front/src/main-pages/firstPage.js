import React from "react";
import MainPage from "../components/MainPage";
import Footer from "../components/Footer";
import Circle from "../styles/circle";
import Toolbar from "../components/toolbar";
function FirstPage() {
  return (
    <>
      <Toolbar showToast={true}></Toolbar>
      {/* <Circle></Circle> */}
      <MainPage></MainPage>
      <Footer></Footer>
    </>
  );
}

export default FirstPage;
