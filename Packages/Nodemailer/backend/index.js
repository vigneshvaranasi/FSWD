// Import required modules
const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();
const app = express();
app.use(express.json());

// Define the transporter using your email service credentials
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Use your email provider, e.g., 'Yahoo', 'Outlook'
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Endpoint to send a plain text email
app.post('/send-text-email', (req, res) => {
  const { to, subject, text } = req.body;

  const mailOptions = {
    from: process.env.EMAIL, // Sender address
    to: to, // List of recipients
    subject: subject, // Subject line
    text: text, // Plain text body
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending email');
    }
    console.log('Email sent: ' + info.response);
    res.status(200).send('Text email sent successfully');
  });
});

// Endpoint to send an HTML email
app.post('/send-html-email', (req, res) => {
  const { to, subject, html } = req.body;

  const mailOptions = {
    from: process.env.EMAIL, // Sender address
    to: to, // List of recipients
    subject: subject, // Subject line
    html: html, // HTML body
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending email');
    }
    console.log('Email sent: ' + info.response);
    res.status(200).send('HTML email sent successfully');
  });
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
