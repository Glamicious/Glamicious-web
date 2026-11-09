const COLUMNS = [
  {
    title: "Explore",
    links: ["Lashes", "Nails", "Hair", "Spa & massage"],
  },
  {
    title: "Company",
    links: ["About us", "For salons", "Careers"],
  },
  {
    title: "Support",
    links: ["Help centre", "Cancellation policy", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__cols">
          <div className="site-footer__brand">
            <span className="site-footer__brand-name">Glamicious</span>
            <p className="site-footer__tagline">Beauty and wellness bookings, made glam.</p>
          </div>
          {COLUMNS.map((col) => (
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
          <span>© 2026 Glamicious</span>
          <span className="site-footer__legal-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
