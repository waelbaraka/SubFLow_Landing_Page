import React, { useRef, useState } from 'react';
import './HeroSection.css';
import logo from '../../assets/SubFlow_Logo.svg'
import Section3 from '../Section3/Section3';
import Section2 from '../Section2/Section2';
import GuideNav from '../GuideNav/GuideNav';
import FAQ from '../FAQ/FAQ';
import Section5 from '../Section5/Section5';
import BrandsBuilding from '../BrandsBuilding/BrandsBuilding';
import ContactUs from '../ContactUs/ContactUs';
import Services from '../Services/Services';

// import stars from '../../assets/stars.svg'
// import product from '../../assets/product.svg'
// import product2 from '../../assets/product2.svg'
// import product3 from '../../assets/product3.svg'
// import product4 from '../../assets/product4.svg'
// import Btn from '../btn';

const HeroSection = () => {
  const [copied, setCopied] = useState(false);

  const guideNavRef = useRef(null);
  const servicesRef = useRef(null);
  const joinCommunityRef = useRef(null);

  const handleCopyEmail = () => {
    // Copy email to clipboard
    navigator.clipboard.writeText("contacts@subflow.tech").then(() => {
      // Show "Email Copied" message
      setCopied(true);
      // Trigger the confetti effect
      triggerConfetti();
      // Reset message after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    });
  };
  const triggerConfetti = () => {
    if (window.confetti) {
      window.confetti({
        particleCount: 100,
        spread: 50,
        origin: { y: .9,x:.9 }
      });
    }
  }

  return (
    <div>
      
    <section className="hero">
      <nav className="navbar">
        <ul className="nav-links">
          <img src={logo} alt="Your Logo" className="logo" />

          <li onClick={() => joinCommunityRef.current?.scrollIntoView({
            behavior: 'smooth'
          })}  >
            <a className="whitebackground-btn">Contact</a></li>

          <li   onClick={() => guideNavRef.current?.scrollIntoView({
            behavior: 'smooth'
          })}><a className="blur-button"  > Use Case </a></li>

          <li   onClick={() => servicesRef.current?.scrollIntoView({
            behavior: 'smooth'
          })}><a className="blur-button">Services</a></li>
        </ul>
      </nav>

      <div class="hero-content">
          <h1 class="hero-heading">
            <span>Enhance ✦ </span>
            <br/>
            <span>Productivity </span><span>using AI</span>
            <br/>
            <span>Automation Solutions.</span>
          </h1>
        </div>

        {/* <div class="card">
  <div class="card-content">
    </div>
  <div class="image-container">
    <img src={product} alt="Product 2" class="product-image" />
    <img src={product2} alt="Product 3" class="product-image2" />
    <img src={product3} alt="Product 3" class="product-image3" />
    <img src={product4} alt="Product 3" class="product-image4" />
  </div>
</div>   */}


<p class="hero-paragraph">
                Automate time-consuming tasks, streamline workflows,
                 and reclaim your focus with your own intelligent Al. 
     </p>
     <button class="copy-email-button" onClick={handleCopyEmail}
     >
    {/* <img src={stars} alt="stars Icon" className="stars-icon" /> */}
    {copied ? "EMAIL COPIED" : "COPY EMAIL"}
  </button>
    </section>


    <Section2 />
    <section ref={guideNavRef} >
    <Section3 />
    </section>
    <GuideNav />
    <FAQ />
    <section ref={servicesRef}>
    <Section5 />
    </section>
    <Services />
    <section ref={joinCommunityRef}>
    <BrandsBuilding />
    </section>
    <ContactUs />
 

    </div>
  );
};

export default HeroSection;
