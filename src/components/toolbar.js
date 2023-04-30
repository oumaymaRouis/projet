import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import "../styles/toolbar.css";

const Toolbar = ({ showHome }) => {
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
          if (!isToastShown) {
            toast(`HI ${data.user}`, { theme: "dark" });
            setIsToastShown(true);
          }
        }
      }
    };
    verifyUser();
  }, [cookies, navigate, removeCookie, isToastShown]);

  const logOut = () => {
    removeCookie("jwt");
    navigate("/login");
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
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Toolbar;
