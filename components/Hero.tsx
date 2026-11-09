import Image from "next/image";
import Doll from "./Doll";
import { CalendarIcon, SearchIcon } from "./icons";
import heroPhoto from "@/public/images/salon-hero.jpg";

const POPULAR = ["Lash extensions", "Gel nails", "Hair colour", "Thai massage"];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow">SALONS · SPAS · LASH &amp; NAIL STUDIOS</p>
          <h1 className="hero__title">
            Book your <span className="brand-script">glow-up</span> in a few taps.
          </h1>
          <p className="hero__sub">
            Find top-rated beauty pros near you, see real-time availability and book instantly — no
            calls, no waiting.
          </p>

          <form role="search" className="search">
            <label className="search__field">
              <span className="search__label">Treatment</span>
              <input type="text" placeholder="Lashes, nails, facial…" />
            </label>
            <label className="search__field">
              <span className="search__label">Where</span>
              <input type="text" placeholder="Near me" />
            </label>
            <label className="search__field">
              <span className="search__label">When</span>
              <input type="text" placeholder="Any day" />
            </label>
            <button type="submit" className="search__submit" aria-label="Search">
              <SearchIcon />
              <span className="search__submit-text">Search</span>
            </button>
          </form>

          <div className="hero__popular">
            <span className="hero__popular-label">Popular:</span>
            {POPULAR.map((p) => (
              <a key={p} href="#" className="chip">
                {p}
              </a>
            ))}
          </div>
        </div>

        <div className="hero__visual">
          <Image
            src={heroPhoto}
            alt="Bright salon with styling chairs and lit mirrors"
            className="hero__photo"
            priority
            sizes="(min-width: 1024px) 560px, 100vw"
          />
          <div className="hero__card">
            <span className="hero__card-icon">
              <CalendarIcon />
            </span>
            <span>
              <span className="hero__card-title">Lilac Lash Studio · ★ 4.92</span>
              <span className="hero__card-sub">Next free slot today, 14:30</span>
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
