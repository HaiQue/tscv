const express = require("express");
const nodemailer = require("nodemailer");
const { addRegistrationToExcel } = require("../utils/excelHandler");
const router = express.Router();

// Configure nodemailer with your mail server settings
const transporter = nodemailer.createTransport({
  host: "cphostingas.telecentras.lt",
  port: 465,
  secure: true, // true for port 465 with SSL
  auth: {
    user: process.env.EMAIL_USER, // example@kraujodonoryste.lt
    pass: process.env.EMAIL_PASSWORD, // your email password
  },
  tls: {
    // Do not fail on invalid certs
    rejectUnauthorized: false,
  },
});

// Verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log("Server connection failed:", error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

router.post("/send-email", async (req, res) => {
  try {
    console.log("Received email request:", req.body);

    const { userEmail, adminEmail, subject, userData } = req.body;

    if (!userEmail || !adminEmail || !userData) {
      console.error("Missing required fields");
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Save to Excel first
    const excelSaved = await addRegistrationToExcel(userData);
    if (!excelSaved) {
      throw new Error("Failed to save registration data to Excel");
    }

    // Create email template for user in Lithuanian
    const userEmailContent = `
      Gerb. ${userData.vardas} ${userData.pavarde},

      Dėkojame už registraciją į konferenciją SAUGUS KRAUJAS NKC 2025!

      Jūsų registracijos duomenys:
      - Vardas, pavardė: ${userData.vardas} ${userData.pavarde}
      - Pareigos: ${userData.pareigos}
      - Darbovietė: ${userData.darboviete}
      - El. paštas: ${userData.email}
      - Tel. numeris: ${userData.phone}
      - Bilietų skaičius: ${userData.tickets.length}
      - Bendra suma: ${userData.totalAmount} €
      ${userData.vertimasPriemone ? "- Vertimo priemonė: Taip" : ""}

      Netrukus su Jumis susisieksime dėl apmokėjimo.

      Pagarbiai,
      Konferencijos organizatoriai
    `;

    // Create email template for admin
    const adminEmailContent = `
      Nauja registracija į konferenciją:
      
      Dalyvio informacija:
      - Vardas, pavardė: ${userData.vardas} ${userData.pavarde}
      - Pareigos: ${userData.pareigos}
      - Darbovietė: ${userData.darboviete}
      - El. paštas: ${userData.email}
      - Tel. numeris: ${userData.phone}
      - Vertimo priemonė: ${userData.vertimasPriemone ? "Taip" : "Ne"}
      - Bilietų skaičius: ${userData.tickets.length}
      - Bendra suma: ${userData.totalAmount} €
    `;

    // Send email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: userEmail,
      subject: "Registracija į konferenciją SAUGUS KRAUJAS NKC 2025",
      text: userEmailContent,
    });

    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: adminEmail,
      subject: `Nauja registracija: ${userData.vardas} ${userData.pavarde}`,
      text: adminEmailContent,
    });

    res.status(200).json({ message: "Registration processed successfully" });
  } catch (error) {
    console.error("Processing error:", error);
    res.status(500).json({
      error: "Failed to process registration",
      details: error.message,
    });
  }
});

module.exports = router;
