import React, { useState, useEffect } from 'react';
import './SorryPage.css'; // Reusing base CSS structure for consistency
import DecisionModal2 from './DecisionModal2';

const MeantToBePage = ({ onAccept, onReject }) => {
  const [step, setStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Sequential fade-ins for emotional pacing
    const timers = [
      setTimeout(() => setStep(1), 500),  // heading
      setTimeout(() => setStep(2), 2500), // line 1
      setTimeout(() => setStep(3), 4000), // line 2
      setTimeout(() => setStep(4), 5500), // line 3
      setTimeout(() => setStep(5), 7000), // gif
      setTimeout(() => setStep(6), 8500), // button
      setTimeout(() => setStep(7), 9200), // footer
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="sorry-wrapper">
      <div className="mobile-container">
        <div className="sorry-content">
          <h2 className={`sorry-heading visible`} style={{ fontSize: '1.5rem', opacity: step >= 1 ? 1 : 0, transition: 'opacity 1.5s' }}>
            main seedha bolta hoon…
          </h2>

          <div className="sorry-message" style={{ marginBottom: '20px' }}>

            <p className={`message-line ${step >= 2 ? 'visible' : ''}`}>
              tum meri life ka sabse special part ho, tum sirf important nahi ho…
            </p>

            <p className={`message-line ${step >= 3 ? 'visible' : ''}`}>
              tum woh ho jisse baat karke sab kuch halka aur theek lagne lagta hai
              tumhari smile… tumhari baatein…
              they genuinely make my day better
            </p>

            <p className={`message-line ${step >= 4 ? 'visible' : ''}`}>
              aur shayad main hamesha express nahi kar pata…
              par tum mere liye bohot matter karti ho
              main bas yeh chahta hoon ki tum kabhi mere wajah se hurt ya pareshan feel na karo
            </p>

            <p className={`message-line ${step >= 5 ? 'visible' : ''}`}>
              main perfect nahi hoon…
              par tumhare liye better banna chahta hoon
              aur main yeh ensure karunga ki tumhe hamesha feel ho…
            </p>

            <p className={`message-line ${step >= 6 ? 'visible' : ''}`}>
              ki tum important ho… aur safe ho… mere saath 💖
            </p>

          </div>

          <img
            src="/assets/emotional.gif"
            alt="Emotional reflection"
            className={`sorry-gif ${step >= 5 ? 'visible' : ''}`}
            onError={(e) => { e.target.src = '/gifs/2.gif' }} // Fallback if missing
          />

          <button
            className={`sorry-button ${step >= 6 ? 'visible' : ''}`}
            onClick={() => setIsModalOpen(true)}
          >
            ek aur chance?
          </button>
        </div>

        <div className="footer-container">
          <footer className={`intro-footer ${step >= 7 ? 'visible' : ''}`}>
            Made with ❤️ by Neech Adami
          </footer>
        </div>
      </div>

      {isModalOpen && <DecisionModal2 onAccept={onAccept} onReject={onReject} />}
    </div>
  );
};

export default MeantToBePage;
