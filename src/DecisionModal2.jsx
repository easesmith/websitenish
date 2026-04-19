import React from 'react';
import './DecisionModal.css'; // Reusing modal CSS

const DecisionModal2 = ({ onAccept, onReject }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-heading">👉 maangyi kya</h2>
        
        <div className="modal-buttons">
          <button className="btn-accept" onClick={onAccept}>yes</button>
          <button className="btn-accept" onClick={onAccept}>mera babuuuu</button>
          
          <div className="reject-container">
            <button 
              className="btn-reject" 
              onClick={onReject}
            >
              neech ho tum
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecisionModal2;
