import { useState } from "react";
import "./Carousel.css"; // Add this if you want to keep the carousel styles separate.
import photo1 from "../imgs/photo_1.jpg";
import photo2 from "../imgs/photo_2.jpg";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 9;
  const visibleSlides = 4;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const images = [photo1, photo2];

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevSlide}>
        &#9664;
      </button>
      <div className="carousel-track-container">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${(currentIndex / totalSlides) * 100}%)`,
          }}
        >
          {[...Array(totalSlides)].map((_, index) => (
            <div className="carousel-slide" key={index}>
              <div className="participant-card">
                <div className="image-container">
                  <img
                    src={images[index % images.length]}
                    alt={`Participant ${index + 1}`}
                    className="participant-image"
                  />
                </div>
                <p>Vardenis Pavardenis {index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-button next" onClick={nextSlide}>
        &#9654;
      </button>
    </div>
  );
}

export default Carousel;
