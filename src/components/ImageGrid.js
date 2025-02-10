// import { useState } from "react";
import "./ImageGrid.css";
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

function Carousel() {
  return (
    <div className="carousel">
      <div className="carousel-track-container">
        <div className="carousel-track">
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
    </div>
  );
}

export default Carousel;
