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
import Footer from '../Footer/Footer';


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
          })}><a className="blur-button">Case Study</a></li>

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
  


<p class="hero-paragraph">
                Automate time-consuming tasks, streamline workflows,
                 and Reclaim your focus with your own intelligent Al. 
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
    <Footer />
 

    </div>
  );
};

export default HeroSection;
