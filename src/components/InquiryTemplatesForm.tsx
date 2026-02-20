"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

type InquiryMode = "kupno" | "wynajem" | "sprzedaz";

type InquiryFieldId =
  | "buyLocation"
  | "buyDistrict"
  | "buyType"
  | "buyBudget"
  | "buyArea"
  | "buyTimeline"
  | "rentLocation"
  | "rentType"
  | "rentBudget"
  | "rentRooms"
  | "rentTimeline"
  | "saleCity"
  | "saleAddress"
  | "saleArea"
  | "saleRooms"
  | "saleCondition"
  | "saleTimeline";

type ContactFormState = Record<InquiryFieldId | "name" | "email" | "phone", string>;

type ModeField = {
  id: InquiryFieldId;
  label: string;
  placeholder: string;
  type?: "text" | "number";
};

const MODES: ReadonlyArray<{ id: InquiryMode; label: string }> = [
  { id: "kupno", label: "Kupno" },
  { id: "wynajem", label: "Wynajem" },
  { id: "sprzedaz", label: "Sprzedaż" },
];

const MODE_LABEL: Record<InquiryMode, string> = {
  kupno: "Kupno",
  wynajem: "Wynajem",
  sprzedaz: "Sprzedaż",
};

const MODE_SUBJECT: Record<InquiryMode, string> = {
  kupno: "Zapytanie: kupno nieruchomości",
  wynajem: "Zapytanie: wynajem nieruchomości",
  sprzedaz: "Zgłoszenie: sprzedaż nieruchomości",
};

const MODE_FIELDS: Record<InquiryMode, ReadonlyArray<ModeField>> = {
  kupno: [
    {
      id: "buyLocation",
      label: "Miejscowość",
      placeholder: "np. Warszawa",
    },
    {
      id: "buyDistrict",
      label: "Dzielnica / okolica",
      placeholder: "np. Mokotów",
    },
    {
      id: "buyType",
      label: "Typ nieruchomości",
      placeholder: "np. mieszkanie, dom",
    },
    {
      id: "buyBudget",
      label: "Budżet",
      placeholder: "np. 950 000 PLN",
    },
    {
      id: "buyArea",
      label: "Preferowany metraż",
      placeholder: "np. 65 m²",
    },
    {
      id: "buyTimeline",
      label: "Termin zakupu",
      placeholder: "np. do 3 miesięcy",
    },
  ],
  wynajem: [
    {
      id: "rentLocation",
      label: "Miejscowość",
      placeholder: "np. Gdańsk",
    },
    {
      id: "rentType",
      label: "Typ nieruchomości",
      placeholder: "np. mieszkanie, lokal",
    },
    {
      id: "rentBudget",
      label: "Budżet miesięczny",
      placeholder: "np. 4 500 PLN / mc",
    },
    {
      id: "rentRooms",
      label: "Liczba pokoi",
      placeholder: "np. 2-3",
    },
    {
      id: "rentTimeline",
      label: "Termin najmu",
      placeholder: "np. od przyszłego miesiąca",
    },
  ],
  sprzedaz: [
    {
      id: "saleCity",
      label: "Miejscowość",
      placeholder: "np. Wrocław",
    },
    {
      id: "saleAddress",
      label: "Adres nieruchomości",
      placeholder: "ulica, numer",
    },
    {
      id: "saleArea",
      label: "Metry kwadratowe",
      placeholder: "np. 78",
      type: "number",
    },
    {
      id: "saleRooms",
      label: "Liczba pokoi",
      placeholder: "np. 3",
      type: "number",
    },
    {
      id: "saleCondition",
      label: "Stan nieruchomości",
      placeholder: "np. do zamieszkania / do remontu",
    },
    {
      id: "saleTimeline",
      label: "Preferowany termin sprzedaży",
      placeholder: "np. w ciągu 2 miesięcy",
    },
  ],
};

const MESSAGE_TEMPLATE: Record<InquiryMode, string> = {
  kupno: `Dzień dobry,

interesuje mnie zakup nieruchomości.

Najważniejsze założenia:
- lokalizacja:
- budżet:
- typ nieruchomości:
- metraż:
- termin zakupu:

Dodatkowe informacje:`,
  wynajem: `Dzień dobry,

szukam nieruchomości do wynajęcia.

Najważniejsze założenia:
- lokalizacja:
- budżet miesięczny:
- typ nieruchomości:
- liczba pokoi:
- termin najmu:

Dodatkowe informacje:`,
  sprzedaz: `Dzień dobry,

chcę zlecić sprzedaż nieruchomości.

Wstępne dane:
- miejscowość:
- adres:
- metraż:
- liczba pokoi:
- stan nieruchomości:
- preferowany termin sprzedaży:

Proszę o kontakt w sprawie wyceny i planu sprzedaży.`,
};

const INITIAL_FORM_STATE: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  buyLocation: "",
  buyDistrict: "",
  buyType: "",
  buyBudget: "",
  buyArea: "",
  buyTimeline: "",
  rentLocation: "",
  rentType: "",
  rentBudget: "",
  rentRooms: "",
  rentTimeline: "",
  saleCity: "",
  saleAddress: "",
  saleArea: "",
  saleRooms: "",
  saleCondition: "",
  saleTimeline: "",
};

function getModeFromParam(value: string | null): InquiryMode | null {
  if (value === "kupno" || value === "wynajem" || value === "sprzedaz") {
    return value;
  }

  return null;
}

export default function InquiryTemplatesForm() {
  const searchParams = useSearchParams();
  const [mode, setMode] = useState<InquiryMode>("kupno");
  const [formState, setFormState] = useState<ContactFormState>(INITIAL_FORM_STATE);
  const [modeMessage, setModeMessage] =
    useState<Record<InquiryMode, string>>(MESSAGE_TEMPLATE);

  useEffect(() => {
    const nextMode = getModeFromParam(searchParams.get("template"));

    if (nextMode) {
      setMode(nextMode);
    }
  }, [searchParams]);

  const mailtoHref = useMemo(() => {
    const modeDetails = MODE_FIELDS[mode].map((field) => {
      const value = formState[field.id].trim();
      return `- ${field.label}: ${value !== "" ? value : "-"}`;
    });

    const body = [
      `Tryb zgłoszenia: ${MODE_LABEL[mode]}`,
      "",
      "Dane kontaktowe:",
      `- Imię i nazwisko: ${formState.name.trim() || "-"}`,
      `- E-mail: ${formState.email.trim() || "-"}`,
      `- Telefon: ${formState.phone.trim() || "-"}`,
      "",
      "Szczegóły:",
      ...modeDetails,
      "",
      "Wiadomość:",
      modeMessage[mode],
    ].join("\n");

    return `mailto:kontakt@modernestate.pl?subject=${encodeURIComponent(MODE_SUBJECT[mode])}&body=${encodeURIComponent(body)}`;
  }, [formState, mode, modeMessage]);

  return (
    <section
      id="formularz-zgloszeniowy"
      className="inquiry-panel"
      aria-labelledby="inquiry-title"
    >
      <div className="inquiry-header">
        <h3 id="inquiry-title">Formularz zgłoszenia</h3>
        <p>
          Wybierz rodzaj zapytania, uzupełnij gotowy szablon i wyślij wiadomość.
        </p>
      </div>

      <div className="inquiry-tabs" role="tablist" aria-label="Rodzaj zgłoszenia">
        {MODES.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={mode === item.id}
            className={`inquiry-tab${mode === item.id ? " is-active" : ""}`}
            onClick={() => setMode(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <form className="inquiry-form" action="#">
        <div className="inquiry-grid inquiry-grid-common">
          <div className="field">
            <label htmlFor="inquiry-name">Imię i nazwisko</label>
            <input
              id="inquiry-name"
              type="text"
              value={formState.name}
              onChange={(event) =>
                setFormState((previous) => ({
                  ...previous,
                  name: event.target.value,
                }))
              }
              placeholder="Twoje dane"
            />
          </div>

          <div className="field">
            <label htmlFor="inquiry-email">E-mail</label>
            <input
              id="inquiry-email"
              type="email"
              value={formState.email}
              onChange={(event) =>
                setFormState((previous) => ({
                  ...previous,
                  email: event.target.value,
                }))
              }
              placeholder="np. imie@domena.pl"
            />
          </div>

          <div className="field">
            <label htmlFor="inquiry-phone">Telefon</label>
            <input
              id="inquiry-phone"
              type="tel"
              value={formState.phone}
              onChange={(event) =>
                setFormState((previous) => ({
                  ...previous,
                  phone: event.target.value,
                }))
              }
              placeholder="np. +48 500 600 700"
            />
          </div>
        </div>

        <div className="inquiry-grid inquiry-grid-mode">
          {MODE_FIELDS[mode].map((field) => (
            <div className="field" key={field.id}>
              <label htmlFor={field.id}>{field.label}</label>
              <input
                id={field.id}
                type={field.type ?? "text"}
                inputMode={field.type === "number" ? "numeric" : undefined}
                value={formState[field.id]}
                onChange={(event) =>
                  setFormState((previous) => ({
                    ...previous,
                    [field.id]: event.target.value,
                  }))
                }
                placeholder={field.placeholder}
              />
            </div>
          ))}
        </div>

        <div className="field inquiry-message-field">
          <label htmlFor="inquiry-message">Wiadomość (szablon)</label>
          <textarea
            id="inquiry-message"
            value={modeMessage[mode]}
            onChange={(event) =>
              setModeMessage((previous) => ({
                ...previous,
                [mode]: event.target.value,
              }))
            }
            rows={11}
          />
        </div>

        <div className="inquiry-actions">
          <a className="btn btn-primary" href={mailtoHref}>
            Wyślij gotowe zgłoszenie
          </a>
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={() =>
              setModeMessage((previous) => ({
                ...previous,
                [mode]: MESSAGE_TEMPLATE[mode],
              }))
            }
          >
            Przywróć szablon
          </button>
        </div>

        <p className="inquiry-note">
          Po kliknięciu otworzy się klient poczty z uzupełnionym tematem i treścią.
        </p>
      </form>
    </section>
  );
}
