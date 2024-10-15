import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./Footer.css"; // Import custom CSS for additional styles

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">About Us</h5>
            <p className="footer-text">
              We are committed to providing high-quality OSINT tools and
              resources. Your privacy and security are our top priorities.
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/privacy" className="text-white footer-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white footer-link">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white footer-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">Follow Us</h5>
            <div>
              <a
                href="https://facebook.com"
                className="text-white me-3 footer-icon"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://twitter.com"
                className="text-white me-3 footer-icon"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://instagram.com"
                className="text-white me-3 footer-icon"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-white footer-icon"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <small className="footer-small">
            &copy; {new Date().getFullYear()} Profile App. All Rights Reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
