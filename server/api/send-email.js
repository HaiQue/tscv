const express = require("express");
const nodemailer = require("nodemailer");
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
  const { userEmail, adminEmail, subject, userData } = req.body;

  // Create email template for user
  const userEmailContent = `
    Dear ${userData.vardas} ${userData.pavarde},

    Thank you for registering for TRANSFUSION SAFETY CONFERENCE VILNIUS 2025!

    Registration Details:
    - Name: ${userData.vardas} ${userData.pavarde}
    - Position: ${userData.pareigos}
    - Workplace: ${userData.darboviete}
    - Email: ${userData.email}
    - Phone: ${userData.phone}
    - Number of tickets: ${userData.tickets.length}
    - Total amount: ${userData.totalAmount} €

    We look forward to seeing you at the conference!
  `;

  // Create email template for admin
  const adminEmailContent = `
    New Registration:
    
    Attendee Details:
    - Name: ${userData.vardas} ${userData.pavarde}
    - Position: ${userData.pareigos}
    - Workplace: ${userData.darboviete}
    - Email: ${userData.email}
    - Phone: ${userData.phone}
    - Translation needed: ${userData.vertimasPriemone ? "Yes" : "No"}
    - Number of tickets: ${userData.tickets.length}
    - Total amount: ${userData.totalAmount} €
  `;

  try {
    // Send email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: userEmail,
      subject: subject,
      text: userEmailContent,
    });

    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: adminEmail,
      subject: `New Registration: ${subject}`,
      text: adminEmailContent,
    });

    res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({ error: "Failed to send emails" });
  }
});

module.exports = router;
