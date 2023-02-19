import React, { Component } from "react";
import "../styles/Top.css";
class Top extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-custom">
          <a className="navbar-brand">Pc Recommendation</a>
          <button className="btn btn-yellow">Report a problem</button>
        </nav>
      </div>
    );
  }
}

export default Top;
