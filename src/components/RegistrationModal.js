import React from "react";
import "./RegistrationModal.css";

const RegistrationModal = ({ isOpen, onClose, onContinue }) => {
  const TICKET_PRICE = 100;

  if (!isOpen) return null;

  const handleContinue = () => {
    // Always pass 1 as the ticket count
    onContinue({ ticketCount: 1, totalPrice: TICKET_PRICE });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>

        <div className="modal-header">
          <h2>SAUGUS KRAUJAS NKC 2025</h2>
          <h3>CYBERCITY</h3>
        </div>

        <div className="modal-body">
          <p>Dalyvio registracija:</p>
          <div className="price-info">
            <p>Registracijos mokestis: {TICKET_PRICE} €</p>
          </div>
          <button className="register-button" onClick={handleContinue}>
            TĘSTI
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;
