import React, { useState } from "react";
import "./RegistrationForm.css";
import { Link } from "react-router-dom";

const RegistrationForm = ({ isOpen, onClose }) => {
  const ticketPrice = 100;

  const [formData, setFormData] = useState({
    vardas: "",
    pavarde: "",
    pareigos: "",
    darboviete: "",
    email: "",
    phone: "",
    vertimasPriemone: false,
    privacyPolicy: false,
  });

  const [errors, setErrors] = useState({
    vardas: false,
    pavarde: false,
    pareigos: false,
    darboviete: false,
    email: false,
    privacyPolicy: false,
  });

  const [touched, setTouched] = useState({
    vardas: false,
    pavarde: false,
    pareigos: false,
    darboviete: false,
    email: false,
    privacyPolicy: false,
  });

  const validateField = (name, value) => {
    switch (name) {
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case "vardas":
      case "pavarde":
      case "pareigos":
      case "darboviete":
        return value.trim().length > 0;
      case "privacyPolicy":
        return value === true;
      default:
        return true;
    }
  };

  const handleBlur = (name) => {
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: !validateField(name, formData[name]),
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: !validateField(name, value),
      }));
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));

    if (name === "privacyPolicy") {
      setErrors((prev) => ({
        ...prev,
        [name]: !checked,
      }));
      setTouched((prev) => ({
        ...prev,
        [name]: true,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (errors.hasOwnProperty(key)) {
        newErrors[key] = !validateField(key, formData[key]);
      }
    });

    setErrors(newErrors);
    setTouched(
      Object.keys(touched).reduce(
        (acc, key) => ({
          ...acc,
          [key]: true,
        }),
        {}
      )
    );

    // Check if there are any errors
    if (Object.values(newErrors).some((error) => error)) {
      alert("Prašome užpildyti visus būtinus laukus.");
      return;
    }

    // Create a ticket object to match what the server expects
    const ticket = {
      price: ticketPrice,
      isActive: true,
    };

    const emailData = {
      userEmail: formData.email,
      adminEmail: "konferencija@kraujodonoryste.lt",
      subject: "SAUGUS KRAUJAS NKC 2025 Registracija",
      userData: {
        ...formData,
        // Include tickets array with a single ticket to match server expectations
        tickets: [ticket],
        totalAmount: ticketPrice,
      },
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/send-email.php`,
        // "http://localhost/tscv/api/send-email.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Nepavyko išsiųsti registracijos");
      }

      alert("Registracija sėkminga! Patikrinkite savo el. paštą.");
      onClose();
    } catch (error) {
      console.error("Registration error:", error);
      alert(`Registracija nepavyko. Klaida: ${error.message}`);
    }
  };

  if (!isOpen) return null;

  const getInputClassName = (fieldName) => {
    return `form-input ${
      touched[fieldName] && errors[fieldName] ? "error" : ""
    }`;
  };

  // Add this function to check if form is valid
  const isFormValid = () => {
    // Check if all required fields are filled and valid
    const requiredFields = [
      "vardas",
      "pavarde",
      "pareigos",
      "darboviete",
      "email",
    ];
    const hasEmptyFields = requiredFields.some((field) => !formData[field]);
    const hasErrors = Object.values(errors).some((error) => error);
    const privacyAccepted = formData.privacyPolicy;

    return !hasEmptyFields && !hasErrors && privacyAccepted;
  };

  return (
    <div className="modal-overlay">
      <form onSubmit={handleSubmit} className="modal-content">
        <button className="close-button" onClick={onClose} type="button">
          ×
        </button>

        <h2 className="form-title">Registracijos forma</h2>

        <div className="form-content">
          <div className="form-section">
            <div className="form-group">
              <label>
                Vardas <span className="red">*</span>
              </label>
              <input
                type="text"
                name="vardas"
                className={getInputClassName("vardas")}
                value={formData.vardas}
                onChange={handleInputChange}
                onBlur={() => handleBlur("vardas")}
                required
              />
              {touched.vardas && errors.vardas && (
                <span className="error-message">Šis laukas yra privalomas</span>
              )}
            </div>

            <div className="form-group">
              <label>
                Pavardė <span className="red">*</span>
              </label>
              <input
                type="text"
                name="pavarde"
                className={getInputClassName("pavarde")}
                value={formData.pavarde}
                onChange={handleInputChange}
                onBlur={() => handleBlur("pavarde")}
                required
              />
              {touched.pavarde && errors.pavarde && (
                <span className="error-message">Šis laukas yra privalomas</span>
              )}
            </div>

            <div className="form-group">
              <label>
                Pareigos <span className="red">*</span>
              </label>
              <input
                type="text"
                name="pareigos"
                className={getInputClassName("pareigos")}
                value={formData.pareigos}
                onChange={handleInputChange}
                onBlur={() => handleBlur("pareigos")}
                required
              />
              {touched.pareigos && errors.pareigos && (
                <span className="error-message">Šis laukas yra privalomas</span>
              )}
            </div>

            <div className="form-group">
              <label>
                Darbovietė <span className="red">*</span>
              </label>
              <input
                type="text"
                name="darboviete"
                className={getInputClassName("darboviete")}
                value={formData.darboviete}
                onChange={handleInputChange}
                onBlur={() => handleBlur("darboviete")}
                required
              />
              {touched.darboviete && errors.darboviete && (
                <span className="error-message">Šis laukas yra privalomas</span>
              )}
            </div>

            <div className="form-group">
              <label>
                El. paštas <span className="red">*</span>
              </label>
              <input
                type="email"
                name="email"
                className={getInputClassName("email")}
                value={formData.email}
                onChange={handleInputChange}
                onBlur={() => handleBlur("email")}
                required
              />
              {touched.email && errors.email && (
                <span className="error-message">
                  Įveskite teisingą el. pašto adresą
                </span>
              )}
            </div>

            <div className="form-group">
              <label>Kontaktinis tel. nr.</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <span>Vertimo priemonė</span>
                <input
                  type="checkbox"
                  name="vertimasPriemone"
                  checked={formData.vertimasPriemone}
                  onChange={handleCheckboxChange}
                />
              </label>
            </div>

            <div className="form-group checkbox-group">
              <label
                className={`checkbox-label ${
                  touched.privacyPolicy && errors.privacyPolicy ? "error" : ""
                }`}
              >
                <span>
                  Sutinku su{" "}
                  <Link
                    to="/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privatumo politika
                  </Link>{" "}
                  <span className="red">*</span>
                </span>
                <input
                  type="checkbox"
                  name="privacyPolicy"
                  checked={formData.privacyPolicy}
                  onChange={handleCheckboxChange}
                  onBlur={() => handleBlur("privacyPolicy")}
                  required
                />
              </label>
              {touched.privacyPolicy && errors.privacyPolicy && (
                <span className="error-message">
                  Privalote sutikti su privatumo politika
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="form-footer">
          <button
            type="submit"
            className="submit-button"
            disabled={!isFormValid()}
          >
            Registruotis
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
