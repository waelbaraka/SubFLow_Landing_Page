// FAQSection.js
import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const faqs = [
    {
      question: "What is an AI Agent?",
      answer: "An AI Agent is an app that has been trained on a specific set of data. Once set up, you can interact with the AI Agent and only get responses related to the data given. An example of this could be an employee handbook. Once trained, new employees ask a question and get a response related to the employee handbook. There are many more use cases for AI Agents than just this..",
    },
    {
      question: "Can AI be trusted to automate?",
      answer: "Automating with AI is generally safe and reliable to an extent. We always recommend that anything AI processes gets looked over by a human. The key focus of AI Automation is to handle those tedious tasks. It's worth mentioning that we have ways to make AI process very programmatically. Essentially following a script that it does not vary from. This make automating with AI reliable and consistent.",
    },
    {
      question: "What distinguish AI from automation?",
      answer: "Think of it this way: Automation is like a train following a set of tracks - it performs specific procedures based on predefined rules. AI technology, on the other hand, is more like a self-driving car. It makes its own decisions and adjusts its actions based on new data and insights. Both are crucial in a well-balanced automation strategy.",
    },
    {
      question: "How secure ai and the tool you use?",
      answer: "Absolutely. We prioritize the security of your business data. All AI and No-code tools we use follow strict data privacy and security regulations and we use open-source technology when possible. We also implement additional security measures as per your business needs.",
    },
    {
      question: "What kind of support can I expect during and after implantation?",
      answer: "We provide full support throughout the implementation process and beyond. We ensure a seamless transition to automation, and we're always available to answer any questions or resolve any issues you might encounter. We use Slack for communicating with clients.",
    },
    {
      question: "Do i need a technical knowledge to manage or use theses automated systems?",
      answer: "Not at all. Our solutions are designed to be user-friendly. We'll also provide training and support (if at all needed) to ensure you as the client feel comfortable and confident using the new systems.",
    },
    {
      question: "What  E-commerce  platforms do SubFLow's AI services work with?",
      answer: "SubFLow's AI solutions are designed to be versatile and adaptable, seamlessly integrating with a wide range of e-commerce platforms. Whether you're using Shopify, WooCommerce, custom builds on WordPress, Wix, Squarespace, or BigCommerce, our technology is capable of enhancing your e-commerce experience. Our goal is to ensure that no matter what platform your online store is built  on, you can leverage the power of AI to drive growth and improve customer satisfaction.",
    },
    {
      question: "What are the pricing options?",
      answer: "We offer various plans, including a free trial, to fit different business sizes.",
    },
  ];

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} faq={faq} />
      ))}
    </div>
  );
};

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-container">
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={toggleFAQ}>
      <div className="faq-question">{faq.question}</div>
      {isOpen && <div className="faq-answer">{faq.answer}</div>}
    </div>
    </div>
  );
};

export default FAQ;
