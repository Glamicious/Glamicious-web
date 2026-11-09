import Image from "next/image";
import { NailIcon, SpaIcon } from "./icons";
import heroPhoto from "@/public/images/salon-hero.jpg";
import barbershopPhoto from "@/public/images/barbershop.jpg";

export default function Salons() {
  return (
    <section id="salons" className="container section salons-section">
      <div className="section__head">
        <div>
          <h2 className="section__title">Trending salons &amp; spas</h2>
          <p className="section__sub">Loved by Glamicious guests this month</p>
        </div>
        <a href="#" className="section__link">
          View all salons
        </a>
      </div>

      <div className="salons-grid">
        <a href="#" className="salon-card">
          <div className="salon-card__media">
            <Image
              src={heroPhoto}
              alt="Bright salon with styling chairs and lit mirrors"
              style={{ width: "100%", height: 240, objectFit: "cover" }}
              sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
            />
            <span className="salon-card__tag">Glam favourite</span>
          </div>
          <div className="salon-card__row">
            <span className="salon-card__name">Lilac Lash Studio</span>
            <span className="salon-card__rating">★ 4.92</span>
          </div>
          <span className="salon-card__meta">Lashes &amp; brows · Siam Square</span>
          <span className="salon-card__price">
            <strong>฿890</strong> <span>from</span>
          </span>
        </a>

        <a href="#" className="salon-card">
          <div className="salon-card__media">
            <Image
              src={barbershopPhoto}
              alt="Barbershop with leather barber chairs and arched mirrors"
              style={{ width: "100%", height: 240, objectFit: "cover" }}
              sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
            />
            <span className="salon-card__tag">921 reviews</span>
          </div>
          <div className="salon-card__row">
            <span className="salon-card__name">Burman Barbershop</span>
            <span className="salon-card__rating">★ 4.9</span>
          </div>
          <span className="salon-card__meta">Barber · 6.5 Mile, Yangon</span>
          <span className="salon-card__price">
            <strong>MMK 20,000</strong> <span>from</span>
          </span>
        </a>

        <a href="#" className="salon-card">
          <div className="salon-card__placeholder salon-card__placeholder--pink">
            <NailIcon size={64} stroke="#9D174D" strokeWidth={1.2} />
          </div>
          <div className="salon-card__row">
            <span className="salon-card__name">THE SOIL Nail &amp; Glam Studio</span>
            <span className="salon-card__pill">New</span>
          </div>
          <span className="salon-card__meta">Nail salon · Mingalar Taungnyunt, Yangon</span>
          <span className="salon-card__price">
            <strong>MMK 35,000</strong> <span>UV gel extensions</span>
          </span>
        </a>

        <a href="#" className="salon-card">
          <div className="salon-card__placeholder salon-card__placeholder--lilac">
            <SpaIcon size={64} stroke="#5B21B6" strokeWidth={1.2} />
          </div>
          <div className="salon-card__row">
            <span className="salon-card__name">St. Gregory Spa</span>
            <span className="salon-card__pill">Hotel spa</span>
          </div>
          <span className="salon-card__meta">Pan Pacific Yangon · Pabedan, Yangon</span>
          <span className="salon-card__price">
            <strong>Open daily</strong> <span>9:00–22:00</span>
          </span>
        </a>
      </div>
    </section>
  );
}
