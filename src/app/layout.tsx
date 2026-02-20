import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

export const metadata: Metadata = {
  title: "ModernEstate | Biuro Nieruchomości",
  description:
    "Nowoczesne biuro nieruchomości: sprzedaż, zakup i wynajem premium z pełnym wsparciem ekspertów.",
};

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${plusJakartaSans.variable} ${sora.variable}`}>
      <body className={plusJakartaSans.className}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
