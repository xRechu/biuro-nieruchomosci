import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { IconShieldCheck, IconSparkles, IconZap } from "@/components/LucideIcons";

const VALUES = [
  {
    title: "Transparentność procesu",
    description:
      "Od pierwszej rozmowy otrzymujesz jasny plan działań, harmonogram oraz pełne koszty obsługi.",
    icon: IconShieldCheck,
  },
  {
    title: "Skuteczny marketing ofert",
    description:
      "Łączymy profesjonalne materiały, kampanie digital i sieć rekomendacji, by docierać do właściwych kupujących.",
    icon: IconZap,
  },
  {
    title: "Obsługa premium 360",
    description:
      "Zapewniamy wsparcie prawne, negocjacyjne i finansowe, aby transakcja była bezpieczna i przewidywalna.",
    icon: IconSparkles,
  },
] as const;

const PROCESS_STEPS = [
  {
    id: "01",
    title: "Audyt i strategia",
    description:
      "Analizujemy nieruchomość, rynek i oczekiwania klienta. Ustalamy strategię i realny cel cenowy.",
  },
  {
    id: "02",
    title: "Przygotowanie i promocja",
    description:
      "Tworzymy materiały premium, uruchamiamy kampanię i prowadzimy prezentacje dla zweryfikowanych klientów.",
  },
  {
    id: "03",
    title: "Negocjacje i finalizacja",
    description:
      "Prowadzimy negocjacje, koordynujemy formalności i domykamy transakcję od umowy do aktu notarialnego.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="content-main">
        <section className="subpage-hero">
          <div className="container">
            <p className="section-kicker">O nas</p>
            <h1>Budujemy relacje, nie tylko transakcje</h1>
            <p>
              ModernEstate to butikowe biuro nieruchomości skoncentrowane na
              jakości obsługi. Reprezentujemy interes klienta od analizy rynku
              po bezpieczne domknięcie umowy.
            </p>
          </div>
        </section>

        <section className="section subpage-section">
          <div className="container">
            <div className="about-grid">
              <article className="about-story-card">
                <h2>Nasza historia</h2>
                <p>
                  Zaczynaliśmy jako dwuosobowy zespół doradców. Dziś tworzymy
                  grono specjalistów, które prowadzi klientów indywidualnych,
                  inwestorów i właścicieli portfeli nieruchomości.
                </p>
                <p>
                  Naszym priorytetem jest bezpieczeństwo i skuteczność. Każda
                  nieruchomość otrzymuje dedykowany plan sprzedaży lub najmu.
                </p>
              </article>

              <article className="about-story-card">
                <h2>Dlaczego klienci wracają</h2>
                <p>
                  Klienci doceniają naszą dostępność, transparentność i
                  partnerskie podejście. Mówimy konkretnie, raportujemy postęp i
                  reagujemy szybko na zmiany rynkowe.
                </p>
                <p>
                  Dzięki temu proces jest spokojniejszy i bardziej przewidywalny
                  dla obu stron transakcji.
                </p>
              </article>
            </div>

            <div className="about-values-grid">
              {VALUES.map((value) => (
                <article className="about-value-card" key={value.title}>
                  <div className="about-value-icon">
                    <value.icon />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              ))}
            </div>

            <div className="about-process">
              {PROCESS_STEPS.map((step) => (
                <article className="about-process-step" key={step.id}>
                  <span>{step.id}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>

            <div className="subpage-cta">
              <h3>Chcesz rozpocząć współpracę?</h3>
              <Link href="/kontakt#formularz-zgloszeniowy" className="btn btn-primary">
                Przejdź do kontaktu
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
