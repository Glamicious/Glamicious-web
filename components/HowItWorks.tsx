import type { Dictionary } from "@/lib/dictionaries";

export default function HowItWorks({ t }: { t: Dictionary["how"] }) {
  return (
    <section className="how">
      <div className="container how__inner">
        <h2 className="how__title">{t.title}</h2>
        <div className="how__grid">
          {t.steps.map((s) => (
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
