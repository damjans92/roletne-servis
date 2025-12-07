import type { Metadata } from "next";
import { Montserrat, Red_Hat_Display } from "next/font/google";
import "./globals.css";
import Footer from "./_components/footer/Footer";
import Header from "./_components/header/Header";
import FloatingViber from "./_components/ui/FloatingViber";

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "800"],
});

export const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-redhat",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Servis i popravka roletni Beograd | Ugradnja novih",
    template: "%s | Servis i popravka roletni Beograd | Ugradnja novih",
  },
  description:
    "Servis i reparacija drvenih roletni, ugradnja novih alu i pvc roletni. Popravljamo sve vrste, od venecijanera do trakastih zavesa. Brzo i povoljno.",

  openGraph: {
    title: "Servis i popravka roletni Beograd | Ugradnja novih",
    description:
      "Servis i reparacija drvenih roletni, ugradnja novih alu i pvc roletni. Popravljamo sve vrste, od venecijanera do trakastih zavesa. Brzo i povoljno.",
    url: "https://servis-popravka-roletni",
    siteName: "Servis i popravka roletni",
    images: [
      {
        url: "https://servis-popravka-roletni/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Servis i popravka roletni Beograd",
      },
    ],
    locale: "sr_RS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${redHatDisplay.variable} antialiased`}
      >
        <Header />
        {children}
        <FloatingViber />
        <Footer />
      </body>
    </html>
  );
}
