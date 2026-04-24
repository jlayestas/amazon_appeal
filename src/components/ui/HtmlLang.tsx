"use client";

import { useEffect } from "react";

/** Sets document.documentElement.lang after hydration for non-default locales */
export function HtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
