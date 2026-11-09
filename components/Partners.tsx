import { CheckIcon } from "./icons";
import type { Dictionary } from "@/lib/dictionaries";

export default function Partners({ t }: { t: Dictionary["partners"] }) {
  return (
    <section id="partners" className="container partners">
      <div className="partners__copy">
        <p className="partners__eyebrow">{t.eyebrow}</p>
        <h2 className="partners__title">{t.title}</h2>
        <ul className="partners__list">
          {t.benefits.map((b) => (
            <li key={b}>
              <CheckIcon />
              {b}
            </li>
          ))}
        </ul>
        <a href="#" className="btn-dark">
          {t.cta}
        </a>
      </div>

      <div className="partners__panel">
        <p className="partners__panel-title">{t.panelTitle}</p>
        {t.slots.map((s) => (
          <div key={s.time} className={`slot${s.variant === "open" ? " slot--open" : ""}`}>
            <span className="slot__time">{s.time}</span>
            <span className="slot__desc">
              {s.desc}
              {s.artist && (
                <>
                  {" · "}
                  <span>{s.artist}</span>
                </>
              )}
            </span>
            {s.status && (
              <span className={`slot__status${s.variant === "new" ? " slot__status--new" : ""}`}>
                {s.status}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
