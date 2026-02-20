import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <main className="content-main legal-main">
        <section className="subpage-hero legal-hero">
          <div className="container">
            <p className="section-kicker">Dokumenty prawne</p>
            <h1>Polityka Prywatności</h1>
            <p>
              Informacje o tym, jakie dane przetwarzamy, w jakim celu oraz jak
              realizujemy obowiązki wynikające z RODO.
            </p>
          </div>
        </section>

        <section className="section subpage-section legal-section">
          <div className="container legal-content">
            <article className="legal-card">
              <h2>1. Administrator danych</h2>
              <p>
                Administratorem danych jest ModernEstate Sp. z o.o. z siedzibą
                w Warszawie, ul. Złota 44, 00-120 Warszawa.
              </p>
            </article>

            <article className="legal-card">
              <h2>2. Zakres przetwarzanych danych</h2>
              <ul>
                <li>dane identyfikacyjne i kontaktowe podane w formularzach,</li>
                <li>dane dotyczące nieruchomości i preferencji klienta,</li>
                <li>informacje techniczne związane z działaniem serwisu.</li>
              </ul>
            </article>

            <article className="legal-card">
              <h2>3. Cele i podstawa przetwarzania</h2>
              <p>
                Dane przetwarzamy w celu odpowiedzi na zapytania, realizacji
                usług pośrednictwa i obsługi umów. Podstawą przetwarzania jest
                zgoda, wykonanie umowy lub prawnie uzasadniony interes
                administratora.
              </p>
            </article>

            <article id="cookies" className="legal-card">
              <h2>4. Pliki cookies (RODO)</h2>
              <p>
                Serwis korzysta z cookies niezbędnych do działania. Cookies
                analityczne i marketingowe aktywujemy tylko po uzyskaniu zgody
                użytkownika przez baner cookies.
              </p>
              <p>
                Zgodą możesz zarządzać przez przycisk „Ustawienia cookies”
                dostępny na stronie.
              </p>
            </article>

            <article className="legal-card">
              <h2>5. Prawa użytkownika</h2>
              <p>
                Masz prawo do dostępu do danych, sprostowania, usunięcia,
                ograniczenia przetwarzania, przenoszenia danych oraz wniesienia
                sprzeciwu.
              </p>
            </article>

            <article className="legal-card">
              <h2>6. Kontakt w sprawach danych</h2>
              <p>
                W sprawach dotyczących danych osobowych skontaktuj się z nami:
                <a href="mailto:kontakt@modernestate.pl"> kontakt@modernestate.pl</a>.
              </p>
              <p>
                Szczegóły korzystania z serwisu zawiera{" "}
                <Link href="/regulamin">Regulamin</Link>.
              </p>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
