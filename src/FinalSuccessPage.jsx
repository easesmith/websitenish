import React, { useState, useEffect } from 'react';
import './FinalPage.css'; // Reusing FinalPage CSS

const FinalSuccessPage = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 500), // heading
      setTimeout(() => setStep(2), 2000), // gif
      setTimeout(() => setStep(3), 3500), // sub-message
      setTimeout(() => setStep(4), 4500), // footer
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="final-wrapper">
      <div className="mobile-container">
        <div className="final-content">
          <h1 className={`final-heading ${step >= 1 ? 'visible' : ''}`} style={{ fontSize: '2.5rem' }}>
            thank you puchki ❤️
          </h1>

          <img
            src="/gifs/thanks.gif"
            alt="Relieved thanks"
            className={`final-gif ${step >= 2 ? 'visible' : ''}`}
          />

          <div className={`final-message ${step >= 3 ? 'visible' : ''}`} style={{ marginTop: '20px', color: '#B42C3F' }}>
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

export default FinalSuccessPage;
