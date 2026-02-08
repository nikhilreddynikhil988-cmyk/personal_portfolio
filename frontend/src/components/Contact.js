import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import API_URL from '../config';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { name, email, subject, message } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/contact`, formData);
      console.log(res.data);
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      console.error('Submission error:', err.response?.data || err.message);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <section className="contact">
      <div className="container contact-container">
        <div className="contact-header">
          <h2>Contact Me</h2>
          <p>Have a question or want to work together? Feel free to reach out!</p>
        </div>
        <form onSubmit={onSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={name} onChange={onChange} placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={email} onChange={onChange} placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" value={subject} onChange={onChange} placeholder="Subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" value={message} onChange={onChange} placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
