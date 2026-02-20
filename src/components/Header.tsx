import Link from "next/link";

const NAV_ITEMS: ReadonlyArray<{ href: string; label: string }> = [
  { href: "/oferty", label: "Oferty" },
  { href: "/#o-nas", label: "O nas" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link href="/" className="site-logo">
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

        <Link className="btn btn-header" href="/#kontakt">
          Bezpłatna wycena
        </Link>
      </div>
    </header>
  );
}
