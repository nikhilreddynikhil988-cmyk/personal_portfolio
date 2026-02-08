const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Message = require('../models/message');

const { Resend } = require('resend');

const validateContactForm = [
  body('name', 'Name is required').trim().notEmpty().escape(),
  body('email', 'Please include a valid email').isEmail().normalizeEmail(),
  body('subject', 'Subject is required').trim().notEmpty().escape(),
  body('message', 'Message is required').trim().notEmpty().escape(),
];

const handleContactForm = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, subject, message } = req.body;

  try {
    const newMessage = new Message({
      name,
      email,
      subject,
      message,
    });

    await newMessage.save();
    console.log('Message saved to database');

    // Send email notification
    if (process.env.RESEND_API_KEY) {
      console.log('Attempting to send email via Resend...');
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: 'Portfolio Contact Form <onboarding@resend.dev>',
          to: process.env.RECIPIENT_EMAIL || 'nikhilreddynikhil988@gmail.com',
          subject: `New Message: ${subject}`,
          html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        });
        console.log('Email sent successfully');
      } catch (emailErr) {
        console.error('Failed to send email:', emailErr);
      }
    }

    res.status(201).json({ msg: 'Message sent successfully' });
  } catch (err) {
    console.error('Contact route error:', err);
    res.status(500).json({ error: err.message });
  }
};

router.post('/', validateContactForm, handleContactForm);

module.exports = router;