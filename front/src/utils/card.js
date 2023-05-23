import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createSearchParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import "./card.css";
import {
  faHeartCirclePlus,
  faHeartCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
function Card(props) {
  const [isHeartClicked, setHeartClicked] = useState(false);
  const url = "http://localhost:4000/wishlist/api/";
  const [wishList, setWishlist] = useState([]);
  const navigate = useNavigate();
  let params = new URL(document.location).searchParams;
  const price = params.get("price");

  const handleButtonClick = () => {
    navigate({
      pathname: "/thirdpage",
      search: createSearchParams({
        title: props.title,
        price: price,
        category: params.get("category"),
      }).toString(),
    });
  };

  var headers = {
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  };
  const getWishList = async () => {
    await axios.get(url + "get", headers).then((res) => {
      setWishlist(res.data);
      var exist = res.data.find((r) => r.title == props.title);
      if (exist) setHeartClicked(true);
    });
  };
  const handleClickHeart = async () => {
    await axios.post(url + "post", props, headers).then(() => {
      setHeartClicked(true);
      toast.success("The product was added successfully", { autoClose: 2000 });
    });
  };
  const handleDelete = async () => {
    var whish = wishList.find((w) => w.title == props.title);
    await axios.delete(url + "delete/" + whish._id, headers).then((res) => {
      getWishList();
      setHeartClicked(false);
      toast.error("The product was removed successfully", {
        autoClose: 2000,
      });

      if (!props.fromHome) {
        props.getWishList();
      }
    });
  };

  useEffect(() => {
    if (props.fromHome) getWishList();
    else {
      setHeartClicked(true);
      setWishlist(props.wishlist);
    }
  }, []);

  return (
    <div className="card">
      <div className="upper-container">
        <img src={props.image} alt={props.alt} className="card-image" />
        <div className="card-price">{props.price}</div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{props.description}</p>

        <div className="stock-container">
          <div className="societe">{props.societe}</div>
          <div className="stocking">
            <span
              className={`card-stock ${
                props.stock === "En stock"
                  ? "en-stock"
                  : props.stock === "Sur Commande"
                  ? "sur-commande"
                  : "hors-stock"
              }`}
            >
              {props.stock}
              {props.stock === "En stock" ? (
                <FontAwesomeIcon
                  icon={faFloppyDisk}
                  style={{ color: "green" }}
                  className="card-Disk"
                />
              ) : props.stock === "Sur Commande" ? (
                <FontAwesomeIcon
                  icon={faFloppyDisk}
                  style={{ color: "yellow" }}
                  className="card-Disk"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faFloppyDisk}
                  style={{ color: "red" }}
                  className="card-Disk"
                />
              )}
            </span>
          </div>
        </div>
        <div className="heart">
          <button className="card-button" onClick={handleButtonClick}>
            Check it out
          </button>
          {!isHeartClicked ? (
            <button
              type="button"
              className="heart-icon-card"
              onClick={handleClickHeart}
            >
              <FontAwesomeIcon icon={faHeartCirclePlus} />
            </button>
          ) : (
            <button
              type="button"
              className="heart-icon-card"
              onClick={handleDelete}
            >
              <FontAwesomeIcon icon={faHeartCircleCheck} />
            </button>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Card;
