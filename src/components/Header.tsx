import Link from "next/link";

export default function Header() {
    return (
        <header className="header">
            <div className="header-inner">
                <Link href="/" className="header-logo">
                    Biuro Nieruchomości
                </Link>

                <nav>
                    <ul className="header-nav">
                        <li>
                            <a href="#o-nas">O nas</a>
                        </li>
                        <li>
                            <a href="#oferta">Oferta</a>
                        </li>
                        <li>
                            <a href="#kontakt">Kontakt</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
