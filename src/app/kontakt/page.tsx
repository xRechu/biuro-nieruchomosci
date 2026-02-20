import { Suspense } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InquiryTemplatesForm from "@/components/InquiryTemplatesForm";
import { IconMail, IconMapPin, IconPhone } from "@/components/LucideIcons";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="content-main">
        <section className="subpage-hero">
          <div className="container">
            <p className="section-kicker">Kontakt</p>
            <h1>Porozmawiajmy o Twojej nieruchomości</h1>
            <p>
              Wybierz dogodną formę kontaktu lub skorzystaj z gotowego formularza
              zgłoszenia dla kupna, wynajmu lub sprzedaży.
            </p>
          </div>
        </section>

        <section className="section subpage-section">
          <div className="container">
            <div className="contact-card">
              <div className="contact-copy">
                <h2>Dane kontaktowe</h2>
                <p>
                  Pracujemy od poniedziałku do piątku w godzinach 9:00 - 18:00.
                  Spotkania w biurze odbywają się po wcześniejszym umówieniu.
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
              </div>

              <div className="contact-map">
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
                  alt="Lokalizacja biura ModernEstate"
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
