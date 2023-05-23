import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFloppyDisk,
  faHeartCirclePlus,
  faHeartCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import Suggestion from "../components/suggestions";
import "./selectedCard.css";

function SelectedCard(props) {
  const [wishList, setWishlist] = useState([]);
  const [isHeartClicked, setHeartClicked] = useState(false);
  const url = "http://localhost:4000/wishlist/api/";

  let params = new URL(document.location).searchParams;
  let searchParams = createSearchParams({
    category: params.get("category") || 2,
  });

  let category;
  if (searchParams.get("category") === "1") {
    category = "Gaming";
  } else if (searchParams.get("category") === "2") {
    category = "Basic";
  } else if (searchParams.get("category") === "3") {
    category = "Performance";
  } else if (searchParams.get("category") === "4") {
    category = "Macbook";
  } else {
    category = "Basic";
  }

  var headers = {
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  };
  const getWishList2 = async () => {
    await axios.get(url + "get", headers).then((res) => {
      setWishlist(res.data);
      var exist = res.data.find((r) => r.title == props.title);
      console.log(res.data);
      console.log(exist);
      if (exist) setHeartClicked(true);
    });
  };
  const handleClickHeart = async () => {
    await axios.post(url + "post", props, headers).then(() => {
      setHeartClicked(false);
      toast.success("The product was added successfully", { autoClose: 2000 });
      getWishList2();
    });
  };
  const handleDelete = async () => {
    var whish = wishList.find((w) => w.title == props.title);
    console.log(whish);
    await axios.delete(url + "delete/" + whish._id, headers).then((res) => {
      getWishList2();
      setHeartClicked(false);
      toast.error("The product was removed successfully", {
        autoClose: 2000,
      });
    });
  };

  useEffect(() => {
    getWishList2();
  }, []);

  return (
    <div className="lastcard">
      <form>
        <div className="main">
          <div className="title-container1">
            <h1 className="Selected-product-price"> {props.price} </h1>
            <h1 className="TND">DT</h1>
          </div>
          <div className="img-container">
            <img className="dell" src={props.image} />
          </div>
          <div className="name-container">
            <h2>{props.title}</h2>
            <br></br>
            <div className="nom-container">
              <h3>
                <span className="societe">{props.societe}</span>

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
              </h3>

              <div className="icon2-container">
                {!isHeartClicked ? (
                  <button
                    type="button"
                    className="icon2"
                    onClick={handleClickHeart}
                  >
                    <FontAwesomeIcon icon={faHeartCirclePlus} />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="icon2"
                    onClick={handleDelete}
                  >
                    <FontAwesomeIcon icon={faHeartCircleCheck} />
                  </button>
                )}

                <FontAwesomeIcon icon={faShareAlt} className="icon3" />
              </div>
              <div className="icon2-writing">
                <h1>
                  <span className="category"> PC category · </span>
                  <span className="gaming">{category}</span>
                </h1>
              </div>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Écran</th>
                <th>Processeur</th>
                <th>Mémoire RAM</th>
                <th>Disque dur</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{props.ecran}</td>
                <td>{props.processeur}</td>
                <td>{props.memoireRam}</td>
                <td>{props.disqueDur}</td>
              </tr>
            </tbody>
          </table>
          <div className="description-container">
            <h1>Overview</h1>
            <p>{props.description}</p>
          </div>
          <div className="fiche-container">
            <h1>Fiche Technique</h1>
            <div className="checkbox-container1">
              <label className="container1">
                <div className="words">Marque: {props.pcMarque}</div>
                <input type="checkbox" />
                <span className="checkmark1"></span>
              </label>
              <br></br>
              <label className="container1">
                <div className="words">Ecran: {props.ecran}</div>
                <input type="checkbox" />
                <span className="checkmark1"></span>
              </label>
              <br></br>
              <label className="container1">
                <div className="words">Resolution: {props.resolution}</div>
                <input type="checkbox" />
                <span className="checkmark1"></span>
              </label>
              <br></br>
              <label className="container1">
                <div className="words">Processeur: {props.processeur}</div>
                <input type="checkbox" />
                <span className="checkmark1"></span>
              </label>
              <br></br>
              <label className="container1">
                <div className="words">Mémoire: {props.memoireRam}</div>
                <input type="checkbox" />
                <span className="checkmark1"></span>
              </label>
              <br></br>
              <label className="container1">
                <div className="words">Disque Dur : {props.disqueDur}</div>
                <input type="checkbox" />
                <span className="checkmark1"></span>
              </label>
              <br></br>
              <label className="container1">
                <div className="words">
                  Carte Graphique: {props.carteGraphique}
                </div>
                <input type="checkbox" />
                <span className="checkmark1"></span>
              </label>
            </div>
          </div>
          <div className="line-container">
            <hr />
          </div>

          <div className="underline-container">
            <h1>Are You Interested In This Laptop ?</h1>
            <div className="btn-container">
              <a
                className="btn btn-yellow"
                href={props.productURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Check it out
              </a>
            </div>
          </div>
        </div>
      </form>
      <div className="right-side-container">
        <Suggestion
          products={props.products}
          currentProduct={props.title}
        ></Suggestion>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SelectedCard;
