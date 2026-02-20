import Link from "next/link";

const FOOTER_COLUMNS: ReadonlyArray<{
  title: string;
  links: ReadonlyArray<{ href: string; label: string }>;
}> = [
  {
    title: "Dla klientów",
    links: [
      { href: "/oferty", label: "Oferty mieszkań" },
      { href: "/oferty", label: "Oferty domów" },
      { href: "/kontakt?template=sprzedaz#formularz-zgloszeniowy", label: "Zgłoś nieruchomość" },
      { href: "/kontakt?template=sprzedaz#formularz-zgloszeniowy", label: "Wycena online" },
    ],
  },
  {
    title: "O agencji",
    links: [
      { href: "/agenci", label: "Nasz zespół" },
      { href: "/o-nas", label: "O nas" },
      { href: "/kontakt", label: "Kontakt" },
      { href: "/kontakt", label: "Kariera" },
    ],
  },
  {
    title: "Prawne",
    links: [
      { href: "/polityka-prywatnosci", label: "Polityka prywatności" },
      { href: "/regulamin", label: "Regulamin" },
      { href: "/polityka-prywatnosci#cookies", label: "RODO i cookies" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            Modern<span>Estate.</span>
          </Link>
          <p>
            Nowoczesne biuro nieruchomości. Sprzedaż, zakup i wynajem premium z
            pełnym wsparciem prawnym.
          </p>
        </div>

        {FOOTER_COLUMNS.map((column) => (
          <div key={column.title}>
            <h3>{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={`${column.title}-${link.label}`}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container footer-bottom">
        <p>&copy; {year} ModernEstate. Wszelkie prawa zastrzeżone.</p>
        <div className="footer-socials" aria-label="Media społecznościowe">
          <Link href="/kontakt">FB</Link>
          <Link href="/kontakt">IG</Link>
          <Link href="/kontakt">LI</Link>
        </div>
      </div>
    </footer>
  );
}
