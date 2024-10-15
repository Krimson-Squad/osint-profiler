// src/components/Footer.jsx
import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faGooglePlus, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>OSINT Profiler</h2>
        <p>Your go-to tool for open-source intelligence profiling.</p>
        <ul className="socials">
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a></li>
          <li><a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
          <li><a href="https://plus.google.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGooglePlus} /></a></li>
          <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        </ul>
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact</a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <p>© {new Date().getFullYear()} OSINT Profiler. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
