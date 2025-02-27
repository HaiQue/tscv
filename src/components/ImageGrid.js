import "./ImageGrid.css";
import photo1 from "../imgs/photo_1.jpg";
import photo2 from "../imgs/photo_2.jpg";

// Add IDs to each participant to link them with their profiles
const participants = [
  { id: "speaker1", name: "Erin Meyer", image: photo1 },
  { id: "speaker2", name: "David McWilliams", image: photo2 },
  { id: "speaker3", name: "Johan Norberg", image: photo1 },
  { id: "speaker4", name: "Manfred Kets de Vries", image: photo2 },
  { id: "speaker5", name: "Amy Gallo", image: photo1 },
  { id: "speaker6", name: "Hal Gregersen", image: photo2 },
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
