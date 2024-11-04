  import React, { useState } from 'react';
  import './GuideNav.css';
  import Silver_star from '../../assets/silver_star.svg';
  import gold_star from '../../assets/gold_star.svg';
  
  const GuideNav = () => {
    const cardContents = {
        customerSupport: {
          card1: 'AI-powered chatbots handle initial customer interactions on websites, whatsapp, and other social media answer frequently asked questions, guide users through troubleshooting processes, and escalate issues to human agents when necessary.',
          card2: 'Ai Virtual Voice Assistants can handle customer inquiries 24/7, can automate routine tasks such as order tracking, appointment scheduling, and password resets,.',
          card3: 'improve customer satisfaction, reduce response times, and enhance overall operational efficiency.freeing up agents to focus on more complex issues.',
        },
        predictiveAnalytics: {
          card1: 'Our Al-powered sentiment analysis digs deep into your customers online conversations, revealing their true emotions and opinions.Know what they love, what they hate, and why they tick.',
          card2: 'Understand customer satisfaction, identify brand sentiment, and track public opinion in real-time.',
          card3: 'Reclaim time to focus on innovation, customer relationships, and business development.',
        },
        leadQualification: {
          card1: 'Our AI assistants Identifies Hot Leads Quickly pinpoints ready-to-buy prospects',
          card2: 'Delegate outreach messages like emails and social media posts.Assign lead prioritization and report generation to virtual sales assistants.',
          card3: 'Aess each rep’s sales qualification skills with virtual coaches.Improve competitive intelligence.',
        },
        coldOutreach: {
          card1: 'Our AI assistants streamline cold outreach by generate personalized messages with prospects, scrape data from the individual’s Social Media, profile, gathering key insights, identifying interest levels, find the best prospects, and send outreach at scale.',
          card2: 'automates the follow-up process, sending timely, personalized messages to keep you top-of-mind with prospects. Continuous learning: AI algorithms can continue to learn and improve based on the data collected from your cold email campaigns',
          card3: 'This approach helps your team connect with potential customers faster and focus on leads that are more likely to convert.',
        },
        hr: {
          card1: 'integrating artificial intelligence in human resources can enhance recruiting, performance reviews, employee engagement, talent development  and guides newcomers through necessary forms and policies while helping schedule initial training sessions',
          card2: 'content creation  such as job specifications, announcements, and policies, presumably Employee onboarding/offboarding processes',
          card3: 'Eases the workload of HR professionals, allowing them to focus on sourcing top talent and enhancing organizational performance.',
        },
        legal: {
          card1: 'AI automates the review and analysis of legal documents, extracting pertinent information quickly, reducing time, and minimizing human error ',
          card2: 'AI automates contract creation and management, ensuring accuracy and compliance and reducing the risk of overlooked terms.AI improve legal research efficiency by finding relevant case law and statutes.',
          card3: 'Allowing Lawyers to focus on strategic thinking, client relationships, and business development. This, in turn, can lead to increased productivity, higher revenue, and greater career satisfaction.',
        },
      };

    const buttonNames = [
        { label: "Customer Support", key: "customerSupport" },
        { label: "Predictive Analytics", key: "predictiveAnalytics" },
        { label: "Lead Qualification & Nurturing", key: "leadQualification" },
        { label: "Cold Outreach", key: "coldOutreach" },
        { label: "HR", key: "hr" },
        { label: "Legal", key: "legal" },
      ];
  
    const [activeButton, setActiveButton] = useState('customerSupport');
  
    const handleButtonClick = (contentKey) => {
      setActiveButton(contentKey);
    };
  
    return (
      <section className="guide-nav">
           <div className="button-container">
        {buttonNames.map(({ label, key }) => (
          <button
            key={key}
            onClick={() => handleButtonClick(key)}
            style={{
              backgroundColor: activeButton === key ? 'black' : 'transparent',
              color: activeButton === key ? 'white' : 'black',
            }}
          >
            {label}
          </button>
        ))}
      </div>
  
        <div className="card-container">
          <div className="card ">
          <div className="content-wrapper">
            <h1>Save hours every week</h1>
            <p>{cardContents[activeButton]?.card1}</p>
            </div>
          </div>
         
          <div className="card">
          <div className="content-wrapper">
            <h1>Streamline workflows</h1>
            <p>{cardContents[activeButton]?.card2}</p>
            </div>
            <img src={Silver_star} className="svg-icon" alt="Icon" />
          </div>
          
          <div className="card">
          <div className="content-wrapper">
            <h1>Free up time for growth</h1>
            <p>{cardContents[activeButton]?.card3}</p>
            </div>
            <img src={gold_star} className="svg-icon" alt="Icon" />
          </div>
        </div>
      </section>
    );
  };
  
  export default GuideNav;
  