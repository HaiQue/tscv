import { useState } from "react";
import "./Carousel.css";
import photo1 from "../imgs/photo_1.jpg";
import photo2 from "../imgs/photo_2.jpg";

const participants = [
  { name: "Johan Norberg", image: photo1 },
  { name: "David McWilliams", image: photo2 },
  { name: "Erin Meyer", image: photo1 },
  { name: "Manfred Kets de Vries", image: photo2 },
  { name: "Amy Gallo", image: photo1 },
  { name: "Hal Gregersen", image: photo2 },
];

//fking vscode bug
function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = participants.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

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
          {participants.map((participant, index) => (
            <div className="carousel-slide" key={index}>
              <div className="participant-card">
                <div className="image-container">
                  <img
                    src={participant.image}
                    alt={participant.name}
                    className="participant-image"
                  />
                  <p className="participant-name">{participant.name}</p>
                </div>
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
