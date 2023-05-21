import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../utils/card";
import Toolbar from "../components/toolbar";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/wishlist.css";

const Wishlist = () => {
  const [wishList, setWishlist] = useState([]);

  const url = "http://localhost:4000/wishlist/api/get";
  const getWishList = async () => {
    await axios
      .get(url, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        setWishlist(res.data);
      });
  };

  useEffect(() => {
    getWishList();
  }, []);

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
      <div className="wishList-cards-container">
        {wishList.map((productName, idx) => (
          <Card
            key={idx}
            fromHome={false}
            wishlist={wishList}
            getWishList={getWishList}
            {...productName}
          ></Card>
        ))}
      </div>
    </>
  );
};

export default Wishlist;
