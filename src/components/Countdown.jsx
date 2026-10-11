import { useState, useEffect } from "react";
import invitationData from "../data/InvitationData";

function getTargetTime() {
  const { date, time, timeZone } = invitationData;

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23"
  });

  const offsetAt = (timestamp) => {
    const parts = Object.fromEntries(
      formatter
        .formatToParts(new Date(timestamp))
        .filter((part) => part.type !== "literal")
        .map((part) => [
          part.type,
          Number(part.value)
        ])
    );

    const localTime = Date.UTC(
      parts.year,
      parts.month - 1,
      parts.day,
      parts.hour,
      parts.minute,
      parts.second
    );

    return localTime - Math.floor(timestamp / 1000) * 1000;
  };

  const desired = Date.parse(`${date}T${time}:00Z`);

  let timestamp = desired - offsetAt(desired);
  timestamp = desired - offsetAt(timestamp);

  return timestamp;
}

function Countdown() {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const difference = Math.max(
    0,
    getTargetTime() - now
  );

  const values = [
    {
      label: "Days",
      value: Math.floor(difference / 86400000)
    },
    {
      label: "Hours",
      value: Math.floor(
        (difference / 3600000) % 24
      )
    },
    {
      label: "Minutes",
      value: Math.floor(
        (difference / 60000) % 60
      )
    },
    {
      label: "Seconds",
      value: Math.floor(
        (difference / 1000) % 60
      )
    }
  ];

  return (
    <section className="countdown-section">
      <p className="eyebrow">
        THE NIGHT IS GETTING CLOSER
      </p>

      <h2>
        Countdown to <em>Midnight Magic</em>
      </h2>

      {difference === 0 ? (
        <p className="countdown-finished">
          The spooky night is here! 🎃
        </p>
      ) : (
        <div className="countdown-grid">
          {values.map((item) => (
            <div
              className="countdown-box"
              key={item.label}
            >
              <strong>
                {String(item.value).padStart(2, "0")}
              </strong>

              <span>{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Countdown;