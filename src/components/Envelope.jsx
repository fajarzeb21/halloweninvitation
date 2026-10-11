import { useState } from "react";
import {
  FaGhost,
  FaMoon,
  FaEnvelopeOpenText,
} from "react-icons/fa";


function Envelope({ onOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;

    setIsOpen(true);

    // Show the complete invitation after the envelope animation.
    setTimeout(() => {
      if (onOpen) {
        onOpen();
      }
    }, 1200);
  };

  return (
    <section className="envelope-screen">
      <FaMoon className="envelope-moon" />

      <FaGhost className="ghost ghost-one" />
      <FaGhost className="ghost ghost-two" />

      <p className="eyebrow">
        A LITTLE MAGIC. A LITTLE MYSTERY.
      </p>

      <h1 className="envelope-title">
        Something
        <span> spooky </span>
        is waiting for you.
      </h1>

      <p className="envelope-description">
        A mysterious invitation has arrived.
        <br />
        Dare to open it?
      </p>

      <button
        className={`envelope-button ${isOpen ? "opened" : ""}`}
        onClick={handleOpen}
        disabled={isOpen}
        aria-label="Open Halloween invitation"
        aria-expanded={isOpen}
      >
        <div className="envelope">
          <div className="letter">
            <FaEnvelopeOpenText />

            <span>YOU'RE INVITED</span>

            <div className="letter-decoration">
              ✦ &nbsp; 🎃 &nbsp; ✦
            </div>

            <small>A SPOOKY NIGHT AWAITS</small>
          </div>

          <div className="envelope-back"></div>

          <div className="envelope-flap"></div>

          <div className="envelope-front"></div>

          <div className="envelope-seal">✦</div>
        </div>
      </button>

      <p className="tap-hint">
        ✧ Click the envelope to reveal your invitation ✧
      </p>

      <div className="envelope-pumpkins">
        <span>🎃</span>
        <span>🕯️</span>
        <span>🎃</span>
      </div>
    </section>
  );
}

export default Envelope;

