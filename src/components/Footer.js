import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaPaperPlane,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-section">
        <h1>PC Recommendation</h1>
        <p>
          Our website's primary goal is to assist you in selecting the best PC
          that suits your requirements. You can easily filter your search based
          on your budget preferences, enabling you to find the right computer at
          an affordable price.
        </p>
        <div className="social-icons">
          <a href="https://www.twitter.com/">
            <FaTwitter />
          </a>
          <a href="https://www.facebook.com/">
            <FaFacebook />
          </a>
          <a href="https://www.telegram.com/">
            <FaTelegram />
          </a>
          <a href="https://www.youtube.com/">
            <FaYoutube />
          </a>
        </div>
        <div className="copyright">
          <p>Copyright © 2022 Envast. All rights reserved.</p>
        </div>
      </div>
      <div className="footer-section">
        <h1>Resource</h1>
        <ul>
          <li>Blogs</li>
          <li>Help And Center</li>
          <li>FaQs</li>
        </ul>
      </div>
      <div className="footer-section">
        <h1>Subscribe with Us</h1>
        <p>Sign up for our newsletter to get the latest news in your inbox.</p>
        <div className="subscribe-container">
          <input type="text" placeholder="info@gmail.com" />
          <button>
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
