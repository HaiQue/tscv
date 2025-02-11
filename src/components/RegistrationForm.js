import React, { useState } from "react";
import "./RegistrationForm.css";

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

  return (
    <div className="modal-overlay">
      <div className="modal-content">
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
          </div>

          <div className="form-section">
            <h3 className="order-info">Jūsų užsakymas</h3>
            <div className="tickets-list">
              {tickets.map(
                (ticket, index) =>
                  ticket.isActive && (
                    <div key={index} className="ticket-item">
                      <span>TRANSFUSION SAFETY CONFERENCE VILNIUS 2025</span>
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
          <button type="submit" className="submit-button">
            Tęsti
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
