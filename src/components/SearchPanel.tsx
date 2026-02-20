"use client";

import Link from "next/link";
import { useState } from "react";
import { IconChevronDown } from "@/components/LucideIcons";

type SearchMode = "kupno" | "wynajem" | "sprzedaz";

const SEARCH_MODES: ReadonlyArray<{ id: SearchMode; label: string }> = [
  { id: "kupno", label: "Kupno" },
  { id: "wynajem", label: "Wynajem" },
  { id: "sprzedaz", label: "Sprzedaż" },
];

const SEARCH_META: Record<SearchMode, { budgetLabel: string; submitLabel: string }> = {
  kupno: {
    budgetLabel: "Cena maksymalna",
    submitLabel: "Szukaj do kupna",
  },
  wynajem: {
    budgetLabel: "Budżet miesięczny",
    submitLabel: "Szukaj do wynajmu",
  },
  sprzedaz: {
    budgetLabel: "",
    submitLabel: "",
  },
};

export default function SearchPanel() {
  const [mode, setMode] = useState<SearchMode>("kupno");
  const isSellMode = mode === "sprzedaz";
  const modeMeta = SEARCH_META[mode];

  return (
    <section className="search-shell" aria-label="Wyszukiwarka nieruchomości">
      <div className="container">
        <div className="search-card search-card-solid">
          <div className="search-tabs" aria-label="Tryb ofert">
            {SEARCH_MODES.map((tab) => (
              <button
                key={tab.id}
                type="button"
                aria-pressed={mode === tab.id}
                className={`search-tab${mode === tab.id ? " is-active" : ""}`}
                onClick={() => setMode(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {isSellMode ? (
            <div className="search-sell">
              <h3>Chcesz sprzedać nieruchomość?</h3>
              <p>
                Umów bezpłatną konsultację i poznaj realną wycenę wraz z planem
                sprzedaży dopasowanym do Twojej nieruchomości.
              </p>
              <div className="search-sell-actions">
                <Link href="/#kontakt" className="btn btn-primary">
                  Przejdź do kontaktu
                </Link>
                <a className="btn btn-outline-dark" href="mailto:kontakt@modernestate.pl">
                  Wyślij zgłoszenie
                </a>
              </div>
            </div>
          ) : (
            <form className="search-grid" action="#">
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
                <div className="select-wrap">
                  <select id="search-type" name="type" defaultValue="all">
                    <option value="all">Wszystkie</option>
                    <option value="flat">Mieszkanie</option>
                    <option value="house">Dom</option>
                    <option value="commercial">Lokal</option>
                  </select>
                  <IconChevronDown className="select-icon" />
                </div>
              </div>

              <div className="field">
                <label htmlFor="search-budget">{modeMeta.budgetLabel}</label>
                <input
                  id="search-budget"
                  name="budget"
                  type="text"
                  inputMode="numeric"
                  placeholder={
                    mode === "kupno" ? "np. 800 000 PLN" : "np. 4 500 PLN / mc"
                  }
                />
              </div>

              <div className="search-action">
                <button type="submit" className="btn btn-primary btn-wide">
                  {modeMeta.submitLabel}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
