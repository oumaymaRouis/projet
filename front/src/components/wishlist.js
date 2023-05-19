import React from "react";
import Toolbar from "../components/toolbar";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/wishlist.css";
const Wishlist = () => {
  return (
    <>
      <div>
        <Toolbar showWish={false} showHome={true}></Toolbar>
      </div>
      <div className="wishes-container">
        <FontAwesomeIcon
          className="wishes-icon"
          icon={faHeart}
          style={{ color: "#f6f6f6" }}
        />
      </div>
      <div className="wishes-parag">My Wishlist</div>
    </>
  );
};

export default Wishlist;
