import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaMask,
  FaMapMarkedAlt
} from "react-icons/fa";

import invitationData from "../data/InvitationData";

function PartyDetails() {
  const date = new Date(
    `${invitationData.date}T12:00:00`
  ).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  const time = new Date(
    `2000-01-01T${invitationData.time}:00`
  ).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit"
  });

  const details = [
    {
      icon: <FaCalendarAlt />,
      title: "When",
      text: date
    },
    {
      icon: <FaClock />,
      title: "Time",
      text: time,
      extra: invitationData.timeZoneLabel
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Where",
      text: invitationData.venue,
      extra: invitationData.address
    },
    {
      icon: <FaMask />,
      title: "Dress Code",
      text: invitationData.dressCode
    }
  ];

  return (
    <section className="details-section">
      <p className="eyebrow">SAVE THE DATE</p>

      <h2>
        The <em>Spooky</em> Details
      </h2>

      <p className="details-intro">
        One magical evening. A thousand memories.
      </p>

      <div className="details-grid">
        {details.map((detail) => (
          <article
            className="detail-card"
            key={detail.title}
          >
            <div className="detail-icon">
              {detail.icon}
            </div>

            <h3>{detail.title}</h3>

            <p>{detail.text}</p>

            {detail.extra && (
              <small>{detail.extra}</small>
            )}
          </article>
        ))}
      </div>

      <a
        href={invitationData.mapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="primary-button"
      >
        <FaMapMarkedAlt />
        Get Directions
      </a>
    </section>
  );
}

export default PartyDetails;