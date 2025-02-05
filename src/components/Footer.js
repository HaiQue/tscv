import React from "react";
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
            <span>Transfusion</span>
            <span>Safety</span>
            <span>Conference</span>
            <span>Vilnius</span>
            <span>2024</span>
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
            <a href="tel:+37000000000">+370 (000) 00 000</a>
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
            Dalyvio keitimo, dalyvavimo atšaukimo ir pinigų grąžinimo taisyklės
          </p>
          <p>Privatumas ir slapukų politika</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
