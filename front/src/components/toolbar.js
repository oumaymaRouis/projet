import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { faHouse, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import "../styles/toolbar.css";
const Toolbar = ({ showHome, showToast, showWish }) => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const [isToastShown, setIsToastShown] = useState(false);

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        const { data } = await axios.post(
          "http://localhost:4000",
          {},
          { withCredentials: true }
        );
        if (!data.status) {
          removeCookie("jwt");
          navigate("/login");
        } else {
          const username = data.user.split("@")[0];
          if (showToast && !isToastShown) {
            toast(`HI ${username}`, { theme: "dark" });
            setIsToastShown(true);
          }
        }
      }
    };
    verifyUser();
  }, [cookies, navigate, removeCookie, isToastShown, showToast]);

  const logOut = () => {
    removeCookie("jwt");
    navigate("/login");
  };

  const handleWishlistClick = () => {
    navigate("/wishlist");
  };

  return (
    <div>
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
        {showWish && (
          <div className="wishlist-container">
            <button className="wishlist" onClick={handleWishlistClick}>
              <FontAwesomeIcon
                className="wish-icon"
                icon={faHeart}
                style={{ color: "#ffd369" }}
              />
              WishList
            </button>
          </div>
        )}

        <h2 className="first-title">PC Recommendation</h2>
        <div className="logout-button-container">
          <button className="logout-button" onClick={logOut}>
            Logout
            <FontAwesomeIcon
              className="logout-icon"
              icon={faRightFromBracket}
            />
          </button>
        </div>
      </div>
      {showToast && <ToastContainer></ToastContainer>}
    </div>
  );
};

export default Toolbar;
