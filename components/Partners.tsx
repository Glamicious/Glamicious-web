import { CheckIcon } from "./icons";

const BENEFITS = [
  "Take bookings 24/7, even while you’re busy with a client",
  "Manage every specialist’s calendar in one place",
  "Join campaigns like Black Friday to reach more guests",
];

const SLOTS = [
  { time: "10:00", desc: "Classic lash", artist: "Nok", status: "Booked" },
  { time: "11:30", desc: "Brow lamination", artist: "Ploy", status: "Booked" },
  { time: "14:30", desc: "Lash lift & tint", artist: "Nok", status: "New" },
];

export default function Partners() {
  return (
    <section id="partners" className="container partners">
      <div className="partners__copy">
        <p className="partners__eyebrow">FOR SALON OWNERS</p>
        <h2 className="partners__title">Fill your chairs with new guests</h2>
        <ul className="partners__list">
          {BENEFITS.map((b) => (
            <li key={b}>
              <CheckIcon />
              {b}
            </li>
          ))}
        </ul>
        <a href="#" className="btn-dark">
          Become a partner
        </a>
      </div>

      <div className="partners__panel">
        <p className="partners__panel-title">Today at Lilac Lash Studio</p>
        {SLOTS.map((s) => (
          <div key={s.time} className="slot">
            <span className="slot__time">{s.time}</span>
            <span className="slot__desc">
              {s.desc} · <span>{s.artist}</span>
            </span>
            <span className={`slot__status${s.status === "New" ? " slot__status--new" : ""}`}>
              {s.status}
            </span>
          </div>
        ))}
        <div className="slot slot--open">
          <span className="slot__time">16:00</span>
          <span className="slot__desc">Open slot</span>
        </div>
      </div>
    </section>
  );
}
