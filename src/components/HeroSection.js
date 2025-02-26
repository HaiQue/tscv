import Button from "./Button";
import logoImage from "../imgs/Logo.png";
import "../pages/Home.css";

function HeroSection() {
  return (
    <>
      <div className="button-group">
        <Button label="PRANEŠĖJAI" anchor="text1" variant="primary" />
        <Button label="Renginio Vieta" anchor="text3" variant="primary" />
        <Button label="Įsigyti Bilietą" anchor="text2" variant="primary" />
      </div>
      <div className="main-section">
        {/* Left Text Section */}
        <div className="text-section">
          <h1>
            SAUGUS KRAUJAS
            <br />
            NKC
            <span className="orange"> 2025</span>
          </h1>
          <h2 className="orange">Racionalus kraujo naudojimas</h2>
        </div>
        {/* Right Button + Logo Section */}
        <div className="right-section">
          <div className="button-group-horizontal">
            <Button
              className="location-button"
              label="GEGUŽĖS 13 D"
              variant="primary"
            />
            <Button
              className="location-button"
              label="CYBERCITY"
              variant="primary"
            />
          </div>
          <div className="organizer-container">
            <div className="organizer-container-right">
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
    </>
  );
}

export default HeroSection;
