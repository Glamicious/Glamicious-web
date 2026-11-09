"use client";

import { useState } from "react";
import Doll from "./Doll";

const NAV_LINKS = [
  { href: "#treatments", label: "Treatments" },
  { href: "#salons", label: "Salons" },
  { href: "#deals", label: "Deals" },
  { href: "#partners", label: "For salons" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header__bar">
        <a href="#" className="site-header__logo" aria-label="Glamicious home">
          <span className="site-header__logo-mark">
            <Doll size={46} uid="header" />
          </span>
          <span className="site-header__logo-text">Glamicious</span>
        </a>

        <nav aria-label="Main" className="site-header__nav">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions site-header__desktop-only">
          <a href="#" lang="my" className="lang-pill">
            မြန်မာ
          </a>
          <a href="#" className="btn-ghost">
            Log in
          </a>
          <a href="#app" className="btn-primary">
            Get the app
          </a>
        </div>

        <button
          type="button"
          className="site-header__burger"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      <div id="mobile-menu" className={`site-header__menu${open ? " is-open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} className="menu-link" onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <div className="site-header__menu-actions">
          <a href="#" lang="my" className="lang-pill">
            မြန်မာ
          </a>
          <a href="#" className="btn-ghost">
            Log in
          </a>
          <a href="#app" className="btn-primary" onClick={() => setOpen(false)}>
            Get the app
          </a>
        </div>
      </div>
    </header>
  );
}
