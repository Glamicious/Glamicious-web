import Doll from "./Doll";

export default function AppCta() {
  return (
    <section id="app" className="container app-section">
      <div className="app-banner">
        <div className="app-banner__intro">
          <span className="app-banner__doll">
            <Doll size={84} uid="app" />
          </span>
          <div>
            <h2 className="app-banner__title">Your glow-up, in your pocket</h2>
            <p className="app-banner__sub">
              Book, reschedule and save favourites in the Glamicious app.
            </p>
          </div>
        </div>
        <div className="app-banner__stores">
          <a href="#" className="store-badge">
            <span className="store-badge__hint">Download on the</span>
            <span className="store-badge__name">App Store</span>
          </a>
          <a href="#" className="store-badge">
            <span className="store-badge__hint">Get it on</span>
            <span className="store-badge__name">Google Play</span>
          </a>
        </div>
      </div>
    </section>
  );
}
