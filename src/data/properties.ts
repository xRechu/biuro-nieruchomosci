export type PropertyDetailIcon = "bed" | "bath" | "ruler";
export type OfferType = "sprzedaz" | "wynajem";

export type PropertyOffer = {
  id: string;
  type: OfferType;
  price: string;
  title: string;
  location: string;
  image: string;
  alt: string;
  description: string;
  details: ReadonlyArray<{
    icon: PropertyDetailIcon;
    label: string;
    value: string;
  }>;
};

export const PROPERTY_OFFERS: ReadonlyArray<PropertyOffer> = [
  {
    id: "warszawa-loft",
    type: "sprzedaz",
    price: "1 250 000 PLN",
    title: "Nowoczesny loft z antresolą",
    location: "Warszawa, Śródmieście",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    alt: "Nowoczesny salon w apartamencie typu loft",
    description:
      "Apartament premium z antresolą, wysokimi sufitami i widokiem na centrum miasta.",
    details: [
      { icon: "bed", label: "Pokoje", value: "3" },
      { icon: "bath", label: "Łazienki", value: "2" },
      { icon: "ruler", label: "Metraż", value: "84 m²" },
    ],
  },
  {
    id: "wroclaw-apartment",
    type: "sprzedaz",
    price: "890 000 PLN",
    title: "Apartament przy parku",
    location: "Wrocław, Krzyki",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    alt: "Nowoczesna kuchnia i jadalnia w apartamencie",
    description:
      "Dwupokojowy apartament z loggią i miejscem postojowym w inwestycji premium.",
    details: [
      { icon: "bed", label: "Pokoje", value: "2" },
      { icon: "bath", label: "Łazienki", value: "1" },
      { icon: "ruler", label: "Metraż", value: "56 m²" },
    ],
  },
  {
    id: "gdansk-rental",
    type: "wynajem",
    price: "3 100 PLN / mc",
    title: "Słoneczne mieszkanie na wynajem",
    location: "Gdańsk, Oliwa",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    alt: "Przestronny salon z dużymi oknami",
    description:
      "Komfortowe mieszkanie blisko komunikacji i terenów zielonych. Dostępne od zaraz.",
    details: [
      { icon: "bed", label: "Pokoje", value: "2" },
      { icon: "bath", label: "Łazienki", value: "1" },
      { icon: "ruler", label: "Metraż", value: "48 m²" },
    ],
  },
  {
    id: "poznan-house",
    type: "sprzedaz",
    price: "1 790 000 PLN",
    title: "Dom rodzinny z ogrodem",
    location: "Poznań, Strzeszyn",
    image:
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1200&q=80",
    alt: "Nowoczesny dom jednorodzinny z ogrodem",
    description:
      "Wolnostojący dom po remoncie, kameralna okolica, szybki dojazd do centrum.",
    details: [
      { icon: "bed", label: "Pokoje", value: "5" },
      { icon: "bath", label: "Łazienki", value: "2" },
      { icon: "ruler", label: "Metraż", value: "162 m²" },
    ],
  },
  {
    id: "krakow-rent",
    type: "wynajem",
    price: "4 600 PLN / mc",
    title: "Apartament z tarasem",
    location: "Kraków, Zabłocie",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    alt: "Nowoczesna sypialnia w apartamencie",
    description:
      "Trzypokojowy apartament na osiedlu z recepcją i strefą fitness.",
    details: [
      { icon: "bed", label: "Pokoje", value: "3" },
      { icon: "bath", label: "Łazienki", value: "2" },
      { icon: "ruler", label: "Metraż", value: "74 m²" },
    ],
  },
  {
    id: "lodz-investment",
    type: "sprzedaz",
    price: "640 000 PLN",
    title: "Mieszkanie inwestycyjne",
    location: "Łódź, Polesie",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7f34b5d9f53?auto=format&fit=crop&w=1200&q=80",
    alt: "Salon z aneksem kuchennym w nowym mieszkaniu",
    description:
      "Lokal po generalnym remoncie, układ idealny pod inwestycję lub pierwszy zakup.",
    details: [
      { icon: "bed", label: "Pokoje", value: "2" },
      { icon: "bath", label: "Łazienki", value: "1" },
      { icon: "ruler", label: "Metraż", value: "51 m²" },
    ],
  },
];

export const FEATURED_PROPERTIES: ReadonlyArray<PropertyOffer> =
  PROPERTY_OFFERS.slice(0, 3);
