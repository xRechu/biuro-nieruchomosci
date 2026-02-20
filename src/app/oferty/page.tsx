import type { ReactElement, SVGProps } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { IconBath, IconBed, IconRuler } from "@/components/LucideIcons";
import { PROPERTY_OFFERS, type PropertyDetailIcon } from "@/data/properties";

const PROPERTY_ICON_BY_KEY: Record<
  PropertyDetailIcon,
  (props: SVGProps<SVGSVGElement>) => ReactElement
> = {
  bed: IconBed,
  bath: IconBath,
  ruler: IconRuler,
};

const FILTER_CHIPS: ReadonlyArray<string> = [
  "Wszystkie",
  "Mieszkania",
  "Domy",
  "Lokale komercyjne",
];

export default function OffersPage() {
  return (
    <>
      <Header />

      <main className="offers-main">
        <section className="offers-hero">
          <div className="container">
            <p className="section-kicker">Katalog ofert</p>
            <h1>Aktualne nieruchomości</h1>
            <p>
              Sprawdź wyselekcjonowane oferty sprzedaży i wynajmu. Każda
              nieruchomość przechodzi wewnętrzny audyt jakości.
            </p>
          </div>
        </section>

        <section className="section offers-section">
          <div className="container">
            <div className="offers-filter-row">
              <div className="offers-chips" aria-label="Filtry ofert">
                {FILTER_CHIPS.map((chip, index) => (
                  <button
                    key={chip}
                    type="button"
                    className={`offers-chip${index === 0 ? " is-active" : ""}`}
                  >
                    {chip}
                  </button>
                ))}
              </div>
              <Link href="/kontakt#formularz-zgloszeniowy" className="btn btn-outline-dark">
                Szukasz czegoś konkretnego?
              </Link>
            </div>

            <div className="offers-grid">
              {PROPERTY_OFFERS.map((property) => (
                <article className="property-card offers-card reveal" key={property.id}>
                  <div className="property-media">
                    <Image
                      src={property.image}
                      alt={property.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="property-image"
                    />
                    <span className="offer-type-pill">
                      {property.type === "sprzedaz" ? "Sprzedaż" : "Wynajem"}
                    </span>
                  </div>

                  <div className="property-body">
                    <p className="property-price">{property.price}</p>
                    <h2 className="property-title">{property.title}</h2>
                    <p className="property-location">{property.location}</p>
                    <p className="offer-description">{property.description}</p>

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

                    <div className="offer-actions">
                      <Link
                        href={
                          property.type === "sprzedaz"
                            ? "/kontakt?template=kupno#formularz-zgloszeniowy"
                            : "/kontakt?template=wynajem#formularz-zgloszeniowy"
                        }
                        className="btn btn-primary btn-wide"
                      >
                        Zapytaj o ofertę
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
