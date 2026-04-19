import React, { useState, useEffect } from 'react';
import './IntroPage.css';

const IntroPage = ({ onNext }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Sequential animations
    // step 1: show gif
    // step 2: show intro message
    // step 3: show main text
    // step 4: show button
    // step 5: show footer
    const timers = [
      setTimeout(() => setStep(1), 300),
      setTimeout(() => setStep(2), 1500),
      setTimeout(() => setStep(3), 3200),
      setTimeout(() => setStep(4), 4500),
      setTimeout(() => setStep(5), 5500)
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const handleStart = () => {
    if (onNext) {
      onNext();
    }
  };

  return (
    <div className="intro-wrapper">
      <div className="mobile-container">
        <div className="intro-content">
          <img
            src="/gifs/intro.gif"
            alt="Romantic intro"
            className={`intro-gif ${step >= 1 ? 'visible' : ''}`}
          />

          <h1 className={`intro-text-main ${step >= 3 ? 'visible' : ''}`}>
            <p>mujhe tumse ek important baat kehni hai...</p>
            <p>lekin pehle ek smile toh dedo 😊</p>
          </h1>

          <button
            className={`intro-button ${step >= 4 ? 'visible' : ''}`}
            onClick={handleStart}
          >
            start
          </button>
        </div>

        <div className="footer-container">
          <footer className={`intro-footer ${step >= 5 ? 'visible' : ''}`}>
            Made with ❤️ by Neech Adami
          </footer>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
