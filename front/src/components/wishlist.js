import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../utils/card";
import Toolbar from "../components/toolbar";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/wishlist.css";

const Wishlist = () => {
  const [wishList, setWishlist] = useState([]);
  const [wishList2, setWishlist2] = useState([]);

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
  const getWishList2 = async () => {
    await axios
      .get(url, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((res) => {
        setWishlist2(res.data);
      });
  };

  useEffect(() => {
    getWishList();
    getWishList2();
  }, []);

  return (
    <>
      <div>
        <Toolbar></Toolbar>
      </div>
      <div className="wishes-container">
        <FontAwesomeIcon
          className="wishes-icon"
          icon={faHeart}
          style={{ color: "#f6f6f6" }}
        />
      </div>
      <p className="wish-number">There {wishList.length} products in </p>
      <div className="wishes-parag">My Wishlist</div>
      <div className="wishList-cards-container">
        {wishList.map((productName, idx) => (
          <Card
            key={idx}
            fromHome={false}
            wishlist={wishList}
            getWishList={getWishList}
            getWishList2={getWishList2}
            image={productName.image}
            title={productName.title}
            description={productName.description.slice(0, 95) + "  -..."}
            price={productName.price}
            societe={productName.societe}
            stock={productName.stock}
          ></Card>
        ))}
      </div>
    </>
  );
};

export default Wishlist;
