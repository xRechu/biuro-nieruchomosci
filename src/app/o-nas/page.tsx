import type { ReactElement, SVGProps } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { IconShieldCheck, IconSparkles, IconZap } from "@/components/LucideIcons";

type Pillar = {
  id: string;
  title: string;
  description: string;
  points: ReadonlyArray<string>;
  icon: (props: SVGProps<SVGSVGElement>) => ReactElement;
};

type ProcessStep = {
  id: string;
  title: string;
  description: string;
  result: string;
};

const METRICS = [
  { value: "450+", label: "zamkniętych transakcji" },
  { value: "30 dni", label: "średni czas sprzedaży" },
  { value: "4.9/5", label: "ocena klientów" },
  { value: "12+", label: "lat doświadczenia" },
] as const;

const PILLARS: ReadonlyArray<Pillar> = [
  {
    id: "clarity",
    title: "Transparentny proces",
    description:
      "Od pierwszego spotkania dostajesz plan działań i harmonogram pracy z nieruchomością.",
    points: [
      "konkretna strategia i cele cenowe",
      "czytelne etapy współpracy",
      "pełny kosztorys bez ukrytych opłat",
    ],
    icon: IconShieldCheck,
  },
  {
    id: "execution",
    title: "Skuteczna realizacja",
    description:
      "Łączymy marketing premium, dobór klientów i negocjacje prowadzone na Twoich warunkach.",
    points: [
      "sesje foto/wideo i przygotowanie oferty",
      "prezentacje dla zweryfikowanych klientów",
      "koordynacja formalności od A do Z",
    ],
    icon: IconZap,
  },
  {
    id: "support",
    title: "Wsparcie 360",
    description:
      "Masz jeden zespół, który odpowiada za część prawną, negocjacyjną i operacyjną transakcji.",
    points: [
      "weryfikacja dokumentacji i ryzyk",
      "opieka nad umowami i notariuszem",
      "raportowanie postępu co tydzień",
    ],
    icon: IconSparkles,
  },
] as const;

const PROCESS_STEPS: ReadonlyArray<ProcessStep> = [
  {
    id: "01",
    title: "Analiza i rekomendacja",
    description:
      "Poznajemy Twoją sytuację, cele i parametry nieruchomości. Na tej podstawie przygotowujemy strategię działania.",
    result: "Efekt: jasny plan działań na pierwsze 14 dni.",
  },
  {
    id: "02",
    title: "Przygotowanie oferty",
    description:
      "Porządkujemy dokumenty, tworzymy materiały sprzedażowe i dobieramy kanały promocji odpowiednie dla segmentu nieruchomości.",
    result: "Efekt: gotowa oferta premium z kompletem materiałów.",
  },
  {
    id: "03",
    title: "Prezentacje i selekcja klientów",
    description:
      "Prowadzimy spotkania z realnie zainteresowanymi klientami, filtrujemy zapytania i przygotowujemy rekomendacje decyzji.",
    result: "Efekt: oszczędność czasu i wyższa jakość leadów.",
  },
  {
    id: "04",
    title: "Negocjacje i finalizacja",
    description:
      "Negocjujemy warunki, koordynujemy umowy i przeprowadzamy transakcję do bezpiecznego podpisania aktu notarialnego.",
    result: "Efekt: domknięta transakcja bez chaosu formalnego.",
  },
] as const;

const DELIVERY_LIST = [
  "dedykowany opiekun transakcji",
  "harmonogram krok po kroku",
  "raporty z działań i kontaktów z klientami",
  "rekomendacje decyzyjne przed każdą kluczową decyzją",
] as const;

const COMMUNICATION_LIST = [
  "jeden kanał kontaktu i szybka odpowiedź",
  "regularne podsumowania tygodniowe",
  "jasny status: co jest zrobione, co w toku, co dalej",
  "pełna przejrzystość dokumentów i terminów",
] as const;

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="content-main about-redesign-main">
        <section className="about-redesign-hero">
          <div className="container about-hero-grid">
            <div className="about-hero-copy">
              <p className="section-kicker">O nas</p>
              <h1>Spokojny proces i konkretne decyzje na każdym etapie</h1>
              <p>
                ModernEstate to butikowe biuro nieruchomości, które prowadzi
                klienta od analizy rynku do finalizacji umowy. Stawiamy na
                przewidywalność, czytelną komunikację i realne wyniki.
              </p>

              <div className="about-hero-actions">
                <Link href="/kontakt#formularz-zgloszeniowy" className="btn btn-primary">
                  Umów konsultację
                </Link>
                <Link href="/agenci" className="btn btn-outline-dark">
                  Poznaj agentów
                </Link>
              </div>
            </div>

            <div className="about-hero-visual">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80"
                alt="Zespół doradców nieruchomości podczas konsultacji"
                fill
                sizes="(max-width: 1080px) 100vw, 46vw"
                className="about-hero-image"
              />
              <div className="about-hero-overlay" />
              <div className="about-hero-highlight">
                <strong>Średnio 30 dni</strong>
                <span>od publikacji oferty do umowy przedwstępnej</span>
              </div>
            </div>
          </div>

          <div className="container about-hero-metrics">
            {METRICS.map((item) => (
              <article className="about-metric-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section about-pillars-section">
          <div className="container">
            <div className="about-section-head">
              <h2>Jak pracujemy z klientem</h2>
              <p>
                Zamiast przypadkowych działań oferujemy uporządkowany model
                pracy, który skraca czas transakcji i zmniejsza ryzyko błędów.
              </p>
            </div>

            <div className="about-pillars-grid">
              {PILLARS.map((pillar) => (
                <article className="about-pillar-card" key={pillar.id}>
                  <div className="about-pillar-icon">
                    <pillar.icon />
                  </div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                  <ul className="about-pillar-points">
                    {pillar.points.map((point) => (
                      <li key={`${pillar.id}-${point}`}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-process-section">
          <div className="container">
            <div className="about-section-head">
              <h2>Proces współpracy krok po kroku</h2>
              <p>
                Każdy etap ma z góry określony cel i rezultat, dzięki czemu
                łatwo kontrolujesz przebieg całej transakcji.
              </p>
            </div>

            <ol className="about-process-grid">
              {PROCESS_STEPS.map((step) => (
                <li className="about-process-card" key={step.id}>
                  <span className="about-process-index">{step.id}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <strong>{step.result}</strong>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section about-proof-section">
          <div className="container about-proof-grid">
            <article className="about-proof-card">
              <h2>Co dostajesz w praktyce</h2>
              <ul className="about-proof-list">
                {DELIVERY_LIST.map((item) => (
                  <li key={`delivery-${item}`}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="about-proof-card about-proof-card-accent">
              <h2>Standard komunikacji</h2>
              <ul className="about-proof-list">
                {COMMUNICATION_LIST.map((item) => (
                  <li key={`communication-${item}`}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="container">
            <div className="about-final-cta">
              <div>
                <h3>Chcesz zobaczyć, jak poprowadzimy Twoją nieruchomość?</h3>
                <p>
                  Przygotujemy dla Ciebie plan działań i wstępny harmonogram
                  sprzedaży, zakupu lub najmu.
                </p>
              </div>

              <div className="about-final-actions">
                <Link href="/kontakt#formularz-zgloszeniowy" className="btn btn-primary">
                  Przejdź do kontaktu
                </Link>
                <Link href="/oferty" className="btn btn-outline-dark">
                  Zobacz oferty
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
