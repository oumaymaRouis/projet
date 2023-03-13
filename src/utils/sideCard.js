import React from "react";
import "./sideCard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

function RightCard(props) {
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
        <button className="right-card-button">View</button>
        <FontAwesomeIcon icon={faBookmark} className="icon-view" />
      </div>
    </div>
  );
}

export default RightCard;
