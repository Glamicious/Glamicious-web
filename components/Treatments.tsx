import { BrowsIcon, FacialIcon, HairIcon, LashIcon, NailIcon, SpaIcon } from "./icons";
import type { Dictionary } from "@/lib/dictionaries";

const LILAC = "#5B21B6";
const PINK = "#9D174D";

const ICONS = [
  { icon: <LashIcon stroke={LILAC} />, tone: "lilac" },
  { icon: <NailIcon stroke={PINK} />, tone: "pink" },
  { icon: <HairIcon stroke={LILAC} />, tone: "lilac" },
  { icon: <FacialIcon stroke={PINK} />, tone: "pink" },
  { icon: <SpaIcon stroke={LILAC} />, tone: "lilac" },
  { icon: <BrowsIcon stroke={PINK} />, tone: "pink" },
];

export default function Treatments({ t }: { t: Dictionary["treatments"] }) {
  return (
    <section id="treatments" className="container section">
      <div className="section__head">
        <h2 className="section__title">{t.title}</h2>
        <a href="#" className="section__link">
          {t.link}
        </a>
      </div>
      <div className="treatments-grid">
        {t.items.map((label, i) => (
          <a key={label} href="#" className={`treatment-card treatment-card--${ICONS[i].tone}`}>
            {ICONS[i].icon}
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}
