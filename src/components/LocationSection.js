import { useRef, useState } from "react";
import Button from "./Button";
import Cybercity from "../imgs/Cybercity.png";
import "./LocationSection.css";

function LocationSection() {
  const [showMap, setShowMap] = useState(false);
  const mapRef = useRef(null);

  const handleShowMap = () => {
    setShowMap((prev) => !prev);
    setTimeout(() => {
      mapRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 100);
  };

  return (
    <div id="text3" className="section text3">
      <div className="conference-container-mg">
        <div className="text-column-md">
          <h2>KONFERENCIJOS VIETA</h2>
          <br />
          <h4>CYBERCITY (ŠVITRIGAILOS G. 36, VILNIUS)</h4>
          <br />
          <Button
            label="LOKACIJA ŽEMĖLAPYJE"
            variant="secondary"
            onClick={handleShowMap}
          />
        </div>
        <div className="image-column">
          <img src={Cybercity} alt="Cybercity" className="cyber-image" />
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
  );
}

export default LocationSection;
