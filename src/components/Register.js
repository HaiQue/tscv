import React, { useState } from "react";

import RegistrationModal from "./RegistrationModal";
import RegistrationForm from "./RegistrationForm";

import Button from "./Button";
import "./Register.css";

const Register = () => {
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [isRegistrationFormOpen, setIsRegistrationFormOpen] = useState(false);
  const [ticketData, setTicketData] = useState(null);

  const handleTicketSelection = (data) => {
    setTicketData(data);
    setIsTicketModalOpen(false);
    setIsRegistrationFormOpen(true);
  };

  return (
    <div id="text2" className="section text2">
      <div className="conference-container-mg-small">
        <div className="text-column-mg">
          <h2 className="register-title">REGISTRACIJA Į KONFERENCIJĄ</h2>
          <h2 className="register-price">100€</h2>
        </div>
        <Button
          label="REGISTRUOTIS"
          variant="secondary"
          onClick={() => setIsTicketModalOpen(true)}
          className="register-button"
        />
      </div>

      <RegistrationModal
        isOpen={isTicketModalOpen}
        onClose={() => setIsTicketModalOpen(false)}
        onContinue={handleTicketSelection}
      />

      {ticketData && (
        <RegistrationForm
          isOpen={isRegistrationFormOpen}
          onClose={() => setIsRegistrationFormOpen(false)}
          ticketCount={ticketData.ticketCount}
          totalPrice={ticketData.totalPrice}
        />
      )}
    </div>
  );
};

export default Register;
