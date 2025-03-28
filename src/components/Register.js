import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm";
import Button from "./Button";
import "./Register.css";

const Register = () => {
  const [isRegistrationFormOpen, setIsRegistrationFormOpen] = useState(false);

  const handleRegistrationClose = () => {
    setIsRegistrationFormOpen(false);
  };

  return (
    <div id="text2" className="section text2">
      <div className="conference-container-mg-small">
        <div className="text-column-mg">
          <h2 className="register-title">Registracija į konferenciją</h2>
          <h4 className="register-price">
            Bus išduodami 8 valandų trukmės profesinės kvalifikacijos tobulinimo
            sertifikatai.
          </h4>
        </div>
        <Button
          label="REGISTRUOTIS"
          variant="secondary"
          onClick={() => setIsRegistrationFormOpen(true)}
          className="register-button"
        />
      </div>

      <RegistrationForm
        isOpen={isRegistrationFormOpen}
        onClose={handleRegistrationClose}
      />
    </div>
  );
};

export default Register;
