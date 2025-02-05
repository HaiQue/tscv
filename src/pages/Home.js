import { useState, useRef } from "react"; // Add useRef
import Button from "../components/Button";
import "../App.css";
import "./Home.css";
import logoImage from "../imgs/Logo.png";
import Cybercity from "../imgs/Cybercity.png";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

function Home() {
  const [showMap, setShowMap] = useState(false);
  // Create a ref for scrolling
  const mapRef = useRef(null);

  const handleShowMap = () => {
    setShowMap((prev) => !prev);
    // Scroll to map after a small delay to ensure it's rendered
    setTimeout(() => {
      mapRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 100);
  };

  return (
    <div className="app-container">
      <div className="button-group">
        <Button label="PRANEŠĖJAI" anchor="text1" variant="primary" />
        <Button label="Renginio Vieta" anchor="text2" variant="primary" />
        <Button label="Įsigyti Bilietą" anchor="text3" variant="primary" />
      </div>

      <div className="main-section">
        {/* Left Text Section */}
        <div className="text-section">
          <h1>
            TRANSFUSION SAFETY
            <br />
            CONFERENCE
            <br />
            VILNIUS <span className="orange">2025</span>
          </h1>
          <h2 className="orange">BLOOD COMPONENTS MANAGEMENT</h2>
        </div>
        {/* Right Button + Logo Section */}
        <div className="right-section">
          <div className="button-group-horizontal">
            <Button label="GEGUŽĖS 13 D" variant="primary" />
            <Button label="CYBERCITY" variant="primary" />
          </div>
          <div className="organizer-container">
            <div className="conference-container">
              {/* Left: Text Section */}
              <div className="text-column">
                <h4>KONFERENCIJOS</h4>
                <h4>RENGĖJAS</h4>
              </div>
              {/* Right: Image Section */}
              <div className="image-column">
                <img src={logoImage} alt="NKC logo" className="logo-image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="text1" className="section text1">
        <Carousel />
      </div>

      <div id="text2" className="section text2">
        <div className="organizer-container">
          <div className="conference-container">
            <div className="text-column-mg">
              <h2>REGISTRACIJA Į KONFERENCIJĄ</h2>
              <h2>200€</h2>
            </div>
            <Button label="REGISTRUOTIS" variant="secondary" />
          </div>
        </div>
      </div>

      <div id="text3" className="section text3">
        <div className="organizer-container">
          <div className="conference-container-mg">
            {/* Left: Text Section */}
            <div className="text-column-md">
              <h2>KONFERENCIJOS VIETA</h2>
              <h4>CYBERCITY (ŠVITRIGAILOS G. 36, VILNIUS)</h4>
              <br />
              <Button
                label="LOKACIJA ŽEMĖLAPYJE"
                variant="secondary"
                onClick={handleShowMap}
              />
            </div>
            {/* Right: Image Section */}
            <div className="image-column">
              <img src={Cybercity} alt="Cybercity" className="cyber-image" />
            </div>
          </div>
        </div>

        {showMap && (
          <div ref={mapRef}>
            <iframe
              title="CyberCity Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.237292373098!2d25.28134031588925!3d54.67789598028414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd941a15a96d73%3A0x5c81a175f3dfcd0e!2s%C5%A0vitrigailos%20g.%2036%2C%20Vilnius%2003230!5e0!3m2!1sen!2slt!4v1717164122008!5m2!1sen!2slt"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
