import React, { useState, useEffect } from 'react';
import './SorryPage.css';
import DecisionModal from './DecisionModal';

const SorryPage = ({ onNext, onReject }) => {
  const [step, setStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Sequential fade-ins for emotional pacing
    const timers = [
      setTimeout(() => setStep(1), 500), // sorry...
      setTimeout(() => setStep(2), 2000), // gif
      setTimeout(() => setStep(3), 3500), // line 1
      setTimeout(() => setStep(4), 4800), // line 2
      setTimeout(() => setStep(5), 6200), // line 3
      setTimeout(() => setStep(6), 7500), // line 4
      setTimeout(() => setStep(7), 8800), // button
      setTimeout(() => setStep(8), 9500), // footer
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="sorry-wrapper">
      <div className="mobile-container">
        <div className="sorry-content">
          <h1 className={`sorry-heading ${step >= 1 ? 'visible' : ''}`}>sorry...</h1>

          <img
            src="/gifs/home.gif"
            alt="Sad apologizing"
            className={`sorry-gif ${step >= 2 ? 'visible' : ''}`}
          />
          <div className="sorry-message" style={{ marginBottom: '20px' }}>

            <p className={`message-line ${step >= 1 ? 'visible' : ''}`}>
              Sach bolu…
              kal jo hua na, uske baare me soch ke hi bura lag raha hai…
            </p>

            <p className={`message-line ${step >= 2 ? 'visible' : ''}`}>
              Tum baat kar rahi thi… aur maine beech me call cut kar diya.
            </p>

            <p className={`message-line ${step >= 3 ? 'visible' : ''}`}>
              Woh meri galti thi.  Puri tarah meri.
            </p>

            <p className={`message-line ${step >= 4 ? 'visible' : ''}`}>
              Us moment me shayad gussa tha… par tum us gusse se zyada important ho…
            </p>

            <p className={`message-line ${step >= 5 ? 'visible' : ''}`}>
              Aur mujhe tumhe aise feel karana bilkul nahi chahiye tha. Mujhe pata hai sirf “sorry” bolna enough nahi hota…
              par main genuinely is cheez pe kaam karunga…
            </p>

            <p className={`message-line ${step >= 6 ? 'visible' : ''}`}>
              Aage se main pehle sununga… samajhne ki koshish karunga…  react karne se pehle rukunga.  aur main tumhe aise hurt nahi karna chahta.
            </p>

            <p className={`message-line ${step >= 7 ? 'visible' : ''}`}>
              Bas itna jaanta hoon… tum mere liye bohot important ho…  aur main tumhe aise hurt nahi karna chahta.
            </p>
          </div>
          {/* <div className="sorry-message">
            <p className={`message-line ${step >= 3 ? 'visible' : ''}`}>mujhse galti ho gayi...</p>
            <p className={`message-line ${step >= 4 ? 'visible' : ''}`}>shayad maine tumhe hurt kiya...</p>
            <p className={`message-line ${step >= 5 ? 'visible' : ''}`}>par sach me tum mere liye bohot important ho...</p>
            <p className={`message-line ${step >= 6 ? 'visible' : ''}`}>main genuinely sab theek karna chahta hu</p>
          </div> */}

          <button
            className={`sorry-button ${step >= 7 ? 'visible' : ''}`}
            onClick={() => setIsModalOpen(true)}
          >
            ek baat puchu?
          </button>
        </div>

        <div className="footer-container">
          <footer className={`intro-footer ${step >= 8 ? 'visible' : ''}`}>
            Made with ❤️ by Neech Adami
          </footer>
        </div>
      </div>

      {isModalOpen && <DecisionModal onAccept={onNext} onReject={onReject} />}
    </div>
  );
};

export default SorryPage;
