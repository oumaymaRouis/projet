import React, { Component } from "react";
import "../styles/toolbar.css";

class Toolbar extends Component {
  state = {};
  render() {
    return (
      <div className="main-container">
        <h2 className="first-title">PC Recommendation</h2>
        <div className="report-button-container">
          <button className="report-button">Report a problem</button>
        </div>
      </div>
    );
  }
}

export default Toolbar;
