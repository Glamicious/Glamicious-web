"use client";

import { useEffect } from "react";

/** Sets <html lang> for routes whose language differs from the root layout default. */
export default function HtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = "en";
    };
  }, [lang]);
  return null;
}
