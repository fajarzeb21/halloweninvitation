import {
  FaGhost,
  FaWhatsapp
} from "react-icons/fa";

import invitationData from "../data/invitationData";

function Footer() {
  const shareInvitation = () => {
    const message =
      `🎃 You're invited to ${invitationData.title}!\n` +
      `${invitationData.date} at ${invitationData.time}\n` +
      `${invitationData.venue}\n` +
      `Join us: ${window.location.href}`;

    const url =
      `https://wa.me/?text=${encodeURIComponent(message)}`;

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <footer className="footer">
      <FaGhost className="footer-ghost" />

      <p className="eyebrow">
        UNTIL THE WITCHING HOUR
      </p>

      <h2>
        We can't wait to <em>spook</em> you!
      </h2>

      <p>{invitationData.closingMessage}</p>

      <button
        className="share-button"
        onClick={shareInvitation}
      >
        <FaWhatsapp />
        Share the Invitation
      </button>

      <div className="footer-bottom">
        ✦ Made with a little magic and a lot of spooky love ✦
      </div>
    </footer>
  );
}

export default Footer;