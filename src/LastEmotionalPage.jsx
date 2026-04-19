import React, { useState, useEffect } from "react";
import "./SorryPage.css"; // Reusing base CSS structure
import FinalModal from "./FinalModal";

const LastEmotionalPage = ({ onAccept }) => {
  const [step, setStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Sequential fade-ins
    const timers = [
      setTimeout(() => setStep(1), 500), // line 1
      setTimeout(() => setStep(2), 2500), // line 2
      setTimeout(() => setStep(3), 4500), // line 3
      setTimeout(() => setStep(4), 6000), // gif
      setTimeout(() => setStep(5), 7500), // video & caption
      setTimeout(() => setStep(6), 9000), // button
      setTimeout(() => setStep(7), 9500), // footer
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="sorry-wrapper">
      <div
        className="mobile-container"
        style={{ justifyContent: "flex-start" }}
      >
        <div className="sorry-content" style={{ marginTop: "20px" }}>
          <div
            className="sorry-message"
            style={{ marginBottom: "25px", textAlign: "center" }}
          >
            <p className={`message-line ${step >= 1 ? "visible" : ""}`}>
              shayad main perfect nahi hu...
            </p>
            <p className={`message-line ${step >= 2 ? "visible" : ""}`}>
              par jo feel karta hu woh sach hai...
            </p>
            <p className={`message-line ${step >= 3 ? "visible" : ""}`}>
              Phir kabhi bhi aisa nhi hoga...
            </p>
          </div>

          <img
            src="public/gifs/final.gif"
            alt="Soft emotion"
            className={`sorry-gif ${step >= 4 ? "visible" : ""}`}
            style={{ marginBottom: "25px" }}
            onError={(e) => {
              e.target.src = "/gifs/2.gif";
            }} // Fallback if missing
          />

          <div
            className={`video-container ${step >= 5 ? "visible" : ""}`}
            style={{
              opacity: step >= 5 ? 1 : 0,
              transform: step >= 5 ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 1.5s ease-out, transform 1.5s ease-out",
              marginBottom: "35px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              maxWidth: "300px",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "177.77%", // 9:16 ratio
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 15px rgba(210, 0, 26, 0.15)",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/jrT4RwNbHVk"
                title="Apology Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>

            <span
              style={{
                color: "#c93b4d",
                fontSize: "0.9rem",
                fontStyle: "italic",
                opacity: 0.8,
                marginTop: "10px",
              }}
            >
              20 pushups sirf tumhare liye... sorry 💖
            </span>
          </div>

          <button
            className={`sorry-button ${step >= 6 ? "visible" : ""}`}
            onClick={() => setIsModalOpen(true)}
          >
            last time puchu?
          </button>
        </div>

        <div
          className="footer-container"
          style={{
            position: "relative",
            marginTop: "auto",
            paddingTop: "20px",
            paddingBottom: "25px",
          }}
        >
          <footer className={`intro-footer ${step >= 7 ? "visible" : ""}`}>
            Made with ❤️ by Neech Adami
          </footer>
        </div>
      </div>

      {isModalOpen && <FinalModal onAccept={onAccept} />}
    </div>
  );
};

export default LastEmotionalPage;
