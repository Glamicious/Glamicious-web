const STEPS = [
  {
    num: 1,
    title: "Find your treatment",
    text: "Search by service, area or date and compare salons, prices and real guest reviews.",
  },
  {
    num: 2,
    title: "Pick a time & artist",
    text: "See live availability, choose your favourite specialist and book in seconds.",
  },
  {
    num: 3,
    title: "Show up & glow",
    text: "Get reminders before your visit, pay at the salon and leave a review after.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how">
      <div className="container how__inner">
        <h2 className="how__title">How Glamicious works</h2>
        <div className="how__grid">
          {STEPS.map((s) => (
            <div key={s.num} className="how-card">
              <span className="how-card__num">{s.num}</span>
              <h3 className="how-card__title">{s.title}</h3>
              <p className="how-card__text">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
