import React from "react";
import "./SpeakerProfile.css";

const SpeakerProfile = ({
  id,
  imageUrl,
  category,
  name,
  description,
  buttonText,
  imagePosition = "left",
  theme = "light",
}) => {
  return (
    <div
      id={id}
      className={`speaker-container ${
        imagePosition === "right" ? "reverse" : ""
      } ${theme}`}
    >
      <div className="speaker-content">
        <span className="category">{category}</span>
        <h2 className="name">{name}</h2>
        <p className="description">{description}</p>
      </div>
      <div className="speaker-image">
        <img src={imageUrl} alt={name} />
      </div>
    </div>
  );
};

export default SpeakerProfile;
