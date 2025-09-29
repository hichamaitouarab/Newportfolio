import React, { useState } from "react";
import "../styles/Contact.css";
import {
  FaHeadset,
  FaLaptop,
  FaEnvelope,
  FaComments,
  FaStar,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_w5ddckj", // Replace with your EmailJS Service ID
        "template_5xelxwb", // Replace with your EmailJS Template ID
        {
          from_name: formData.fullName,
          from_email: formData.email,
          message: formData.message,
        },
        "VVdUJUD00-J7L8GQ9" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          alert("Thank you for your message! I'll get back to you soon.");
          setFormData({ fullName: "", email: "", message: "" });
          setIsSending(false);
        },
        (err) => {
          console.error("FAILED...", err);
          alert(`Oops! Something went wrong: ${err.text || err}`);
          setIsSending(false);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Let's work together on your next project
        </p>

        <div className="contact-content">
          {/* Form */}
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

              <button type="submit" className="submit-btn" disabled={isSending}>
                {isSending ? "Sending..." : "SUBMIT"}
              </button>
            </form>
          </div>

          {/* Illustration */}
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
