import Image from "next/image";
import Doll from "./Doll";
import { CalendarIcon, SearchIcon } from "./icons";
import heroPhoto from "@/public/images/salon-hero.jpg";
import type { Dictionary } from "@/lib/dictionaries";

export default function Hero({ t }: { t: Dictionary["hero"] }) {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow">{t.eyebrow}</p>
          <h1 className="hero__title">
            {t.titlePre}
            <span className={`hero__title-accent${t.accentScript ? " brand-script" : ""}`}>
              {t.titleAccent}
            </span>
            {t.titlePost}
          </h1>
          <p className="hero__sub">{t.sub}</p>

          <form role="search" className="search">
            <label className="search__field">
              <span className="search__label">{t.search.treatmentLabel}</span>
              <input type="text" placeholder={t.search.treatmentPlaceholder} />
            </label>
            <label className="search__field">
              <span className="search__label">{t.search.whereLabel}</span>
              <input type="text" placeholder={t.search.wherePlaceholder} />
            </label>
            <label className="search__field">
              <span className="search__label">{t.search.whenLabel}</span>
              <input type="text" placeholder={t.search.whenPlaceholder} />
            </label>
            <button type="submit" className="search__submit" aria-label={t.search.submit}>
              <SearchIcon />
              <span className="search__submit-text">{t.search.submit}</span>
            </button>
          </form>

          <div className="hero__popular">
            <span className="hero__popular-label">{t.popularLabel}</span>
            {t.popular.map((p) => (
              <a key={p} href="#" className="chip">
                {p}
              </a>
            ))}
          </div>
        </div>

        <div className="hero__visual">
          <Image
            src={heroPhoto}
            alt={t.photoAlt}
            className="hero__photo"
            priority
            sizes="(min-width: 1024px) 560px, 100vw"
          />
          <div className="hero__card">
            <span className="hero__card-icon">
              <CalendarIcon />
            </span>
            <span>
              <span className="hero__card-title">{t.cardTitle}</span>
              <span className="hero__card-sub">{t.cardSub}</span>
            </span>
          </div>
          <span className="hero__doll">
            <Doll size={92} uid="hero" />
          </span>
        </div>
      </div>
    </section>
  );
}
