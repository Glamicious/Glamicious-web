import type { Dictionary } from "@/lib/dictionaries";

export default function Footer({ t }: { t: Dictionary["footer"] }) {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__cols">
          <div className="site-footer__brand">
            <span className="site-footer__brand-name">Glamicious</span>
            <p className="site-footer__tagline">{t.tagline}</p>
          </div>
          {t.cols.map((col) => (
            <nav key={col.title} aria-label={col.title} className="site-footer__col">
              <span className="site-footer__col-title">{col.title}</span>
              {col.links.map((l) => (
                <a key={l} href="#">
                  {l}
                </a>
              ))}
            </nav>
          ))}
        </div>
        <div className="site-footer__legal">
          <span>{t.copyright}</span>
          <span className="site-footer__legal-links">
            <a href="#">{t.privacy}</a>
            <a href="#">{t.terms}</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
