import React, { useState } from "react";
import "./RegistrationModal.css";

const RegistrationModal = ({ isOpen, onClose, onContinue }) => {
  const [ticketCount, setTicketCount] = useState(1);
  const TICKET_PRICE = 100;

  if (!isOpen) return null;

  const handleContinue = () => {
    onContinue({ ticketCount, totalPrice: ticketCount * TICKET_PRICE });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>

        <div className="modal-header">
          <h2>TRANSFUSION SAFETY CONFERENCE VILNIUS 2025</h2>
          <h3>CYBERCITY</h3>
        </div>

        <div className="modal-body">
          <p>Įveskite norimą bilietų kiekį:</p>
          <div className="ticket-selector">
            <input
              type="number"
              min="1"
              value={ticketCount}
              onChange={(e) =>
                setTicketCount(Math.max(1, parseInt(e.target.value) || 1))
              }
            />
          </div>
          <div className="price-info">
            <p>Bendra suma: {ticketCount * TICKET_PRICE} €</p>
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

{
  /* 
    <h2>TRANSFUSION SAFETY CONFERENCE VILNIUS 2025</h2>
<h3>CYBERCITY</h3> 
*/
}
