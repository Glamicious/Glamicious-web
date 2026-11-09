import Doll from "./Doll";
import type { Dictionary } from "@/lib/dictionaries";

export default function Deals({ t }: { t: Dictionary["deals"] }) {
  return (
    <section id="deals" className="container deals-section">
      <div className="deals">
        <div className="deals__copy">
          <p className="deals__badge">
            <span lang="en" className="deals__badge-en">
              {t.badgeEn}
            </span>
            {t.badgeRest}
          </p>
          <h2 className="deals__title">
            {t.titlePre}
            <span className="brand-script">{t.titleAccent}</span>
            {t.titlePost}
          </h2>
          <p className="deals__text">
            {t.textPre}
            <strong lang="en">{t.code}</strong>
            {t.textPost}
          </p>
          <div className="deals__ctas">
            <a href="#" className="btn-light">
              {t.ctaPrimary}
            </a>
            <a href="#" className="btn-outline-dark">
              {t.ctaSecondary}
            </a>
          </div>
        </div>
        <div className="deals__visual">
          <span className="deals__doll">
            <Doll size={264} uid="deals" />
          </span>
        </div>
      </div>
    </section>
  );
}
