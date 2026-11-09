import Doll from "./Doll";
import type { Dictionary } from "@/lib/dictionaries";

export default function AppCta({ t }: { t: Dictionary["app"] }) {
  return (
    <section id="app" className="container app-section">
      <div className="app-banner">
        <div className="app-banner__intro">
          <span className="app-banner__doll">
            <Doll size={84} uid="app" />
          </span>
          <div>
            <h2 className="app-banner__title">{t.title}</h2>
            <p className="app-banner__sub">{t.sub}</p>
          </div>
        </div>
        <div className="app-banner__stores" lang="en">
          {t.stores.map((s) => (
            <a key={s.name} href="#" className="store-badge">
              <span className="store-badge__hint">{s.hint}</span>
              <span className="store-badge__name">{s.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
