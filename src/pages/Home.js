import { useState, useRef } from "react"; // Add useRef
import Button from "../components/Button";
import "../App.css";
import "./Home.css";
import ImageGrid from "../components/ImageGrid";
import Footer from "../components/Footer";
import RenderSpeakers from "../components/RenderSpeakers";
import Register from "../components/Register";
import HeroSection from "../components/HeroSection";
import LocationSection from "../components/LocationSection";
// import Count from "../utils/Count";

function Home() {
  return (
    <div className="app-container">
      <HeroSection />
      {/* <Count /> */}
      <div id="text1" className="section text1">
        <ImageGrid />
      </div>
      <Register />
      <RenderSpeakers />
      <div id="text2" className="section text2">
        <Register />
      </div>
      <LocationSection />
      <Footer />
    </div>
  );
}

export default Home;
