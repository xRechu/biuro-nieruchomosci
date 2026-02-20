"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { IconCookie } from "@/components/LucideIcons";

type ConsentLevel = "all" | "essential";

type CookieConsent = {
  version: number;
  level: ConsentLevel;
  essential: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

const CONSENT_VERSION = 1;
const STORAGE_KEY = "modernestate_cookie_consent_v1";
const CONSENT_COOKIE_KEY = "modernestate_cookie_consent";
const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 180;

function readStoredConsent(): CookieConsent | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw) as Partial<CookieConsent>;

    if (
      parsed.version !== CONSENT_VERSION ||
      (parsed.level !== "all" && parsed.level !== "essential")
    ) {
      return null;
    }

    return {
      version: CONSENT_VERSION,
      level: parsed.level,
      essential: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      updatedAt: parsed.updatedAt ?? new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

function persistConsent(consent: CookieConsent) {
  const serialized = JSON.stringify(consent);
  window.localStorage.setItem(STORAGE_KEY, serialized);
  document.cookie = `${CONSENT_COOKIE_KEY}=${consent.level}; Max-Age=${CONSENT_MAX_AGE_SECONDS}; Path=/; SameSite=Lax`;
  window.dispatchEvent(
    new CustomEvent("cookie-consent-updated", {
      detail: consent,
    }),
  );
}

function buildConsent(level: ConsentLevel): CookieConsent {
  return {
    version: CONSENT_VERSION,
    level,
    essential: true,
    analytics: level === "all",
    marketing: level === "all",
    updatedAt: new Date().toISOString(),
  };
}

export default function CookieBanner() {
  const [isReady, setIsReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hasDecision, setHasDecision] = useState(false);

  useEffect(() => {
    const saved = readStoredConsent();
    setHasDecision(saved !== null);
    setIsOpen(saved === null);
    setIsReady(true);
  }, []);

  const handleConsent = useCallback((level: ConsentLevel) => {
    const consent = buildConsent(level);
    persistConsent(consent);
    setHasDecision(true);
    setIsOpen(false);
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <>
      {isOpen ? (
        <aside
          className="cookie-banner"
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-banner-title"
          aria-live="polite"
        >
          <div className="cookie-banner-inner">
            <div className="cookie-copy">
              <h2 id="cookie-banner-title">Cookies (RODO)</h2>
              <p>
                Używamy cookies niezbędnych do działania serwisu; cookies
                analityczne i marketingowe uruchamiamy tylko po Twojej zgodzie.
                Szczegóły:{" "}
                <Link href="/polityka-prywatnosci">Polityce Prywatności</Link> i{" "}
                <Link href="/regulamin">Regulaminie</Link>.
              </p>
            </div>

            <div className="cookie-actions">
              <button
                type="button"
                className="btn btn-outline-dark"
                onClick={() => handleConsent("essential")}
              >
                Niezbędne
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleConsent("all")}
              >
                Akceptuję
              </button>
            </div>
          </div>
        </aside>
      ) : null}

      {hasDecision && !isOpen ? (
        <button
          type="button"
          className="cookie-manage-btn"
          onClick={() => setIsOpen(true)}
          aria-label="Otwórz ustawienia cookies"
        >
          <IconCookie />
        </button>
      ) : null}
    </>
  );
}
