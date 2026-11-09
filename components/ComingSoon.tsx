"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { track } from "@vercel/analytics";
import Doll from "./Doll";

type CsLocale = "en" | "my";

const STRINGS = {
  en: {
    badge: "COMING SOON · YANGON",
    titlePre: "Book your ",
    titleAccent: "glow-up",
    titlePost: " without the back-and-forth.",
    sub: "Glamicious is a new way to find salons, spas, lash and nail studios in Yangon, see real prices and free times, and pay with your wallet. We're putting the finishing touches on it now.",
    earlyAccess: "Get early access",
    emailPlaceholder: "you@email.com",
    notify: "Notify me",
    noSpam: "One email when we launch. No spam.",
    success: "You're on the list — we'll email you at launch. ✦",
    invalidEmail: "Please enter a valid email address.",
    submitFailed: "Something went wrong — please try again.",
    card: {
      title: "Classic lash extension",
      status: "Booked",
      when: "Today · 2:30 PM · Lilac Lash Studio",
      pay: "KBZPay",
      price: "25,500 MMK",
    },
    features: [
      {
        icon: "calendar",
        title: "Book in seconds",
        text: "See open times and book right away. No calls, no waiting for a reply on Messenger.",
      },
      {
        icon: "card",
        title: "Pay your way",
        text: "KBZPay, AYA Pay, WavePay, MPU or card, all inside the app.",
      },
      {
        icon: "star",
        title: "Real reviews",
        text: "Ratings and photos from customers who actually booked.",
      },
    ],
    salons: {
      eyebrow: "FOR SALONS",
      title: "Own a salon, spa or studio?",
      text: "We’re onboarding our first partner salons in Yangon. Get early access to the partner dashboard and help shape the launch.",
      cta: "Join as a partner",
      email: "partners@glamicious.app",
    },
    footerLeft: "© 2026 Glamicious · Yangon",
    footerRight: "support@glamicious.app",
  },
  my: {
    badge: "မကြာမီ ဖွင့်လှစ်မည် · ရန်ကုန်",
    titlePre: "အကြိမ်ကြိမ် မေးမြန်းစရာမလိုဘဲ သင့်",
    titleAccent: "အလှ",
    titlePost: "အတွက် ဘိုကင်လုပ်ပါ",
    sub: "Glamicious သည် ရန်ကုန်ရှိ အလှပြင်ဆိုင်၊ Spa၊ မျက်တောင်နှင့် လက်သည်း စတူဒီယိုများကို ရှာဖွေကာ ဈေးနှုန်းအမှန်နှင့် အားလပ်ချိန်များကို ကြည့်ပြီး သင့် wallet ဖြင့် ငွေပေးချေနိုင်သော နည်းလမ်းသစ် ဖြစ်ပါသည်။ ယခု နောက်ဆုံးအဆင့် ပြင်ဆင်နေပါပြီ။",
    earlyAccess: "အစောဆုံး အသုံးပြုခွင့် ရယူပါ",
    emailPlaceholder: "you@email.com",
    notify: "အကြောင်းကြားပါ",
    noSpam: "ဖွင့်လှစ်သည့်အခါ အီးမေးလ်တစ်စောင်သာ ပို့ပါမည်။",
    success: "စာရင်းသွင်းပြီးပါပြီ — ဖွင့်လှစ်သည့်အခါ အကြောင်းကြားပါမည်။ ✦",
    invalidEmail: "အီးမေးလ်လိပ်စာ မှန်ကန်စွာ ထည့်ပါ။",
    submitFailed: "တစ်ခုခု မှားယွင်းသွားပါသည် — ထပ်စမ်းကြည့်ပါ။",
    card: {
      title: "Classic မျက်တောင်ဆက်ခြင်း",
      status: "ဘိုကင်ပြီး",
      when: "ယနေ့ · ၁၄:၃၀ · Lilac Lash Studio",
      pay: "KBZPay",
      price: "၂၅,၅၀၀ ကျပ်",
    },
    features: [
      {
        icon: "calendar",
        title: "စက္ကန့်ပိုင်းအတွင်း ဘိုကင်လုပ်ပါ",
        text: "အားလပ်ချိန်များကို ကြည့်ပြီး ချက်ချင်း ဘိုကင်လုပ်ပါ။ ဖုန်းဆက်စရာ၊ Messenger တွင် စောင့်စရာ မလိုပါ။",
      },
      {
        icon: "card",
        title: "ကြိုက်သလို ငွေပေးချေပါ",
        text: "KBZPay, AYA Pay, WavePay, MPU သို့မဟုတ် ကတ်ဖြင့် အက်ပ်ထဲမှာပင် ပေးချေနိုင်ပါသည်။",
      },
      {
        icon: "star",
        title: "သုံးသပ်ချက် အစစ်များ",
        text: "အမှန်တကယ် ဘိုကင်လုပ်ခဲ့သော ဖောက်သည်များ၏ အဆင့်သတ်မှတ်ချက်နှင့် ဓာတ်ပုံများ။",
      },
    ],
    salons: {
      eyebrow: "ဆိုင်များအတွက်",
      title: "အလှပြင်ဆိုင်၊ Spa သို့မဟုတ် စတူဒီယို ပိုင်ဆိုင်ပါသလား။",
      text: "ရန်ကုန်ရှိ ပထမဆုံး မိတ်ဖက်ဆိုင်များကို လက်ခံနေပါပြီ။ Partner dashboard ကို အစောဆုံး ရယူပြီး ဖွင့်လှစ်မှုကို အတူပုံဖော်ပါ။",
      cta: "မိတ်ဖက်အဖြစ် ပါဝင်ရန်",
      email: "partners@glamicious.app",
    },
    footerLeft: "© ၂၀၂၆ Glamicious · ရန်ကုန်",
    footerRight: "support@glamicious.app",
  },
} as const;

function FeatureIcon({ kind }: { kind: string }) {
  if (kind === "calendar") {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="3" />
        <path d="M3 10h18M8 3v4M16 3v4M9 15l2 2 4-4" />
      </svg>
    );
  }
  if (kind === "card") {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="3" />
        <path d="M2 10h20M6 15h4" />
      </svg>
    );
  }
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6D28D9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l2.5 6 6.5.5-5 4.3 1.6 6.2L12 16.6 6.4 20l1.6-6.2-5-4.3 6.5-.5z" />
    </svg>
  );
}

export default function ComingSoon() {
  const [locale, setLocale] = useState<CsLocale>("en");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<"invalid" | "failed" | null>(null);
  const t = STRINGS[locale];
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = rootRef.current;
    if (!root) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const nx = (e.clientX / window.innerWidth) * 2 - 1;
        const ny = (e.clientY / window.innerHeight) * 2 - 1;
        root.style.setProperty("--eye-x", `${(nx * 11).toFixed(1)}px`);
        root.style.setProperty("--eye-y", `${(ny * 6).toFixed(1)}px`);
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (submitting) return;
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError("invalid");
      return;
    }
    setError(null);
    track("notify_me_click", { locale });

    const endpoint = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT || "/api/waitlist";
    setSubmitting(true);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email: value, locale, source: "coming-soon" }),
      });
      if (!res.ok) throw new Error(String(res.status));
      track("waitlist_signup", { locale });
      setSubmitted(true);
    } catch {
      setError("failed");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      ref={rootRef}
      className={`cs${locale === "my" ? " locale-my" : ""}`}
      lang={locale}
      data-locale={locale}
    >
      <div className="cs-top">
      <header className="cs-header container">
        <a href="/coming-soon" className="cs-logo cs-reveal">
          <span className="cs-logo-mark">
            <Doll size={44} uid="cs-logo" />
          </span>
          <span className="cs-logo-text">Glamicious</span>
        </a>
        <div className="cs-lang cs-reveal" role="group" aria-label="Language">
          <button
            type="button"
            className={`cs-lang__btn${locale === "en" ? " is-active" : ""}`}
            onClick={() => setLocale("en")}
            lang="en"
          >
            English
          </button>
          <button
            type="button"
            className={`cs-lang__btn cs-lang__btn--my${locale === "my" ? " is-active" : ""}`}
            onClick={() => setLocale("my")}
            lang="my"
          >
            မြန်မာ
          </button>
        </div>
      </header>

      <section className="cs-hero">
          <div className="container cs-hero__inner" key={locale}>
            <div className="cs-hero__copy">
              <p className="cs-badge cs-reveal">
                <span className="cs-badge__dot" aria-hidden="true" />
                {t.badge}
              </p>
              <h1 className="cs-title cs-reveal cs-d1">
                {t.titlePre}
                <span className={`cs-title__accent${locale === "en" ? " brand-script" : ""}`}>
                  {t.titleAccent}
                </span>
                {t.titlePost}
              </h1>
              <p className="cs-sub cs-reveal cs-d2">{t.sub}</p>

              <div className="cs-reveal cs-d3">
                <p className="cs-form-label">{t.earlyAccess}</p>
                {submitted ? (
                  <p className="cs-success" role="status">
                    {t.success}
                  </p>
                ) : (
                  <form className="cs-form" onSubmit={onSubmit} noValidate>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError(null);
                      }}
                      placeholder={t.emailPlaceholder}
                      aria-label={t.earlyAccess}
                      aria-invalid={error === "invalid"}
                      disabled={submitting}
                    />
                    <button type="submit" disabled={submitting}>
                      {submitting ? "…" : t.notify}
                    </button>
                  </form>
                )}
                {!submitted && (
                  <p className={`cs-form-note${error ? " is-error" : ""}`}>
                    {error === "invalid"
                      ? t.invalidEmail
                      : error === "failed"
                        ? t.submitFailed
                        : t.noSpam}
                  </p>
                )}
              </div>
            </div>

            <div className="cs-hero__visual cs-reveal cs-d2" aria-hidden="true">
              <div className="cs-orb">
                <div className="cs-orb__doll">
                  <Doll size={340} uid="cs-main" />
                </div>
                <span className="cs-sparkle">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true">
                    <path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2z" />
                  </svg>
                </span>
              </div>

              <span className="cs-bubble cs-bubble--1">
                <Doll size={76} uid="cs-berry" theme="berry" />
              </span>
              <span className="cs-bubble cs-bubble--2">
                <Doll size={72} uid="cs-jet" theme="jet" />
              </span>
              <span className="cs-bubble cs-bubble--3">
                <Doll size={64} uid="cs-honey" theme="honey" />
              </span>

              <div className="cs-booking">
                <div className="cs-booking__row">
                  <span className="cs-booking__title">{t.card.title}</span>
                  <span className="cs-booking__status">{t.card.status}</span>
                </div>
                <p className="cs-booking__when">{t.card.when}</p>
                <div className="cs-booking__pay">
                  <span>{t.card.pay}</span>
                  <strong>{t.card.price}</strong>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <main>
        <section className="container cs-features" key={`f-${locale}`}>
          {t.features.map((f, i) => (
            <div key={f.title} className={`cs-feature cs-reveal cs-d${i + 1}`}>
              <span className="cs-feature__icon">
                <FeatureIcon kind={f.icon} />
              </span>
              <h2>{f.title}</h2>
              <p>{f.text}</p>
            </div>
          ))}
        </section>

        <section className="container cs-salons-wrap">
          <div className="cs-salons cs-reveal">
            <div className="cs-salons__copy">
              <p className="cs-salons__eyebrow">{t.salons.eyebrow}</p>
              <h2>{t.salons.title}</h2>
              <p className="cs-salons__text">{t.salons.text}</p>
            </div>
            <div className="cs-salons__cta">
              <a href={`mailto:${t.salons.email}`} className="cs-salons__btn">
                {t.salons.cta}
              </a>
              <a href={`mailto:${t.salons.email}`} className="cs-salons__mail" lang="en">
                {t.salons.email}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="container cs-footer">
        <span>{t.footerLeft}</span>
        <a href="mailto:support@glamicious.app" lang="en">
          {t.footerRight}
        </a>
      </footer>
    </div>
  );
}
