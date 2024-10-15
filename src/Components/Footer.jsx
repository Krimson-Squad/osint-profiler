import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="privacy" className="text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="/terms" className="text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <div>
              <a
                href="https://facebook.com"
                className="text-white me-3"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://twitter.com"
                className="text-white me-3"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://instagram.com"
                className="text-white me-3"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-white"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <small>
            &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
