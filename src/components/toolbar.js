import React from "react";
import { useNavigate } from "react-router-dom";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/toolbar.css";

const Toolbar = ({ showHome }) => {
  const navigate = useNavigate();
  return (
    <div className="main-container">
      {showHome && (
        <div className="btnn-container">
          <div className="homebutton">
            <button onClick={() => navigate("/")}>
              <FontAwesomeIcon className="house" icon={faHouse} />
              Home
            </button>
          </div>
        </div>
      )}
      <h2 className="first-title">PC Recommendation</h2>
      <div className="report-button-container">
        <button className="report-button">Report a problem</button>
      </div>
    </div>
  );
};

export default Toolbar;
