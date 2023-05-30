import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { faHouse, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import "../styles/toolbar.css";
const Toolbar = ({ showToast }) => {
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
          const username = data.user.username;
          console.log(username);
          console.log(isToastShown);
          console.log(showToast);
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
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleWishlistClick = () => {
    navigate("/wishlist");
  };

  return (
    <div className="principal-container">
      <div className="main-container">
        <div className="homebutton">
          <button onClick={() => navigate("/")}>
            <FontAwesomeIcon className="house" icon={faHouse} />
          </button>
        </div>

        <div className="logo-container">
          <h2 className="first-title">PC Recommendation</h2>
        </div>
        <div className="logout-wish">
          <div className="wishlist-container">
            <button className="wishlist" onClick={handleWishlistClick}>
              <FontAwesomeIcon className="wish-icon" icon={faHeart} />
            </button>
          </div>

          <div className="logout-button-container">
            <button className="logout-button" onClick={logOut}>
              <FontAwesomeIcon
                className="logout-icon"
                icon={faRightFromBracket}
              />
            </button>
          </div>
        </div>
      </div>
      {showToast && <ToastContainer></ToastContainer>}
    </div>
  );
};

export default Toolbar;
