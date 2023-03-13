import React, { Component } from "react";
import { CInputGroup, CFormInput, CButton } from "@coreui/react";
import "../styles/searchBar.css";

class SearchBar extends Component {
  state = {};
  render() {
    return (
      <div className="container-search-bar">
        <div className="search-container">
          <CInputGroup className="mb-5">
            <CFormInput
              className="input1"
              placeholder="PC Gaming"
              aria-label="PC Gaming"
            />
            <CFormInput
              className="input"
              placeholder="500 TND - 3850 TND"
              aria-label="500 TND - 3850 TND"
            />
            <CButton className="search-button" type="button" id="button-addon2">
              Search
            </CButton>
          </CInputGroup>
        </div>
      </div>
    );
  }
}

export default SearchBar;
