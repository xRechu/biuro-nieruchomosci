"use client";

import Link from "next/link";
import { useState } from "react";
import { IconMenu, IconX } from "@/components/LucideIcons";

const NAV_ITEMS: ReadonlyArray<{ href: string; label: string }> = [
  { href: "/oferty", label: "Oferty" },
  { href: "/agenci", label: "Agenci" },
  { href: "/o-nas", label: "O nas" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  function handleMobileToggle() {
    setIsMobileNavOpen((previous) => !previous);
  }

  function closeMobileNav() {
    setIsMobileNavOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link href="/" className="site-logo" onClick={closeMobileNav}>
          Modern<span>Estate.</span>
        </Link>

        <nav aria-label="Nawigacja główna">
          <ul className="site-nav">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          className="btn btn-header"
          href="/kontakt?template=sprzedaz#formularz-zgloszeniowy"
        >
          Bezpłatna wycena
        </Link>

        <button
          type="button"
          className="mobile-nav-toggle"
          aria-label={isMobileNavOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={isMobileNavOpen}
          aria-controls="mobile-nav-panel"
          onClick={handleMobileToggle}
        >
          {isMobileNavOpen ? <IconX /> : <IconMenu />}
        </button>
      </div>

      <div
        id="mobile-nav-panel"
        className={`mobile-nav-panel${isMobileNavOpen ? " is-open" : ""}`}
      >
        <nav aria-label="Nawigacja mobilna">
          <ul className="mobile-nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={`mobile-${item.href}`}>
                <Link href={item.href} onClick={closeMobileNav}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          className="btn btn-primary mobile-nav-cta"
          href="/kontakt?template=sprzedaz#formularz-zgloszeniowy"
          onClick={closeMobileNav}
        >
          Bezpłatna wycena
        </Link>
      </div>
    </header>
  );
}
