import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("✅ Your message has been sent successfully!");
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <div className="contact-left">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">I'd like to hear from you!</p>
          <p className="contact-text">
            If you have any inquiries or just want to say hi, please use the contact form.
          </p>

          <div className="contact-email">
            <MdEmail className="email-icon" />
            <span>john@gmail.com</span>
          </div>

          <div className="social-container">
            <span className="social-text">Like and Share:</span>
            <div className="social-icons">
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
            </div>
          </div>

        </div>

        <div className="contact-right">
          {success && <p className="message-text">{success}</p>}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="name-row">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <input
              type="email"
              placeholder="Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
