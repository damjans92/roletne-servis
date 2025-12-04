import type { Metadata } from "next";
import { Montserrat, Red_Hat_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/header/Navbar";
import Footer from "./_components/footer/Footer";
import Header from "./_components/header/Header";

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
    default: "Servis i popravka roletni Beograd",
    template: "%s | Servis i popravka roletni Beograd",
  },
  description:
    "Roletnar, servis i poprakva svih vrsta roletni. Montaža i ugradnja novih roletni. Aluminijumske roletne, PVC roletne, drvene roletne, venecijaneri, trakaste zavese. Popravka drvenih roletni, reparavija i ugradnja.",

  openGraph: {
    title: "Servis i popravka roletni Beograd",
    description:
      "Roletnar, servis i poprakva svih vrsta roletni. Montaža i ugradnja novih roletni. Aluminijumske roletne, PVC roletne, drvene roletne, venecijaneri, trakaste zavese. Popravka drvenih roletni, reparavija i ugradnja.",
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
        <Footer />
      </body>
    </html>
  );
}
