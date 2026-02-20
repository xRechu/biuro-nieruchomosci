import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      {/* ── Hero ───────────────────────────────── */}
      <section id="hero" className="hero">
        <div className="container hero-content">
          <h1 className="hero-title">
            Znajdź swoją wymarzoną nieruchomość
          </h1>
          <p className="hero-description">
            Pomagamy kupować, sprzedawać i wynajmować nieruchomości od ponad 10
            lat. Zaufaj specjalistom z doświadczeniem.
          </p>
          <div className="hero-actions">
            <a href="#oferta" className="btn btn-primary">
              Zobacz ofertę
            </a>
            <a href="#kontakt" className="btn btn-outline">
              Skontaktuj się
            </a>
          </div>
        </div>
      </section>

      {/* ── O nas ──────────────────────────────── */}
      <section id="o-nas" className="section">
        <div className="container">
          <h2 className="section-title">O nas</h2>
          <p className="section-subtitle">
            Jesteśmy zespołem pasjonatów rynku nieruchomości. Łączymy wiedzę,
            doświadczenie i indywidualne podejście do każdego klienta.
          </p>
        </div>
      </section>

      {/* ── Oferta ─────────────────────────────── */}
      <section id="oferta" className="section" style={{ backgroundColor: "var(--color-bg-alt)" }}>
        <div className="container">
          <h2 className="section-title">Nasza oferta</h2>
          <p className="section-subtitle">
            Kompleksowa obsługa na każdym etapie transakcji.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏠</div>
              <h3>Sprzedaż</h3>
              <p>
                Pomożemy Ci sprzedać nieruchomość szybko i w najlepszej cenie.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔑</div>
              <h3>Wynajem</h3>
              <p>
                Znajdziemy idealnych najemców lub lokal na wynajem dopasowany do
                Twoich potrzeb.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📋</div>
              <h3>Doradztwo</h3>
              <p>
                Profesjonalne doradztwo w zakresie inwestycji i wyceny
                nieruchomości.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Kontakt ────────────────────────────── */}
      <section id="kontakt" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Kontakt</h2>

          <div className="contact-wrapper">
            <div className="contact-info">
              <h3>Dane kontaktowe</h3>
              <p>📍 ul. Przykładowa 12, 00-001 Warszawa</p>
              <p>📞 +48 123 456 789</p>
              <p>✉️ kontakt@biuro-nieruchomosci.pl</p>
              <p>🕐 Pon–Pt: 9:00–17:00</p>
            </div>

            <form className="contact-form">
              <input type="text" placeholder="Imię i nazwisko" required />
              <input type="email" placeholder="Adres e-mail" required />
              <input type="tel" placeholder="Numer telefonu" />
              <textarea placeholder="Twoja wiadomość..." required />
              <button type="submit" className="btn btn-primary">
                Wyślij wiadomość
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
