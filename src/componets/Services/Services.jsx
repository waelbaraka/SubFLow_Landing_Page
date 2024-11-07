import React from 'react';
import './Services.css';
import Seliver from '../../assets/conesilver.svg'; // Make sure to replace with the actual image path
import Blue from '../../assets/coneblue.svg'; // Make sure to replace with the actual image path
import Gold from '../../assets/conegold.svg'; // Make sure to replace with the actual image path

const Services = () => {
  return (
    <div className="wrapper">
    <div className="panel">
        <div className="panel-content">
          <div className="panel-image" style={{ backgroundImage: `url(${Seliver})` }}></div>
          <div className="content-wrapper">
            <h3>AI Process Automation</h3>
            <p>
              Streamline and scale decision-making across organizations.
              Intelligent automation simplifies complex tasks,
              frees up valuable resources, and significantly improves operational efficiency.
            </p>
          </div>
          <div className="slide">
            <h4>Key Features</h4>
            <ul>
              <li><i className="fa fa-check"></i>Seamless Process Integration</li>
              <li><i className="fa fa-check"></i>Intelligent Task Automation</li>
              <li><i className="fa fa-check"></i>Efficient Document Automation</li>
              <li><i className="fa fa-check"></i>Reliable Data Capture and Validation</li>
              <li><i className="fa fa-check"></i>Data-Driven Decision Making</li>
              <li><i className="fa fa-check"></i>Automation AI Assistants</li>
            </ul>
          </div>
        </div>
      </div> 
{/*           */}
    <div className="panel">
        <div className="panel-content">
          <div className="panel-image" style={{ backgroundImage: `url(${Blue})` }}></div>
          <div className="content-wrapper">
          <h3>AI-Powered Product Development</h3>
          <p>We'll help you all the way - from product designs to integrating
             cutting-edge machine learning models and software development.
             Your Vision, Our Expertise.
          </p>
          </div>
          <div className="slide">
            <h4>Key Features</h4>
            <ul>
            <li><i className="fa fa-check"></i>Fine Tuning LLM</li>
            <li><i className="fa fa-check"></i>Natural Language Processing</li>
            <li><i className="fa fa-check"></i>Computer Vision</li>
            <li><i className="fa fa-check"></i>Data Science and Analytics</li>
            <li><i className="fa fa-check"></i>Product Design and Development</li>
            <li><i className="fa fa-check"></i>MVP Development</li>
            <li><i className="fa fa-check"></i>Deployment and Maintenance</li>
            <li><i className="fa fa-check"></i>Scalability</li>
            <li><i className="fa fa-check"></i>Security and Privacy</li>
            </ul>
          </div>
        </div>
      </div>
{/*  */}
<div className="panel">
        <div className="panel-content">
          <div className="panel-image" style={{ backgroundImage: `url(${Gold})` }}></div>
          <div className="content-wrapper">
          <h3>Internal AI-Powered Tools Development</h3>
          <p>Create intelligent tools tailored to your specific needs. Our team will design and develop
             AI-powered solutions to automate tasks, enhance decision-making, and boost productivity.
          </p>
          </div>
          <div className="slide">
            <h4>Key Features</h4>
            <ul>
            <li><i className="fa fa-check"></i>AI Strategy and Planning</li>
            <li><i className="fa fa-check"></i>Custom AI Tool Development</li>
            <li><i className="fa fa-check"></i>Integration with Existing Systems</li>
            <li><i className="fa fa-check"></i>Continuous Improvement</li>
            <li><i className="fa fa-check"></i>Data Engineering</li>
            <li><i className="fa fa-check"></i>Predictive Analytics and Forecasting</li>
            <li><i className="fa fa-check"></i>Real-Time Data Processing</li>
            </ul>
          </div>
        </div>
      </div>

   </div>
  );
};

export default Services
;