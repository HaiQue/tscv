import "./ImageGrid.css";
import photo1 from "../imgs/photo_1.jpg";
import photo2 from "../imgs/photo_2.jpg";
import photoSpeaker1 from "../imgs/Andrius Macas.png";
import photoSpeaker2 from "../imgs/Arunas Gelmanas.png";
import photoSpeaker3 from "../imgs/Riin Kullaste.png";
import photoSpeaker4 from "../imgs/Aurora.png";

// Add IDs to each participant to link them with their profiles
const participants = [
  { id: "speaker1", name: "Andrius Macas", image: photoSpeaker1 },
  { id: "speaker2", name: "Arūnas Gelmanas", image: photoSpeaker2 },
  { id: "speaker3", name: "Riin Kullaste", image: photoSpeaker3 },
  { id: "speaker4", name: "Aurora Espinosa Fernandez", image: photoSpeaker4 },
  // { id: "speaker5", name: "Agneta Wikman", image: photo1 },
  // { id: "speaker6", name: "Hal Gregersen", image: photo2 },
];

function Carousel() {
  // Scroll to the speaker profile when clicked
  const scrollToSpeaker = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Scroll with a small offset to account for any fixed headers
      const offset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="carousel">
      <div className="carousel-track-container">
        <div className="carousel-track">
          {participants.map((participant, index) => (
            <div
              className="carousel-slide"
              key={index}
              onClick={() => scrollToSpeaker(participant.id)}
              style={{ cursor: "pointer" }} // Add cursor pointer to indicate it's clickable
            >
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
