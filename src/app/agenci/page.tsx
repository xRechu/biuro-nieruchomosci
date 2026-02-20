import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { IconMail, IconPhone } from "@/components/LucideIcons";

type Agent = {
  id: string;
  name: string;
  role: string;
  experience: string;
  image: string;
  phone: string;
  email: string;
  specialties: ReadonlyArray<string>;
};

const AGENTS: ReadonlyArray<Agent> = [
  {
    id: "anna-zielinska",
    name: "Anna Zielińska",
    role: "Senior Property Advisor",
    experience: "8 lat doświadczenia",
    image: "https://i.pravatar.cc/500?img=47",
    phone: "+48 500 600 711",
    email: "anna.zielinska@modernestate.pl",
    specialties: ["Apartamenty premium", "Sprzedaż off-market", "Negocjacje"],
  },
  {
    id: "piotr-kaczmarek",
    name: "Piotr Kaczmarek",
    role: "Ekspert ds. rynku wtórnego",
    experience: "10 lat doświadczenia",
    image: "https://i.pravatar.cc/500?img=12",
    phone: "+48 500 600 722",
    email: "piotr.kaczmarek@modernestate.pl",
    specialties: ["Domy jednorodzinne", "Weryfikacja stanu prawnego", "Wycena"],
  },
  {
    id: "marta-lewandowska",
    name: "Marta Lewandowska",
    role: "Rental & Investment Advisor",
    experience: "6 lat doświadczenia",
    image: "https://i.pravatar.cc/500?img=32",
    phone: "+48 500 600 733",
    email: "marta.lewandowska@modernestate.pl",
    specialties: ["Wynajem długoterminowy", "Najem komercyjny", "Obsługa inwestorów"],
  },
  {
    id: "jakub-sadowski",
    name: "Jakub Sadowski",
    role: "Ekspert ds. sprzedaży",
    experience: "7 lat doświadczenia",
    image: "https://i.pravatar.cc/500?img=14",
    phone: "+48 500 600 744",
    email: "jakub.sadowski@modernestate.pl",
    specialties: ["Home staging", "Strategia marketingowa", "Sesje premium"],
  },
];

const TRUST_POINTS = [
  { value: "12+", label: "lat na rynku" },
  { value: "450+", label: "zamkniętych transakcji" },
  { value: "4.9/5", label: "średnia ocena klientów" },
] as const;

export default function AgentsPage() {
  return (
    <>
      <Header />

      <main className="content-main">
        <section className="subpage-hero">
          <div className="container">
            <p className="section-kicker">Zespół</p>
            <h1>Agenci, którym możesz zaufać</h1>
            <p>
              Każdy agent ModernEstate specjalizuje się w konkretnym segmencie
              rynku. Dzięki temu prowadzimy klientów szybciej, precyzyjniej i
              bezpieczniej.
            </p>
          </div>
        </section>

        <section className="section subpage-section">
          <div className="container">
            <div className="trust-strip">
              {TRUST_POINTS.map((point) => (
                <article className="trust-item" key={point.label}>
                  <strong>{point.value}</strong>
                  <span>{point.label}</span>
                </article>
              ))}
            </div>

            <div className="agents-grid">
              {AGENTS.map((agent) => (
                <article className="agent-card" key={agent.id}>
                  <div className="agent-media">
                    <Image
                      src={agent.image}
                      alt={`Portret agenta: ${agent.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="agent-image"
                    />
                  </div>

                  <div className="agent-body">
                    <p className="agent-role">{agent.role}</p>
                    <h2>{agent.name}</h2>
                    <p className="agent-experience">{agent.experience}</p>

                    <ul className="agent-specialties">
                      {agent.specialties.map((specialty) => (
                        <li key={`${agent.id}-${specialty}`}>{specialty}</li>
                      ))}
                    </ul>

                    <div className="agent-actions">
                      <a href={`tel:${agent.phone.replace(/\s+/g, "")}`}>
                        <IconPhone />
                        {agent.phone}
                      </a>
                      <a href={`mailto:${agent.email}`}>
                        <IconMail />
                        {agent.email}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="subpage-cta">
              <h3>Chcesz dobrać agenta do swojej nieruchomości?</h3>
              <Link href="/kontakt?template=sprzedaz#formularz-zgloszeniowy" className="btn btn-primary">
                Umów rozmowę
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
