import React, { useState, useEffect } from 'react';
import './FinalPage.css';

const FinalPage = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Sequential fade-ins
    const timers = [
      setTimeout(() => setStep(1), 300), // heading
      setTimeout(() => setStep(2), 1500), // gif
      setTimeout(() => setStep(3), 3000), // message
      setTimeout(() => setStep(4), 4000), // footer
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="final-wrapper">
      <div className="mobile-container">
        <div className="final-content">
          <h1 className={`final-heading ${step >= 1 ? 'visible' : ''}`}>thank you puchki ❤️</h1>
          
          <img
            src="/gifs/thanks.gif"
            alt="Happy thanks"
            className={`final-gif ${step >= 2 ? 'visible' : ''}`}
          />
          
          <div className={`final-message ${step >= 3 ? 'visible' : ''}`}>
            <p>kabhi bhi aisa nhi hoga 🤞</p>
          </div>
        </div>

        <div className="footer-container">
          <footer className={`intro-footer ${step >= 4 ? 'visible' : ''}`}>
            Made with ❤️ by Neech Adami
          </footer>
        </div>
      </div>
    </div>
  );
};

export default FinalPage;
