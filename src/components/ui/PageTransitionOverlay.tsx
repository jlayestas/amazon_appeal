"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const MIN_VISIBLE_MS = 200;

function isModifiedClick(event: MouseEvent) {
  return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
}

function getAnchor(target: EventTarget | null) {
  if (!(target instanceof Element)) return null;
  const anchor = target.closest("a[href]");
  return anchor instanceof HTMLAnchorElement ? anchor : null;
}

function shouldShowTransition(anchor: HTMLAnchorElement, currentUrl: URL) {
  const href = anchor.getAttribute("href");
  if (!href || href.startsWith("#")) return false;
  if (anchor.target && anchor.target !== "_self") return false;
  if (anchor.hasAttribute("download")) return false;

  const destination = new URL(anchor.href, window.location.href);
  if (destination.origin !== currentUrl.origin) return false;
  if (destination.protocol === "mailto:" || destination.protocol === "tel:") return false;
  if (destination.pathname === currentUrl.pathname && destination.search === currentUrl.search) {
    return false;
  }

  return true;
}

export function PageTransitionOverlay() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const startedAt = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || isModifiedClick(event)) return;

      const anchor = getAnchor(event.target);
      if (!anchor) return;

      if (!shouldShowTransition(anchor, new URL(window.location.href))) return;

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      startedAt.current = performance.now();
      setVisible(true);
    };

    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (!visible || startedAt.current === null) return;

    const elapsed = performance.now() - startedAt.current;
    const remaining = Math.max(MIN_VISIBLE_MS - elapsed, 0);
    timeoutRef.current = setTimeout(() => {
      setVisible(false);
      startedAt.current = null;
    }, remaining);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [pathname, visible]);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading page"
      className="fixed inset-0 z-[9998] bg-white"
    />
  );
}
