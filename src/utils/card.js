import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { useSearchParams } from "react-router-dom";

import "./card.css";

function Card(props) {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
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
                props.stock === "En stock" ? "en-stock" : "hors-stock"
              }`}
            >
              {props.stock}
              {props.stock === "En stock" ? (
                <FontAwesomeIcon
                  icon={faFloppyDisk}
                  style={{ color: "green" }}
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
        <button className="card-button" onClick={handleButtonClick}>
          Check it out
        </button>
      </div>
    </div>
  );
}

export default Card;
