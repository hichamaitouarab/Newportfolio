import React, { useState } from 'react';
import '../styles/Contact.css';

// Import icons for the illustration
import { FaHeadset, FaLaptop, FaEnvelope, FaComments, FaStar } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">Let's work together on your next project</p>
        
        <div className="contact-content">
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project"
                  rows="5"
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                SUBMIT
              </button>
            </form>
          </div>
          
          <div className="contact-illustration">
            <div className="support-person">
              <div className="person-head">
                <div className="headset">
                  <FaHeadset />
                </div>
                <div className="face">😊</div>
              </div>
              <div className="person-body">
                <div className="arms"></div>
                <div className="torso"></div>
              </div>
              <div className="desk">
                <div className="computer">
                  <FaLaptop />
                </div>
              </div>
            </div>
            <div className="floating-elements">
              <div className="float-element">
                <FaEnvelope />
              </div>
              <div className="float-element">
                <FaComments />
              </div>
              <div className="float-element">
                <FaStar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;