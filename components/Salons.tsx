import Image from "next/image";
import { NailIcon, SpaIcon } from "./icons";
import heroPhoto from "@/public/images/salon-hero.jpg";
import barbershopPhoto from "@/public/images/barbershop.jpg";
import type { Dictionary } from "@/lib/dictionaries";

const PHOTOS = { salon: heroPhoto, barbershop: barbershopPhoto };

export default function Salons({ t }: { t: Dictionary["salons"] }) {
  return (
    <section id="salons" className="container section salons-section">
      <div className="section__head">
        <div>
          <h2 className="section__title">{t.title}</h2>
          <p className="section__sub">{t.sub}</p>
        </div>
        <a href="#" className="section__link">
          {t.link}
        </a>
      </div>

      <div className="salons-grid">
        {t.cards.map((card) => (
          <a key={card.name} href="#" className="salon-card">
            {card.image ? (
              <div className="salon-card__media">
                <Image
                  src={PHOTOS[card.image]}
                  alt={card.alt ?? card.name}
                  style={{ width: "100%", height: 240, objectFit: "cover" }}
                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                />
                {card.tag && <span className="salon-card__tag">{card.tag}</span>}
              </div>
            ) : (
              <div
                className={`salon-card__placeholder salon-card__placeholder--${
                  card.placeholder === "nail" ? "pink" : "lilac"
                }`}
              >
                {card.placeholder === "nail" ? (
                  <NailIcon size={64} stroke="#9D174D" strokeWidth={1.2} />
                ) : (
                  <SpaIcon size={64} stroke="#5B21B6" strokeWidth={1.2} />
                )}
              </div>
            )}
            <div className="salon-card__row">
              <span className="salon-card__name">{card.name}</span>
              {card.rating ? (
                <span className="salon-card__rating">{card.rating}</span>
              ) : (
                <span className="salon-card__pill">{card.pill}</span>
              )}
            </div>
            <span className="salon-card__meta">{card.meta}</span>
            <span className="salon-card__price">
              <strong>{card.priceStrong}</strong> <span>{card.priceMuted}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
