import React, { useState } from 'react';
import './ContactUs.css';
import backgroundImage from '../../assets/contactbg.png';
import logo from '../../assets/logo.svg';

const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function Submit(e) {
    e.preventDefault();
    setIsSubmitted(true); // Disable the button

    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    
    fetch(
      "https://script.google.com/macros/s/AKfycbwb8Htujz-v_Kdi1-mCpgAf37UeSjxoHjhKLapNVsCBpO0R5l4GAZ3yKA0zlzNzFORb/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setIsSubmitted(false);
        clearForm();
      })
      .catch((error) => {
        setIsSubmitted(false);
        clearForm();

      });

  }

  const clearForm = () => {
    const formEle = document.querySelector("form");
    formEle.reset(); // Resets all form fields to their default values
  };

  return (
    <div className="community-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="line"></div>
      <img src={logo} alt="Logo" className="center-logo" />
      <div className="contact-container">
        <div className="contact-box">
          <h2>Contact Us</h2>
          <form className="form" onSubmit={(e) => Submit(e)}>
            <label htmlFor="Name" className="required">
              Full Name
            </label>
            <input type="text" id="Name" name="Name" required />

            <label htmlFor="Company" className="required">
              Company Name
            </label>
            <input type="text" id="Company" name="Company" required />

            <label htmlFor="Email" className="required">
              Email
            </label>
            <input type="email" id="Email" name="Email" required />

            <label htmlFor="Subject" className="required">
              Subject
            </label>
            <input type="text" id="Subject" name="Subject" required />

            <label htmlFor="Message" className="required">
              Message
            </label>
            <textarea id="Message"  name="Message" rows="4"></textarea>

            <button type="submit" disabled={isSubmitted}>Send Message</button>
            {isSubmitted && ( // Conditionally render success message
              <p className="success-message">Thank you for your message!</p>
            )}

          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
