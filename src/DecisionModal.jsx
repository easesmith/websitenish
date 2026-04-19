import React, { useState } from 'react';
import './DecisionModal.css';

const DecisionModal = ({ onAccept, onReject }) => {
  const [rejectedCount, setRejectedCount] = useState(0);

  const handleReject = () => {
    if (rejectedCount === 0) {
      setRejectedCount(prev => prev + 1);
    } else {
      if (onReject) onReject();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-heading">👉 maangyi kya</h2>
        
        <div className="modal-buttons">
          <button className="btn-accept" onClick={onAccept}>yes</button>
          <button className="btn-accept" onClick={onAccept}>bilkul</button>
          
          <div className="reject-container">
            <button 
              className={`btn-reject ${rejectedCount > 0 ? 'shake-anim' : ''}`} 
              onClick={handleReject}
              key={rejectedCount} // Forces re-animation on each click
            >
              naaah
            </button>
            {rejectedCount > 0 && (
              <span className="reject-plea fade-in">soch lo na 😔</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecisionModal;
