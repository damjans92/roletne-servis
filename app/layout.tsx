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
    default: "Servis i popravka roletni",
    template: "%s | Servis i popravka roletni",
  },
  description:
    "Servis i popravka roletni - Brza i pouzdana usluga popravke roletni za vaš dom ili poslovni prostor. Kontaktirajte nas danas!",
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
        {/* <Navbar /> */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
