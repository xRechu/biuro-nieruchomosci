import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function TermsPage() {
  return (
    <>
      <Header />

      <main className="content-main legal-main">
        <section className="subpage-hero legal-hero">
          <div className="container">
            <p className="section-kicker">Dokumenty prawne</p>
            <h1>Regulamin serwisu ModernEstate</h1>
            <p>
              Poniżej znajdziesz zasady korzystania z serwisu internetowego
              biura nieruchomości ModernEstate.
            </p>
          </div>
        </section>

        <section className="section subpage-section legal-section">
          <div className="container legal-content">
            <article className="legal-card">
              <h2>1. Postanowienia ogólne</h2>
              <p>
                Serwis ma charakter informacyjny i prezentuje oferty oraz
                usługi świadczone przez ModernEstate. Korzystanie z serwisu
                oznacza akceptację niniejszego regulaminu.
              </p>
            </article>

            <article className="legal-card">
              <h2>2. Zakres usług</h2>
              <ul>
                <li>prezentacja ofert nieruchomości,</li>
                <li>formularze kontaktowe i zapytania ofertowe,</li>
                <li>umawianie konsultacji z agentami.</li>
              </ul>
            </article>

            <article className="legal-card">
              <h2>3. Zasady kontaktu i odpowiedzialność</h2>
              <p>
                Użytkownik zobowiązuje się do podawania prawdziwych danych.
                ModernEstate dokłada należytej staranności, aby informacje były
                aktualne, jednak nie stanowią one oferty w rozumieniu Kodeksu
                cywilnego.
              </p>
            </article>

            <article className="legal-card">
              <h2>4. Własność intelektualna</h2>
              <p>
                Materiały opublikowane w serwisie, w tym zdjęcia, opisy i
                elementy graficzne, podlegają ochronie prawnej i nie mogą być
                kopiowane bez zgody właściciela.
              </p>
            </article>

            <article className="legal-card">
              <h2>5. Zmiany regulaminu</h2>
              <p>
                ModernEstate może aktualizować regulamin. Zmiany publikowane są
                na tej stronie i obowiązują od dnia ich opublikowania.
              </p>
              <p>
                Informacje o przetwarzaniu danych znajdziesz w{" "}
                <Link href="/polityka-prywatnosci">Polityce Prywatności</Link>.
              </p>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
