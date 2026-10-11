import {
  FaGhost,
  FaStar,
  FaHatWizard
} from "react-icons/fa";

import invitationData from "../data/invitationData";

function Invitation() {
  return (
    <section className="invitation-section">
      <div className="haunted-scene">
        <div className="full-moon"></div>

        <div className="haunted-mansion">
          <div className="mansion-tower tower-left"></div>

          <div className="mansion-roof"></div>

          <div className="mansion-body">
            <span></span>
            <span></span>
            <span></span>
            <div className="mansion-door"></div>
          </div>

          <div className="mansion-tower tower-right"></div>
        </div>

        <div className="haunted-tree tree-left"></div>
        <div className="haunted-tree tree-right"></div>

        <div className="scene-pumpkin pumpkin-left">
          🎃
        </div>

        <div className="scene-pumpkin pumpkin-right">
          🎃
        </div>

        <FaGhost className="scene-ghost" />
      </div>

      <div className="invitation-card">
        <p className="eyebrow">
          YOU ARE CORDIALLY INVITED TO
        </p>

        <div className="invitation-symbol">☾</div>

        <h1 className="invitation-title">
          {invitationData.title}
        </h1>

        <p className="invitation-subtitle">
          {invitationData.subtitle}
        </p>

        <div className="invitation-divider">
          <span></span>
          <FaStar />
          <span></span>
        </div>

        <p className="invitation-message">
          {invitationData.message}
        </p>

        <p className="host-label">HOSTED BY</p>

        <h2 className="host-name">
          {invitationData.hostName}
        </h2>

        <div className="invitation-icons">
          <FaGhost />
          <FaHatWizard />
          <FaGhost />
        </div>

        <p className="invitation-bottom">
          ✦ A NIGHT TO REMEMBER ✦
        </p>
      </div>
    </section>
  );
}

export default Invitation;