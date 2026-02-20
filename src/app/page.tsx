import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

type Property = {
  id: string;
  price: string;
  title: string;
  location: string;
  image: string;
  alt: string;
  details: ReadonlyArray<{
    label: string;
    value: string;
  }>;
};

type ValuePoint = {
  id: string;
  index: string;
  title: string;
  description: string;
};

type Testimonial = {
  quote: string;
  author: string;
  context: string;
  avatar: string;
};

const FEATURED_PROPERTIES: ReadonlyArray<Property> = [
  {
    id: "warszawa-loft",
    price: "1 250 000 PLN",
    title: "Nowoczesny loft z antresolą",
    location: "Warszawa, Śródmieście",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    alt: "Nowoczesny salon w apartamencie typu loft",
    details: [
      { label: "Pokoje", value: "3" },
      { label: "Łazienki", value: "2" },
      { label: "Metraż", value: "84 m²" },
    ],
  },
  {
    id: "wroclaw-apartment",
    price: "890 000 PLN",
    title: "Apartament przy parku",
    location: "Wrocław, Krzyki",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    alt: "Nowoczesna kuchnia i jadalnia w apartamencie",
    details: [
      { label: "Pokoje", value: "2" },
      { label: "Łazienki", value: "1" },
      { label: "Metraż", value: "56 m²" },
    ],
  },
  {
    id: "gdansk-rental",
    price: "3 100 PLN / mc",
    title: "Słoneczne mieszkanie na wynajem",
    location: "Gdańsk, Oliwa",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    alt: "Przestronny salon z dużymi oknami",
    details: [
      { label: "Pokoje", value: "2" },
      { label: "Łazienki", value: "1" },
      { label: "Metraż", value: "48 m²" },
    ],
  },
];

const VALUE_POINTS: ReadonlyArray<ValuePoint> = [
  {
    id: "safety",
    index: "01",
    title: "Pełne bezpieczeństwo transakcji",
    description:
      "Weryfikujemy stan prawny nieruchomości i prowadzimy klienta od pierwszej rozmowy do aktu notarialnego.",
  },
  {
    id: "speed",
    index: "02",
    title: "Szybka i skuteczna sprzedaż",
    description:
      "Dzięki home stagingowi, profesjonalnym sesjom i promocji docieramy do zdecydowanych kupujących w krótkim czasie.",
  },
  {
    id: "premium",
    index: "03",
    title: "Oferty premium i off-market",
    description:
      "Mamy dostęp do nieruchomości, które nie trafiają na popularne portale, co zwiększa Twoje szanse na najlepszy wybór.",
  },
];

const TESTIMONIALS: ReadonlyArray<Testimonial> = [
  {
    quote:
      "Proces sprzedaży domu przebiegł błyskawicznie. Zespół zajął się wszystkim - od zdjęć po formalności u notariusza.",
    author: "Anna Kowalska",
    context: "Sprzedaż domu, Warszawa",
    avatar: "https://i.pravatar.cc/120?img=1",
  },
  {
    quote:
      "Szukaliśmy lokalu komercyjnego przez dwa miesiące. Tu dostaliśmy trzy trafne propozycje i finalizację umowy w kilka dni.",
    author: "Tomasz Nowak",
    context: "Wynajem lokalu komercyjnego",
    avatar: "https://i.pravatar.cc/120?img=11",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2075&q=80"
            alt="Nowoczesny dom z dużym przeszkleniem"
            fill
            priority
            sizes="100vw"
            className="hero-image"
          />
          <div className="hero-overlay" />

          <div className="container hero-content">
            <p className="hero-tag">Biuro nieruchomości premium</p>
            <h1 id="hero-title" className="hero-title">
              Znajdziemy Twój wymarzony dom. Szybko i bezpiecznie.
            </h1>
            <p className="hero-description">
              Poznaj starannie wyselekcjonowane oferty na wyłączność i zyskaj
              partnera, który zadba o każdy etap transakcji.
            </p>
            <div className="hero-actions">
              <Link href="#oferty" className="btn btn-primary">
                Zobacz oferty
              </Link>
              <Link href="#kontakt" className="btn btn-ghost">
                Umów konsultację
              </Link>
            </div>
          </div>
        </section>

        <section
          className="search-shell"
          aria-label="Wyszukiwarka nieruchomości"
        >
          <div className="container">
            <form className="search-card" action="#">
              <div className="search-tabs" aria-label="Tryb ofert">
                <button
                  type="button"
                  aria-pressed="true"
                  className="search-tab is-active"
                >
                  Kupno
                </button>
                <button type="button" aria-pressed="false" className="search-tab">
                  Wynajem
                </button>
              </div>

              <div className="search-grid">
                <div className="field">
                  <label htmlFor="search-location">Gdzie szukasz?</label>
                  <input
                    id="search-location"
                    name="location"
                    type="text"
                    placeholder="Miasto, dzielnica..."
                  />
                </div>

                <div className="field">
                  <label htmlFor="search-type">Typ nieruchomości</label>
                  <select id="search-type" name="type" defaultValue="all">
                    <option value="all">Wszystkie</option>
                    <option value="flat">Mieszkanie</option>
                    <option value="house">Dom</option>
                    <option value="commercial">Lokal</option>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="search-budget">Cena maksymalna</label>
                  <input
                    id="search-budget"
                    name="budget"
                    type="text"
                    inputMode="numeric"
                    placeholder="np. 800 000 PLN"
                  />
                </div>

                <div className="search-action">
                  <button type="submit" className="btn btn-primary btn-wide">
                    Szukaj
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>

        <section id="oferty" className="section featured-section">
          <div className="container">
            <div className="section-header">
              <div>
                <p className="section-kicker">Na wyłączność</p>
                <h2>Wyróżnione nieruchomości</h2>
              </div>
              <Link href="#kontakt" className="section-link">
                Zobacz wszystkie
              </Link>
            </div>

            <div className="properties-grid">
              {FEATURED_PROPERTIES.map((property) => (
                <article className="property-card reveal" key={property.id}>
                  <div className="property-media">
                    <Image
                      src={property.image}
                      alt={property.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="property-image"
                    />
                  </div>

                  <div className="property-body">
                    <p className="property-price">{property.price}</p>
                    <h3 className="property-title">{property.title}</h3>
                    <p className="property-location">{property.location}</p>

                    <ul className="property-meta">
                      {property.details.map((detail) => (
                        <li key={detail.label}>
                          <span>{detail.label}</span>
                          <strong>{detail.value}</strong>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="o-nas" className="section section-soft">
          <div className="container">
            <div className="section-intro">
              <h2>Dlaczego ModernEstate?</h2>
              <p>
                Nie jesteśmy tylko pośrednikiem. Łączymy doświadczenie
                negocjacyjne, marketing i wsparcie prawne, aby prowadzić
                transakcję bezpiecznie i przewidywalnie.
              </p>
            </div>

            <div className="value-grid">
              {VALUE_POINTS.map((point) => (
                <article className="value-card reveal" key={point.id}>
                  <span className="value-index">{point.index}</span>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark" aria-labelledby="opinie-title">
          <div className="container">
            <div className="section-intro section-intro-dark">
              <h2 id="opinie-title">Zaufali nam właściciele i inwestorzy</h2>
            </div>

            <div className="testimonials-grid">
              {TESTIMONIALS.map((testimonial) => (
                <article className="testimonial-card reveal" key={testimonial.author}>
                  <p className="testimonial-rating" aria-hidden="true">
                    ★★★★★
                  </p>
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                  <div className="testimonial-author">
                    <Image
                      src={testimonial.avatar}
                      alt={`Zdjęcie klienta: ${testimonial.author}`}
                      width={56}
                      height={56}
                      className="testimonial-avatar"
                    />
                    <div>
                      <p className="testimonial-name">{testimonial.author}</p>
                      <p className="testimonial-context">{testimonial.context}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="kontakt" className="section contact-section">
          <div className="container">
            <div className="contact-card">
              <div className="contact-copy">
                <h2>Odwiedź nasze biuro</h2>
                <p>
                  Porozmawiajmy o Twojej nieruchomości przy kawie. Jesteśmy do
                  dyspozycji od poniedziałku do piątku.
                </p>

                <dl className="contact-list">
                  <div>
                    <dt>Adres</dt>
                    <dd>ul. Złota 44, 00-120 Warszawa</dd>
                  </div>
                  <div>
                    <dt>Telefon</dt>
                    <dd>
                      <a href="tel:+48500600700">+48 500 600 700</a>
                    </dd>
                  </div>
                  <div>
                    <dt>E-mail</dt>
                    <dd>
                      <a href="mailto:kontakt@modernestate.pl">
                        kontakt@modernestate.pl
                      </a>
                    </dd>
                  </div>
                </dl>

                <div className="contact-actions">
                  <a className="btn btn-dark" href="mailto:kontakt@modernestate.pl">
                    Napisz do nas
                  </a>
                  <a className="btn btn-outline-dark" href="tel:+48500600700">
                    Zadzwoń
                  </a>
                </div>
              </div>

              <div className="contact-map">
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
                  alt="Lokalizacja biura na mapie miasta"
                  fill
                  sizes="(max-width: 960px) 100vw, 45vw"
                  className="contact-map-image"
                />
                <div className="contact-map-overlay" />
                <div className="map-pin" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 22C12 22 19 16.4 19 10A7 7 0 1 0 5 10C5 16.4 12 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="10" r="2.8" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
