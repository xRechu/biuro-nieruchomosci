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
      { href: "/#kontakt", label: "Zgłoś nieruchomość" },
      { href: "/#kontakt", label: "Wycena online" },
    ],
  },
  {
    title: "O agencji",
    links: [
      { href: "/#o-nas", label: "Nasz zespół" },
      { href: "/#kontakt", label: "Kontakt" },
      { href: "/#kontakt", label: "Kariera" },
      { href: "/#kontakt", label: "Blog i poradnik" },
    ],
  },
  {
    title: "Prawne",
    links: [
      { href: "/#kontakt", label: "Polityka prywatności" },
      { href: "/#kontakt", label: "Regulamin" },
      { href: "/#kontakt", label: "RODO" },
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
          <Link href="/#kontakt">FB</Link>
          <Link href="/#kontakt">IG</Link>
          <Link href="/#kontakt">LI</Link>
        </div>
      </div>
    </footer>
  );
}
