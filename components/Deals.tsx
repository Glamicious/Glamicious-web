import Doll from "./Doll";

export default function Deals() {
  return (
    <section id="deals" className="container deals-section">
      <div className="deals">
        <div className="deals__copy">
          <p className="deals__badge">BLACK FRIDAY · 27–30 NOV</p>
          <h2 className="deals__title">
            Glam up to <span className="brand-script">50% off</span>
          </h2>
          <p className="deals__text">
            Lashes −30% · Nails −40% · Hair −20% · Facials −50% at participating salons. Use code{" "}
            <strong>GLAMFRIDAY</strong> at checkout.
          </p>
          <div className="deals__ctas">
            <a href="#" className="btn-light">
              Shop the deals
            </a>
            <a href="#" className="btn-outline-dark">
              Set a reminder
            </a>
          </div>
        </div>
        <div className="deals__visual">
          <span className="deals__doll">
            <Doll size={264} uid="deals" />
          </span>
        </div>
      </div>
    </section>
  );
}
