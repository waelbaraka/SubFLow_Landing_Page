import React from 'react';
import './Footer.css';
// import linkedin from '../../assets/linkedin.svg';
// import facebook from '../../assets/facebook.svg';

const Footer = () => {
  return (
    <footer className="footer">
       <div class="contact-info">
        <p>Contact: contacts@subflow.tech</p>
        <p>Address: Dubai, UAE</p>
      </div>

      {/* <div className="social-media-links">
        <ul>
          <li>
            <a href="https://www.linkedin.com/company/subflowtech" aria-label="linkedin" target="_blank">
            <img src={linkedin} className="icon glow" alt="Icon" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/people/Subflowtech/61567283813874/" aria-label="facebook" target="_blank" >
            <img src={facebook} className="icon glow" alt="Icon" />
            </a>
          </li>
        </ul>
      </div> */}

     
    </footer>
  );
};

export default Footer;
