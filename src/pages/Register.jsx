import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "./auth.css";

export default function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const generateError = (err) => toast.error(err);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          navigate("/");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="auth-main-container">
      <div className="auth-container">
        <h2 className="auth-h2">Register Account</h2>
        <div className="auth-form">
          <div className="auth-div">
            <label htmlFor="email">Email</label>
            <input
              className="auth-input"
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            ></input>
          </div>
          <div className="auth-div">
            <label htmlFor="password">Password</label>
            <input
              className="auth-input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
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
