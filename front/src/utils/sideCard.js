import React from "react";
import "./sideCard.css";
import { createSearchParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

function RightCard(props) {
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

  return (
    <div className="main-right-side-container">
      <div className="right-card">
        <div className="right-card-image">
          <img src={props.image} alt={props.alt} width={"70px"} />
        </div>
        <div className="right-card-body">
          <div className="right-card-body-title">
            <h2 className="right-card-title">{props.title}</h2>
            <p className="right-card-price">{props.price}</p>
          </div>
          <div className="right-societe">{props.societe}</div>
        </div>
      </div>
      <div className="right-button-container">
        <button className="right-card-button" onClick={handleButtonClick}>
          View
        </button>
        <FontAwesomeIcon icon={faBookmark} className="icon-view" />
      </div>
    </div>
  );
}

export default RightCard;
