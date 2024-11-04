// Section2.js
import React from 'react';
import './Section2.css'; // Import CSS for styling
import CircleShape from '../../assets/circlershape.svg';
import CircleFlow from '../../assets/circlerflow.svg';

const Section2 = () => {
    return (
        <div className="section2-container">
            {/* First section: Heading and Paragraph */}
            <div className="section2-item section-heading">
                <h1>CRM & ERP  Optimization For All.</h1>
                <p>
                Supercharge your core business functions to achieve greater efficiency and productivity.                </p>
            </div>

            {/* Second section: SVG */}
            <div className="section2-item section-svg">
            <img src={CircleShape} alt="Circle Shape" className="responsive-svg" />
            </div>

            {/* Third section: Text that spans two sections */}
            <div className="section2-item section-text">
            <div>
      <p className="combined-text">   


        <span className="bold-text">Automate repetitive</span>
        <img src={CircleFlow} alt="Flow." className="inline-svg" />
        <span className="bold-text">tasks like </span>
        <span className="regular-text">data entry, Email follow-ups, Customer query, generating sales reports and Order processing and fulfillment.</span>
      </p>
    </div>
            </div>
        </div>
    );
}

export default Section2;
