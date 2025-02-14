import React, { useState } from "react";
import "./RegistrationForm.css";
import { Link } from "react-router-dom";

const RegistrationForm = ({ isOpen, onClose, ticketCount, totalPrice }) => {
  const [tickets, setTickets] = useState(
    Array(ticketCount).fill({
      price: 100,
      isActive: true,
    })
  );

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

  if (!isOpen) return null;

  const removeTicket = (index) => {
    const newTickets = [...tickets];
    newTickets[index].isActive = false;
    setTickets(newTickets);
  };

  const addTicket = () => {
    setTickets([...tickets, { price: 100, isActive: true }]);
  };

  const activeTickets = tickets.filter((ticket) => ticket.isActive);
  const currentTotal = activeTickets.length * 100;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare email data
    const emailData = {
      userEmail: formData.email,
      adminEmail: "your-admin-email@gmail.com", // Replace with your admin email
      subject: "TRANSFUSION SAFETY CONFERENCE VILNIUS 2025 Registration",
      userData: {
        ...formData,
        tickets: activeTickets,
        totalAmount: currentTotal,
      },
    };

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailData),
        }
      );

      if (response.ok) {
        alert("Registration successful! Check your email for confirmation.");
        onClose();
      } else {
        throw new Error("Failed to send registration");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="modal-overlay">
      <form onSubmit={handleSubmit} className="modal-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>

        <h2 className="form-title">Registracijos forma</h2>

        <div className="form-grid">
          <div className="form-section">
            <div className="form-group">
              <label>
                Vardas <span className="red">*</span>
              </label>
              <input
                type="text"
                name="vardas"
                required
                value={formData.vardas}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>
                Pavardė <span className="red">*</span>
              </label>
              <input
                type="text"
                name="pavarde"
                required
                value={formData.pavarde}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>
                Pareigos <span className="red">*</span>
              </label>
              <input
                type="text"
                name="pareigos"
                required
                value={formData.pareigos}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>
                Darbovietė <span className="red">*</span>
              </label>
              <input
                type="text"
                name="darboviete"
                required
                value={formData.darboviete}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>
                El. paštas <span className="red">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
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
              <label>
                <input
                  type="checkbox"
                  name="vertimasPriemone"
                  checked={formData.vertimasPriemone}
                  onChange={handleCheckboxChange}
                />
                Vertimo priemonė
              </label>
            </div>
            <div className="form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="privacyPolicy"
                  checked={formData.privacyPolicy}
                  onChange={handleCheckboxChange}
                  required
                />
                Sutinku su{" "}
                <Link
                  to="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privatumo ir slapukų politika
                </Link>{" "}
                <span className="red">*</span>
              </label>
            </div>
          </div>

          <div className="form-section">
            <h3 className="order-info">Jūsų užsakymas</h3>
            <div className="tickets-list">
              {tickets.map(
                (ticket, index) =>
                  ticket.isActive && (
                    <div key={index} className="ticket-item">
                      <span>SAUGUS KRAUJAS NKC 2025 </span>
                      <span>{ticket.price} €</span>
                      <button
                        className="remove-ticket"
                        onClick={() => removeTicket(index)}
                      >
                        ×
                      </button>
                    </div>
                  )
              )}
              <button className="add-ticket" onClick={addTicket}>
                + Pridėti bilietą
              </button>
            </div>
            <div className="total-price">
              <span>Viso:</span>
              <span>{currentTotal} €</span>
            </div>
          </div>
        </div>

        <div className="form-footer">
          <button
            type="submit"
            className="submit-button"
            disabled={!formData.privacyPolicy}
          >
            Registruotis
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
