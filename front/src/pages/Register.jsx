import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./auth.css";

export default function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values.password !== values.confirmPassword) {
      toast.error("Password and confirm password don't match");
      return;
    }
    try {
      const { data } = await axios.post(
        "http://localhost:4000/register",
        {
          ...values,
        },
        {
          withCredentials: true,
        }
      );

      if (data) {
        if (data.errors) {
          const { username, email, password } = data.errors;
          if (username) toast.error(username);
          else if (email) toast.error(email);
          else if (password) toast.error(password);
        } else {
          navigate("/");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="auth-main-container">
      <div className="auth-container">
        <h2 className="auth-h2">Register Account</h2>
        <div className="auth-form">
          <div className="auth-div">
            <i className="auth-icon">
              <FontAwesomeIcon className="auth-icons" icon={faUser} />
            </i>
            <input
              className="auth-input"
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="auth-div">
            <i className="auth-icon">
              <FontAwesomeIcon className="auth-icons" icon={faEnvelope} />
            </i>
            <input
              className="auth-input"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="auth-div">
            <i className="auth-icon">
              <FontAwesomeIcon className="auth-icons" icon={faLock} />
            </i>
            <input
              className="auth-input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="auth-div">
            <i className="auth-icon">
              <FontAwesomeIcon className="auth-icons" icon={faKey} />
            </i>
            <input
              className="auth-input"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleInputChange}
            ></input>
          </div>
          <button className="auth-btn" type="submit" onClick={handleSubmit}>
            Submit
          </button>
          <span>
            Already have an account ?<Link to="/login">Login</Link>
          </span>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
