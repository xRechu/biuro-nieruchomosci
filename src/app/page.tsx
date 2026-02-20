import type { ReactElement, SVGProps } from "react";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  IconBath,
  IconBed,
  IconMail,
  IconMapPin,
  IconPhone,
  IconRuler,
  IconShieldCheck,
  IconSparkles,
  IconStar,
  IconZap,
} from "@/components/LucideIcons";
import InquiryTemplatesForm from "@/components/InquiryTemplatesForm";
import SearchPanel from "@/components/SearchPanel";
import { FEATURED_PROPERTIES, type PropertyDetailIcon } from "@/data/properties";

type ValuePointIcon = "shield" | "zap" | "sparkles";

type ValuePoint = {
  id: string;
  icon: ValuePointIcon;
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

const PROPERTY_ICON_BY_KEY: Record<
  PropertyDetailIcon,
  (props: SVGProps<SVGSVGElement>) => ReactElement
> = {
  bed: IconBed,
  bath: IconBath,
  ruler: IconRuler,
};

const VALUE_ICON_BY_KEY: Record<
  ValuePointIcon,
  (props: SVGProps<SVGSVGElement>) => ReactElement
> = {
  shield: IconShieldCheck,
  zap: IconZap,
  sparkles: IconSparkles,
};

const VALUE_POINTS: ReadonlyArray<ValuePoint> = [
  {
    id: "safety",
    icon: "shield",
    index: "01",
    title: "Pełne bezpieczeństwo transakcji",
    description:
      "Weryfikujemy stan prawny nieruchomości i prowadzimy klienta od pierwszej rozmowy do aktu notarialnego.",
  },
  {
    id: "speed",
    icon: "zap",
    index: "02",
    title: "Szybka i skuteczna sprzedaż",
    description:
      "Dzięki home stagingowi, profesjonalnym sesjom i promocji docieramy do zdecydowanych kupujących w krótkim czasie.",
  },
  {
    id: "premium",
    icon: "sparkles",
    index: "03",
    title: "Oferty premium i off-market",
    description:
      "Mamy dostęp do nieruchomości, które nie trafiają na popularne portale, co zwiększa Twoje szanse na najlepszy wybór.",
  },
];

const TESTIMONIALS: ReadonlyArray<Testimonial> = [
  {
    quote:
      "Proces sprzedaży domu przebiegł błyskawicznie. Zespół zajął się wszystkim od zdjęć po formalności u notariusza.",
    author: "Anna Kowalska",
    context: "Sprzedaż domu, Warszawa",
    avatar: "https://i.pravatar.cc/120?img=1",
  },
  {
    quote:
      "Szukaliśmy lokalu komercyjnego przez dwa miesiące. Otrzymaliśmy trzy trafne propozycje i finalizację umowy w kilka dni.",
    author: "Tomasz Nowak",
    context: "Wynajem lokalu komercyjnego",
    avatar: "https://i.pravatar.cc/120?img=11",
  },
];

const STARS = [1, 2, 3, 4, 5] as const;

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
              <Link href="/oferty" className="btn btn-primary">
                Zobacz oferty
              </Link>
              <Link href="/#kontakt" className="btn btn-ghost">
                Umów konsultację
              </Link>
            </div>
          </div>
        </section>

        <SearchPanel />

        <section id="oferty" className="section featured-section">
          <div className="container">
            <div className="section-header">
              <div>
                <p className="section-kicker">Na wyłączność</p>
                <h2>Wyróżnione nieruchomości</h2>
              </div>
              <Link href="/oferty" className="section-link">
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
                      {property.details.map((detail) => {
                        const PropertyIcon = PROPERTY_ICON_BY_KEY[detail.icon];

                        return (
                          <li key={`${property.id}-${detail.label}`}>
                            <span className="property-meta-label">
                              <PropertyIcon className="property-meta-icon" />
                              {detail.label}
                            </span>
                            <strong>{detail.value}</strong>
                          </li>
                        );
                      })}
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
              {VALUE_POINTS.map((point) => {
                const ValueIcon = VALUE_ICON_BY_KEY[point.icon];

                return (
                  <article className="value-card reveal" key={point.id}>
                    <span className="value-index">{point.index}</span>
                    <div className="value-icon">
                      <ValueIcon />
                    </div>
                    <h3>{point.title}</h3>
                    <p>{point.description}</p>
                  </article>
                );
              })}
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
                  <p className="testimonial-rating" aria-label="Ocena 5 na 5">
                    {STARS.map((star) => (
                      <IconStar key={star} className="star-icon" />
                    ))}
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
                    <dt className="contact-term">
                      <IconMapPin className="contact-icon" />
                      Adres
                    </dt>
                    <dd>ul. Złota 44, 00-120 Warszawa</dd>
                  </div>
                  <div>
                    <dt className="contact-term">
                      <IconPhone className="contact-icon" />
                      Telefon
                    </dt>
                    <dd>
                      <a href="tel:+48500600700">+48 500 600 700</a>
                    </dd>
                  </div>
                  <div>
                    <dt className="contact-term">
                      <IconMail className="contact-icon" />
                      E-mail
                    </dt>
                    <dd>
                      <a href="mailto:kontakt@modernestate.pl">
                        kontakt@modernestate.pl
                      </a>
                    </dd>
                  </div>
                </dl>

                <div className="contact-actions">
                  <Link className="btn btn-dark" href="/?template=kupno#formularz-zgloszeniowy">
                    Napisz do nas
                  </Link>
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
                  <IconMapPin />
                </div>
              </div>
            </div>

            <Suspense fallback={null}>
              <InquiryTemplatesForm />
            </Suspense>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
