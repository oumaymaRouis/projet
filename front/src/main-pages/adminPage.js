import React from "react";
import "../styles/adminPage.css";

function AdminPage() {
  const handleUpdateMe = () => {
    fetch("http://127.0.0.1:5550/scrap")
      .then((response) => {
        if (response.ok) {
          // Handle successful response
          console.log("Data updated successfully!");
        } else {
          // Handle error response
          console.log("Error updating data.");
        }
      })
      .catch((error) => {
        // Handle fetch error
        console.log("Fetch error:", error);
      });
  };

  const handleCheckUsers = () => {
    window.location.href = "http://localhost:4000/admin/resources/Users";
  };

  return (
    <div className="AdminPage-container">
      <div className="AdminPage-bgr-clr">
        <h1 className="AdminPage-title">Welcome back Admin!</h1>

        <p className="AdminPage-paragraph1">So What are we doing today?</p>
        <p className="AdminPage-paragraph2">
          Scraping and updating our DATA or checking up on our users or manage
          their accounts
        </p>
        <div className="AdminPage-btn-container">
          <button className="Updateme-btn" onClick={handleUpdateMe}>
            Update ME!
          </button>
          <button className="checkusr-btn" onClick={handleCheckUsers}>
            Check on Users!
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
