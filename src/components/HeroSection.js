import Button from "./Button";
import logoImage from "../imgs/Logo.png";
import "../pages/Home.css";

function HeroSection() {
  return (
    <>
      {/* Top header with KRI and Buttons */}
      <div className="top-header">
        {/* KRI (Konferencijos Rengėjas + Logo) */}
        <div className="kri">
          <div className="text-column">
            <h4>KONFERENCIJOS</h4>
            <h4>RENGĖJAS</h4>
          </div>
          <div className="image-column">
            <img src={logoImage} alt="NKC logo" className="logo-image-small" />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="hero-button-group top-buttons">
          <Button label="PRANEŠĖJAI" anchor="text1" variant="primary" />
          <Button label="RENGINIO VIETA" anchor="text3" variant="primary" />
          <Button label="REGISTRUOTIS" anchor="text2" variant="primary" />
        </div>
      </div>

      {/* Main Content Section */}
      <div className="main-section">
        <div className="text-section">
          <h1>
            SAUGUS KRAUJAS
            <br />
            NKC
            <span className="orange"> 2025</span>
          </h1>
          <h2 className="orange">Racionalus kraujo naudojimas</h2>
        </div>

        <div className="right-section">
          <div className="button-group-horizontal">
            <Button
              className="location-button"
              label="GEGUŽĖS 13 D."
              variant="primary"
            />
            <Button
              className="location-button"
              label="CYBERCITY"
              variant="primary"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
