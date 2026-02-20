import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ModernEstate | Biuro Nieruchomości",
  description:
    "Nowoczesne biuro nieruchomości: sprzedaż, zakup i wynajem premium z pełnym wsparciem ekspertów.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
