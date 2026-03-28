import React from 'react';
import "../Styles/contact.css";
import myImage from "../Assets/const.jpg";
const bgStyle = {
  backgroundImage: `url(${myImage})`, 
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
};

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (You can handle form logic here)");
  };

  return (
    <section style={bgStyle} className="contact">
      <h2>Contact Us</h2>
      <p>Have questions or suggestions? We'd love to hear from you!</p>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <p>Email: <a href="mailto:contact@recipebook.com">contact@recipebook.com</a></p>
        <p>Follow us: 
          <button>Instagram</button> | 
          <button>Facebook</button> | 
          <button>YouTube</button>
        </p>
      </div>
    </section>
  );
};

export default Contact;
