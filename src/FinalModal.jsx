import React, { useState, useRef, useEffect } from 'react';
import './DecisionModal.css';

const FinalModal = ({ onAccept }) => {
  const [escapeStyle, setEscapeStyle] = useState({});
  const containerRef = useRef(null);

  const moveButton = () => {
    if (!containerRef.current) return;

    // Get dimensions of the modal content area to keep the button inside
    const containerRect = containerRef.current.getBoundingClientRect();
    const btnWidth = 120; // approximate width of btn
    const btnHeight = 40; // approximate height of btn

    // Calculate maximum safe positions
    const maxX = containerRect.width - btnWidth - 40; // subtract padding
    const maxY = containerRect.height - btnHeight - 40; // subtract padding

    // Random new coordinates
    const randomX = Math.max(10, Math.floor(Math.random() * maxX));
    const randomY = Math.max(10, Math.floor(Math.random() * maxY));

    setEscapeStyle({
      position: 'absolute',
      left: `${randomX}px`,
      top: `${randomY}px`,
      transition: 'left 0.2s ease, top 0.2s ease', // swift move
      zIndex: 10
    });
  };

  return (
    <div className="modal-overlay">
      <div
        className="modal-content"
        ref={containerRef}
        style={{ position: 'relative', minHeight: '350px' }} // enforce space for runaway
      >
        <h2 className="modal-heading">👉 maangyi kya</h2>

        <div className="modal-buttons" style={{ position: 'relative', height: '100%' }}>
          <button className="btn-accept" onClick={onAccept}>haaa</button>
          <button className="btn-accept" onClick={onAccept}>mera bacha hai tu</button>

          <div className="reject-container" style={{ marginTop: '20px' }}>
            <button
              className="btn-reject"
              style={{ ...escapeStyle, backgroundColor: '#fcfcfc' }}
              onMouseEnter={moveButton}
              onTouchStart={moveButton}
              onClick={moveButton} // just in case they manage to click it
            >
              jaa ba saale
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalModal;
