import { BrowsIcon, FacialIcon, HairIcon, LashIcon, NailIcon, SpaIcon } from "./icons";

const LILAC = "#5B21B6";
const PINK = "#9D174D";

const TREATMENTS = [
  { label: "Lashes", icon: <LashIcon stroke={LILAC} />, tone: "lilac" },
  { label: "Nails", icon: <NailIcon stroke={PINK} />, tone: "pink" },
  { label: "Hair", icon: <HairIcon stroke={LILAC} />, tone: "lilac" },
  { label: "Facial", icon: <FacialIcon stroke={PINK} />, tone: "pink" },
  { label: "Spa & massage", icon: <SpaIcon stroke={LILAC} />, tone: "lilac" },
  { label: "Brows", icon: <BrowsIcon stroke={PINK} />, tone: "pink" },
];

export default function Treatments() {
  return (
    <section id="treatments" className="container section">
      <div className="section__head">
        <h2 className="section__title">Browse by treatment</h2>
        <a href="#" className="section__link">
          See all treatments
        </a>
      </div>
      <div className="treatments-grid">
        {TREATMENTS.map((t) => (
          <a key={t.label} href="#" className={`treatment-card treatment-card--${t.tone}`}>
            {t.icon}
            {t.label}
          </a>
        ))}
      </div>
    </section>
  );
}
