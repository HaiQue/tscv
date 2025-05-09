import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { ReactComponent as Logo } from "../imgs/Logo_cropped.svg"; // Import SVG as a React component

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Side: Logo with Text */}
        <div className="logo-section">
          <Logo className="footer-logo" />
          <div className="logo-text">
            <span>Saugus</span>
            <span>Kraujas</span>
            <span>NKC</span>
            <span className="orange">2025</span>
          </div>
        </div>

        {/* Middle Section: Contact Info */}
        <div className="contact-section">
          <h4>Rekvizitai</h4>
          <p>Nacionalinis kraujo centras, VŠĮ</p>
          <p>Žolyno g. 34, LT-10210 Vilnius</p>
        </div>

        <div className="footer-contact">
          <h4>Susisiekime</h4>
          <p>
            <a href="tel:+370 5 239 2444">+370 5 239 2444</a>
          </p>
          <p>
            <a href="mailto:konferencija@kraujodonoryste.lt">
              konferencija@kraujodonoryste.lt
            </a>
          </p>
        </div>

        {/* Right Side: Policies */}
        <div className="policy-section">
          <p>
            <Link
              to="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privatumo politika
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
